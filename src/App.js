import './App.css';
import FrontPage from "./components/FrontPage";
import Signup from "./components/Signup";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom"; //See index.js-file for more on this
// import Navbar from "./UI/Navbar";
// import Navbar2 from "./UI/Navbar2";
import Createblogpost from './components/Createblogpost';
import BlogList from './components/BlogList';
import BlogItem from './components/BlogItem';
import SignIn from './components/SignIn';
import UserProfile from './components/UserProfile';
import { StylesProvider } from '@material-ui/core/styles';
import { Tab, Tabs } from '@material-ui/core';
import React from 'react';
 import { loggedInStatus } from './api';


// ✋ Need to look at how to connect so we get to the right user profile by the user thats logged in. Started here...
// but didnt finish...

class App extends React.Component {
  state= {
    loggedInUser: null
  }
  
  

// const UserLoginStatus = () => {
//   const [userAccess, setLoginStatus] = useState([]);
//     //In case the page is refreshed I check if there's
//     //an active session on the backend
//     async function fetchLogin() {
//       const response = await loggedInStatus();
//       setLoginStatus(response.data);
//     }
//     fetchPosts();
//   }, []); //<- dependency array shall be empthy for this one that is


async componentDidMount() {
  if (this.state.loggedInUser === null) {
    const response = await loggedInStatus();
    if (response.data._id) {
      this.setLoggedInUser(response.data)
    }
  }
}
setLoggedInUser = (user) => {
  this.setState({
    loggedInUser: user 
  })
}



render () {

let routes= [];

if (this.state.loggedInUser)  {
  routes = ["/", "/all-blog-posts", "/create-blog-post", `/user/${this.state.loggedInUser._id}`, "/signin"]
} else {
  routes = ["/", "/all-blog-posts", "/create-blog-post", `/signin`, "/signin"]
}
  
  return (
    <div className="App">
    <StylesProvider injectFirst>
    <BrowserRouter>
    <Route 
      path="/"
      render={(history) => (
      <Tabs value={
          history.location.pathname !== "/"
          ? history.location.pathname
          : false
          }
        >
        <Tab label="Home" 
        value={routes[0]}
        component={Link}
        to={routes[0]} 
        />
        <Tab label="Find" 
        value={routes[1]}
        component={Link}
        to={routes[1]} 
        />
        <Tab label="Write" 
        value={routes[2]}
        component={Link}
        to={routes[2]} 
        />
        <Tab label="Profile" 
        value={routes[3]}
        component={Link}
        to={routes[3]} 
        />
        <Tab label="Sign-in" 
        value={routes[4]}
        component={Link}
        to={routes[4]} 
        />
      </Tabs>
      )}>
    </Route>
      
      <Switch>
        <Route exact path="/" component={FrontPage} />
        <Route path="/signup" component={Signup} />
        <Route path="/create-blog-post" render={(props) => {
          return(
            <Createblogpost {...props} user={this.state.loggedInUser} />
          )
          }} />
        <Route path="/all-blog-posts" component={BlogList} />
        <Route path="/blogposts/:id" component={BlogItem} />
        <Route path="/signin" render={(props) => {
          return(
            <SignIn {...props} setLoggedInUser={this.setLoggedInUser} />
          )
        }}
         />

        <Route path="/user/:id" component={UserProfile} />
        {/* <Route
            exact
            path="/login"
            render={(props) => {
              return (
                <Login {...props} setLoggedInUser={this.setLoggedInUser} />
              );
            }}
          /> */}
      </Switch>
      </BrowserRouter>
      </StylesProvider>
    </div>
  );

}
}

export default App;
