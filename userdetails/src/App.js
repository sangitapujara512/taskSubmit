// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import config from "./config";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import { Provider } from 'react-redux';
import Wrapper from './components/Wrapper'
import Firebase from "firebase";
import config from "./config";
import data from './data.json'
import ShowUserDetails from './components/ShowUserDetails'
import store from './store'
import { connect ,useDispatch } from 'react-redux';



 class App extends Component {

//   constructor(props) {
//     super(props);
//     if (!Firebase.apps.length) {
//       Firebase.initializeApp(config);
// }   
   

//     this.state = {
//       data : data
//     }
//   }

//   componentDidMount() {
//     this.getUserData();
//   }

//   componentDidUpdate(){
//     console.log("STORE",store.getState())
//   }

  // writeUserData = () => {
  //   Firebase.database()
  //     .ref("/")
  //     .set(this.state);
  //   console.log("DATA SAVED");
  // };
  // getUserData = () => {
  //   let ref = Firebase.database().ref("/");
  //   ref.on("value", snapshot => {
  //     const state = snapshot.val();
  //     this.setState(state);
  //   });
  // };

  render() {
    // const mystate=store.getState()
    //  console.log("data",this.state);
    // //  alert("test");
    //  console.log("this",mystate);
   
    return (
         <Provider store={store}>
       <Wrapper/>
        {/* <button onClick={this.getUserData}> Click me</button> */}
        </Provider>        
    )
  }
}

// const mapStateToProps = (state) => ({
//   rating: [state.rating],
  
// });
// const mapDispatchToProps = (dispatch) => ({  
     
// });
// export default connect(
//   mapStateToProps,
//   null
// )(App);

 export default App


