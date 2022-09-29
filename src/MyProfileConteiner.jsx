import { connect } from "react-redux";
import { Component, PureComponent } from "react";
import MyProfile from "./MyProfile";
import { getHeaderThunkCreater } from './redux/authReduser';
import { userAvatar, firstLoadLogoProfile, getProfileData, upLoadProfileData } from './redux/profileReduser';

class MyProfileConteiner extends PureComponent {
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
    profileData: state.profile.profileInfo,
  }
};

export default connect(mapStateToProps, 
  {getHeaderThunkCreater, firstLoadLogoProfile, userAvatar, getProfileData, upLoadProfileData})
  (MyProfileConteiner);