import { connect } from "react-redux";
import { Component } from "react";
import MyProfile from "./MyProfile";
import { getHeaderThunkCreater } from './redux/authReduser';
import { userAvatar } from './redux/profileReduser';

class MyProfileConteiner extends Component {

  componentDidMount(){
      this.props.userAvatar()
    };  

  render() {
    return (
      <div>
        <MyProfile {...this.props}/>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return{
    isAuth: state.auth.isAuth,
  }
};

export default connect(mapStateToProps, {getHeaderThunkCreater, userAvatar})(MyProfileConteiner);