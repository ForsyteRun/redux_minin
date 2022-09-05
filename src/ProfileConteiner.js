import { Component } from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import {getUserProfileThunkCreator} from './redux/profileReduser';
class ProfileConteiner extends Component{
  
  componentDidMount(){
    let match = this.props.router.params.id;
    this.props.getUserProfileThunkCreator(match);
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
export default connect(mapStateToProps, {getUserProfileThunkCreator})(RouterComponent);