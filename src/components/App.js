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
      transactionConfirmed: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.logout = this.logout.bind(this)
    this.login = this.login.bind(this)
    this.createAccount = this.createAccount.bind(this)
    this.cancel = this.cancel.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.processTransaction = this.processTransaction.bind(this)
  }

  componentDidMount() {
    axios.get('/getCharityInfo')
    .then((response) => {
      this.setState({charityList: response.data})
    })
    .catch((error)=>{
      console.log(error)
    })
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
        .then(() => {
          this.setState({ isLoggedInPage: true, isLoggedIn: successUsername, usernameLogin: '', passwordLogin: '' })
        })
        .catch(() => {
          this.setState({ isLoggedInPage: false })
        });
    }
  }

  logout() {
    this.setState({ isLoggedIn: false, isSignedIn: false })
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
    this.setState({addedToCart: addedToCart})
  }

  removeFromCart(item) {
    let currentCart = this.state.addedToCart.slice()
    currentCart.splice(item, 1)
    this.setState({addedToCart: currentCart})
  }

  processTransaction() {
    console.log('transaction processed')
    this.setState({
      transactionConfirmed: true,
      addedToCart: [],
    })
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
            addToCart={this.addToCart}
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
          />}
        />
        <Route exact path='/forgotPass'
          render={(props) => <ForgotPassword {...props}
            email={this.state.email}
            handleChange={this.handleChange}
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
            />}
          />
      </div>
    );
  }
}

export default App;
