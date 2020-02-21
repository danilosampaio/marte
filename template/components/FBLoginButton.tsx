import React from 'react';
import {SocialIcon} from 'react-native-elements';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';
import {Alert} from 'react-native';

interface FBButtonProps {
  onResponse: Function;
  profileFields?: Array<string>;
  permissions?: Array<string>;
}

const FBLoginButton = (props: FBButtonProps) => {
  const {onResponse, profileFields, permissions} = props;

  const showErrorAlert = (error: object) => {
    Alert.alert(
      'Erro fazer login',
      error.toString(),
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  const _responseInfoCallback = (
    error: object | undefined,
    result: object | undefined,
    accessToken: AccessToken | null,
  ) => {
    if (error) {
      showErrorAlert(error);
    } else {
      onResponse(result, accessToken);
    }
  };
  const getUserInfo = (accessToken: AccessToken | null) => {
    const fields = profileFields
      ? profileFields.join(',')
      : 'name,email,picture.type(large)';
    const infoRequest = new GraphRequest(
      `/me?fields=${fields}`,
      null,
      (error, result) => _responseInfoCallback(error, result, accessToken),
    );
    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start();
  };

  const handleFacebookLogin = () => {
    const loginPermissions = permissions || ['public_profile', 'email'];
    LoginManager.logInWithPermissions(loginPermissions).then(
      (result: {isCancelled: boolean}) => {
        if (result.isCancelled) {
          _responseInfoCallback(new Error('Login cancelled'), result, null);
        } else {
          AccessToken.getCurrentAccessToken().then(accessToken => {
            getUserInfo(accessToken);
          });
        }
      },
      error => {
        showErrorAlert(error);
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
