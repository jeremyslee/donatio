import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../styles/App.css';
import Navigation from './Navigation.jsx'
import LoginContainer from './LoginContainer.jsx'
import CharityList from './CharityList.jsx'
import PurchaseContainer from './PurchaseContainer.jsx'
import SignUp from './SignUp.jsx'
import ForgotPassword from './ForgotPassword.jsx'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charityList: [
        {
          charity_id: null,
          organization: '',
          title: '',
          image: '',
          summary: '',
          category: '',
          country: ''
        }
      ],
      itemsToShow: 5,
      isLoggedIn: undefined,
      isLoggedInPage: null,
      isSignedIn: null,
      usernameLogin: '',
      passwordLogin: '',
      username: '',
      password: '',
      rstPassword: '',
      email: '',
      firstname: '',
      lastname: '',
      addedToCart: [],
      cartTotal: 0,
      transactionNumber: undefined,
      transactionConfirmed: false,
      resetPassword: null,
      userId: undefined,
      selectedCountry: '',
      selectedCategory: '',
      countries: [],
      categories: []
    }
    this.showMore = this.showMore.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.logout = this.logout.bind(this)
    this.login = this.login.bind(this)
    this.createAccount = this.createAccount.bind(this)
    this.cancel = this.cancel.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.processTransaction = this.processTransaction.bind(this)
    this.resetPassword = this.resetPassword.bind(this)
    this.handleChangeCategory = this.handleChangeCategory.bind(this)
    this.handleChangeCountry = this.handleChangeCountry.bind(this)
  }

  componentDidMount() {
    axios.get('/getCharityInfo')
    .then((response) => {
      this.setState({charityList: response.data})
    })
    .catch((error)=>{
      console.log(error)
    })

    axios.get('/getCountry')
    .then((response) => {
      this.setState({countries: response.data})
    })
    .catch((error)=>{
      console.log(error)
    })

    axios.get('/getCategory')
    .then((response) => {
      this.setState({categories: response.data})
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  showMore() {
    this.setState({ itemsToShow: this.state.itemsToShow + 5 })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  login(e) {
    e.preventDefault()
    const { usernameLogin, passwordLogin } = this.state
    const successUsername = this.state.usernameLogin
    if (usernameLogin && passwordLogin) {
      axios.post('/login', {
        usernameLogin,
        passwordLogin
      })
        .then((response) => {
          this.setState({
            isLoggedInPage: true,
            isLoggedIn: successUsername,
            usernameLogin: '',
            passwordLogin: '',
            userId: response.data.id
          })
        })
        .catch(() => {
          this.setState({ isLoggedInPage: false })
        });
    }
  }

  logout() {
    this.setState({
      isLoggedIn: false,
      isSignedIn: false,
      addedToCart: [],
      cartTotal: 0,
     })
  }

  createAccount(e) {
    e.preventDefault()
    const { email, username, password, rstPassword, firstname, lastname } = this.state
    const successUsername = this.state.username
    if (firstname && lastname && username && password && email && rstPassword) {
      axios.post('/signup', {
        email,
        username,
        password,
        firstname,
        lastname
      })
        .then(() => {
          this.setState({
            isSignedIn: true,
            isLoggedIn: successUsername,
            username: '',
            firstname: '',
            lastname: '',
            password: '',
            rstPassword: '',
            email: ''
          })
        })
        .catch(() => {
          this.setState({ isSignedIn: false })
        });
    }
  }

  cancel() {
    this.setState({ email: '', username: '', password: '', rstPassword: '', firstname: '', lastname: '' })
  }

  addToCart(organization) {
    let addedToCart = this.state.addedToCart.slice()
    let alreadyInCart = false
    for (let i = 0; i < addedToCart.length; i += 1) {
      if(addedToCart[i].organization === organization) {
        alreadyInCart = true
        addedToCart[i].amount += 5
      }
    }
    if (!alreadyInCart) addedToCart.push({organization, amount: 5})
    this.setState((prevState, props) => {
      return {
        transactionConfirmed: false,
        addedToCart: addedToCart,
        cartTotal: prevState.cartTotal + 5,
      }
    })
  }

  removeFromCart(item) {
    let currentCart = this.state.addedToCart.slice()
    let amount = this.state.addedToCart[item].amount
    currentCart.splice(item, 1)
    this.setState((prevState, props) => {
      return {
        addedToCart: currentCart,
        cartTotal: prevState.cartTotal - amount,
      }
    })
  }

  processTransaction() {
    if (this.state.userId) {
      axios.post('/processPurchase', {
        userId: this.state.userId,
        cartTotal: this.state.cartTotal
      })
      .then((response) => {
        this.setState({transactionNumber: response.data.id})
      })
      .catch((error)=>{
        console.log(error)
      })
      this.setState({
        transactionConfirmed: true,
        addedToCart: [],
        cartTotal: 0
      })
    } else {
      console.log('You are not logged in')
    }
  }

  resetPassword(e) {
    e.preventDefault()
    const { email } = this.state
    if (email) {
      axios.post('/forgot_password', {
        email
      })
        .then(() => {
          this.setState({ resetPassword: true })
        })
        .catch(() => {
          this.setState({ resetPassword: false })
        });
    }
  }

  handleChangeCountry(selectedOption) {
    this.setState({ selectedCountry: selectedOption ? selectedOption.value : null })
  }

  handleChangeCategory(selectedOption) {
    this.setState({ selectedCategory: selectedOption ? selectedOption.value : null });
  }


  render() {
    return (
      <div className="app">
        <Route path='/'
          render={(props) => <Navigation {...props}
            isLoggedIn={this.state.isLoggedIn}
            usernameLogin={this.state.usernameLogin}
            isSignedIn={this.state.isSignedIn}
            username={this.state.username}
            addedToCart={this.state.addedToCart}
          />}
        />
        <Route exact path='/'
          render={(props) => <CharityList {...props}
            charityList={this.state.charityList}
            expanded={this.state.expanded}
            showMore={this.showMore}
            selectedCountry={this.state.selectedCountry}
            selectedCategory={this.state.selectedCategory}
            handleChangeCountry={this.handleChangeCountry}
            handleChangeCategory={this.handleChangeCategory}
            countries={this.state.countries}
            categories={this.state.categories}
            addToCart={this.addToCart}
            itemsToShow={this.state.itemsToShow}
          />}
        />
        <Route exact path='/login'
          render={(props) => <LoginContainer {...props}
            isLoggedIn={this.state.isLoggedIn}
            isLoggedInPage={this.state.isLoggedInPage}
            usernameLogin={this.state.usernameLogin}
            passwordLogin={this.state.passwordLogin}
            handleChange={this.handleChange}
            login={this.login}
            logout={this.logout}
            userId={this.state.userId}
          />}
        />
        <Route exact path='/forgotPass'
          render={(props) => <ForgotPassword {...props}
            email={this.state.email}
            handleChange={this.handleChange}
            resetPassword={this.resetPassword}
          />}
        />
        <Route exact path='/signup'
          render={(props) => <SignUp {...props}
            isSignedIn={this.state.isSignedIn}
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            email={this.state.email}
            username={this.state.username}
            password={this.state.password}
            rstPassword={this.state.rstPassword}
            handleChange={this.handleChange}
            createAccount={this.createAccount}
            cancel={this.cancel}
          />}
        />
        <Route path='/cart'
          render={(props) => <PurchaseContainer
            addedToCart={this.state.addedToCart}
            removeFromCart={this.removeFromCart}
            processTransaction={this.processTransaction}
            transactionConfirmed={this.state.transactionConfirmed}
            cartTotal={this.state.cartTotal}
            userId={this.state.userId}
            transactionNumber={this.state.transactionNumber}
            />}
          />
      </div>
    );
  }
}

export default App;
