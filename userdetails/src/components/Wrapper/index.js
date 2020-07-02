import React, { Component } from 'react'
import Firebase from "firebase";
import { useSelector, useDispatch } from 'react-redux'
import { connect} from 'react-redux';
import store from '../../store'
import config from "../../config";
import data from '../../../src/data.json'
import ShowUserDetails from '../ShowUserDetails'
import {setRating} from '../../actions/userRatingAction'


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
    if(previousState !== this.state){        
           this.writeUserData()
    }   
     
  }

  static getDerivedStateFromProps(props, state) {
    const ratingStore=store.getState() && store.getState().userRating && store.getState().userRating.rating;  
    return {
        rating : ratingStore    
    };
  }

  writeUserData = () => {
    Firebase.database()
      .ref("/")
      .set(this.state);
    
  };
  getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  render() {
   
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
  null
)(Wrapper);


