import React from 'react';
import {SocialIcon} from 'react-native-elements';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';

interface FBButtonProps {
  onResponse: Function;
  profileFields?: Array<string>;
  permissions?: Array<string>;
}

const FBLoginButton = (props: FBButtonProps) => {
  const {onResponse, profileFields, permissions} = props;

  const _responseInfoCallback = (error: object, result: object) => {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      onResponse(result);
    }
  };
  const getUserInfo = () => {
    const fields = profileFields
      ? profileFields.join(',')
      : 'name,email,picture';
    const infoRequest = new GraphRequest(
      `/me?fields=${fields}`,
      null,
      _responseInfoCallback,
    );
    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start();
  };

  const handleFacebookLogin = () => {
    const loginPermissions = permissions || ['public_profile', 'email'];
    LoginManager.logInWithPermissions(loginPermissions).then(
      (result: {isCancelled: boolean}) => {
        if (result.isCancelled) {
          alert('Login cancelled')
        } else {
          AccessToken.getCurrentAccessToken().then(() => {
            getUserInfo();
          });
        }
      },
      (error: string) => {
        alert('Login fail with error: ' + error)
      },
    );
  };

  return (
    <SocialIcon
      title="Entrar com Facebook"
      button
      type="facebook"
      onPress={handleFacebookLogin}
    />
  );
};

export default FBLoginButton;