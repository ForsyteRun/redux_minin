import { connect } from "react-redux";
import { Component } from "react";
import MyProfile from "./MyProfile";
import { getHeaderThunkCreater } from './redux/authReduser';
import { userAvatar, firstLoadLogoProfile, getProfileData } from './redux/profileReduser';

class MyProfileConteiner extends Component {
//   if (!isAuth) {
//     return <Navigate to='/auth' />
//  } else  {
//   return null
//  }

  componentDidMount(){
      this.props.firstLoadLogoProfile();
      this.props.getProfileData();
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
    imageProfile: state.profile.imageProfile,
    isLoading: state.usersPage.isLoading,
    profileData: state.profile,
  }
};

export default connect(mapStateToProps, {getHeaderThunkCreater, firstLoadLogoProfile, userAvatar, getProfileData})(MyProfileConteiner);