import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../styles/App.css';
import Navigation from './Navigation.jsx'
import LoginContainer from './LoginContainer.jsx'
import CharityList from './CharityList.jsx'
import PurchaseContainer from './PurchaseContainer.jsx'
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
      isSignedIn: false,
      username: '',
      password: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.logout = this.logout.bind(this)
    this.login = this.login.bind(this)
    this.createAccount = this.createAccount.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    const username = this.state.username
    this.setState({
      isLoggedIn: username,
      isSignedIn: true,
      username: '',
      password: '',
    })
  }

  login(e) {
    e.preventDefault()
    const { username, password } = this.state
    if (username && password) {
      axios.post('/login', {
        username,
        password
      })
      .then(() => {
        this.setState({ isSignedIn: true })
      })
      .catch(() => {
        this.setState({ isSignedIn: false })
      });
    }
  }

  logout() {
    this.setState({isLoggedIn: false})
  }

  createAccount(e) {
     e.preventDefault()
    const { username, password } = this.state
    if (username && password) {
      axios.post('/createUser', {
        username,
        password
      })
      .then(() => {
        this.setState({ isSignedIn: true })
      })
      .catch(() => {
        this.setState({ isSignedIn: false })
      });
    }
  }

  render() {
    return (
      <div className="app">
        <Route path='/'
          render={(props) => <Navigation {...props}
            isLoggedIn={this.state.isLoggedIn}
            username={this.state.username}
            />}
          />
        <Route exact path='/'
          render={(props) => <CharityList {...props}
            charityList={this.state.charityList}
            />}
          />
        <Route exact path='/login'
          render={(props) => <LoginContainer {...props}
            isLoggedIn={this.state.isLoggedIn}
            isSignedIn={this.state.isSignedIn}
            username={this.state.username}
            password={this.state.password}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            login={this.login}
            logout={this.logout}
            />}
          />
        <Route exact path='/signin'

        />
        <Route path='/cart' component={PurchaseContainer} />
      </div>
    );
  }
}

export default App;
