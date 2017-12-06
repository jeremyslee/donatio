import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../styles/App.css';
import Navigation from './Navigation.jsx'
import LoginContainer from './LoginContainer.jsx'
import CharityList from './CharityList.jsx'
import PurchaseContainer from './PurchaseContainer.jsx'
import SignUp from './SignUp.jsx'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charityList: [
        {
          organization: 'Women for Women',
          title: 'Education material for poor school children',
          image: 'https://www.globalgiving.org/pfil/31262/pict_large.jpg',
          summary: 'Ammapalayam, Panchayat Union middle school in Arni Block, Thriuvannamalai district. 210 poor children studying in our school. Quality educa…',
          category: 'Education',
          country: 'India',
        },
        {
          organization: 'Community Health, Housing, and Social Education',
          title: 'Support negelected elders with food, medicine, and clothing',
          image: 'https://www.globalgiving.org/pfil/31247/pict_original.jpg',
          summary: 'The less privileged elders need food, love and care. This project will provide meals to 57 homeless old age persons. Every day we provide nu…',
          category: 'Hunger',
          country: 'India',
        },
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
      addedToCart: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.logout = this.logout.bind(this)
    this.login = this.login.bind(this)
    this.createAccount = this.createAccount.bind(this)
    this.cancel = this.cancel.bind(this)
    this.addToCart = this.addToCart.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  login(e) {
    e.preventDefault()
    const { usernameLogin, passwordLogin } = this.state
    console.log('i click here')
    const successUsername = this.state.usernameLogin
    if (usernameLogin && passwordLogin) {
      console.log('1')
      axios.post('/login', {
        usernameLogin,
        passwordLogin
      })
        .then(() => {
          console.log('2')
          this.setState({ isLoggedInPage: true, isLoggedIn: successUsername, usernameLogin: '', passwordLogin: '' })
        })
        .catch(() => {
          console.log('3')
          this.setState({ isLoggedInPage: false })
        });
    }
  }

  logout() {
    this.setState({ isLoggedIn: false, isSignedIn: false, isLoggedInPage: false })
  }

  addToCart(organization) {
      let addedToCart = this.state.addedToCart.slice()
      addedToCart.push({organization, amount: 5})
      this.setState({addedToCart: addedToCart})
  }

  createAccount(e) {
    e.preventDefault()
    const { email, username, password, rstPassword } = this.state
    const successUsername = this.state.username
    if (username && password && email && rstPassword) {
      axios.post('/signup', {
        email,
        username,
        password
      })
        .then(() => {
          this.setState({
            isSignedIn: true,
            isLoggedIn: successUsername,
            username: '',
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
    this.setState({ email: '', username: '', password: '', rstPassword: '' })
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
        <Route exact path='/signup'
          render={(props) => <SignUp {...props}
            isSignedIn={this.state.isSignedIn}
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
            />}
          />
      </div>
    );
  }
}

export default App;
