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
import Firebase from "firebase";
import config from "../../config";
import data from '../../../src/data.json'
import ShowUserDetails from '../ShowUserDetails'

import { connect ,useDispatch } from 'react-redux';
import store from '../../store'



 class Wrapper extends Component {

  constructor(props) {
    super(props);
    if (!Firebase.apps.length) {
      Firebase.initializeApp(config);
}   
   

    this.state = {
      data : data
    }
  }

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(previousProps, previousState){
    //   const rating = store.getState().rating;
    //   console.log("rating",rating);
    if(previousState !== this.state){
        console.log("updated",this.state);
           this.writeUserData()

    }

    
     
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps",state,store.getState());
    return {
        rating : store.getState()
     
    };
  }

  writeUserData = () => {
    Firebase.database()
      .ref("/")
      .set(this.state.rating);
    
  };
  getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  render() {
    // const mystate=store.getState()
     console.log("DATA=====",this.state);
    //  alert("test");
    //  console.log("this",mystate);
   
    return (
         
        <ShowUserDetails userData={this.state.data}/>
       
           
    )
  }
}

const mapStateToProps = (state) => ({
  rating: [state.rating],
  
});
const mapDispatchToProps = (dispatch) => ({  
     
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper);

//  export default Wrapper


