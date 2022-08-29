import * as axios from "axios";
import { Component } from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfileAC} from './redux/profileReduser';
import { useLocation, useParams } from "react-router-dom";

class ProfileConteiner extends Component{
  
  componentDidMount(){
    let match = this.props.router.params.id;
    axios.get('https://jsonplaceholder.typicode.com/users/' + match)
      .then(response => {
        console.log(response.data);
            this.props.setProfileAC(response.data)
      })
  }

  render(){
  
    return (
      <div>
        <Profile data={this.props.userProfile}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return{
    userProfile: state.profile
  }
}
 
const withRouter = WrappedComponent => props => {
  let params = useParams();
  let location = useLocation();

  return (
    <WrappedComponent
    {...props}
    router = {{location, params}}   
    />
  )
}

let RouterComponent = withRouter(ProfileConteiner)
export default connect(mapStateToProps, {setProfileAC})(RouterComponent);