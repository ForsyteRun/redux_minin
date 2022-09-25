import { connect } from "react-redux";
import { Component } from "react";
import MyProfile from "./MyProfile";
import { getHeaderThunkCreater } from './redux/authReduser';

class MyProfileConteiner extends Component {

  componentDidMount(){
    this.props.getHeaderThunkCreater()
  };

  render() {
    return (
      <div>
        <MyProfile isAuth = {this.props.isAuth}/>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return{
    isAuth: state.auth.isAuth,
  }
};

export default connect(mapStateToProps, {getHeaderThunkCreater})(MyProfileConteiner);