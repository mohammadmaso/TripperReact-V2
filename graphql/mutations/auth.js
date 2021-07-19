import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation Mutation($tokenAuthEmail: String!, $tokenAuthPassword: String!) {
  tokenAuth(email: $tokenAuthEmail, password: $tokenAuthPassword) {
    token,
    refreshToken
  }
}
`;

export const SIGN_UP = gql`
  mutation Mutation($registerEmail: String!, $registerUsername: String!, $registerPassword1: String!, $registerPassword2: String!) {
  register(email: $registerEmail, username: $registerUsername, password1: $registerPassword1, password2: $registerPassword2) {
    success
    errors
  }
}
`;


export const RESEND_ACTIVATION_EMAIL = gql`
  mutation Mutation($resendActivationEmailEmail: String!) {
  resendActivationEmail(email: $resendActivationEmailEmail) {
    success
    errors
  }
}
`;


export const VERIFY_ACCOUNT = gql`
  mutation Mutation($verifyAccountToken: String!) {
  verifyAccount(token: $verifyAccountToken) {
    success
    errors
  }
}

`;



export const REFRESH_TOKEN = gql`
  mutation Mutation($refreshTokenRefreshToken: String!) {
  refreshToken(refreshToken: $refreshTokenRefreshToken) {
    token,
    refreshToken
  }
}
`;

export const PASSWORD_RESET_TOKEN = gql`
  mutation RegisterMutation($passwordResetToken: String!, $passwordResetNewPassword1: String!, $passwordResetNewPassword2: String!) {
  passwordReset(token: $passwordResetToken, newPassword1: $passwordResetNewPassword1, newPassword2: $passwordResetNewPassword2) {
    success
    errors
  }
}
`;

export const SEND_PASSWORD_RESET_EMAIL = gql`
  mutation Mutation($sendPasswordResetEmailEmail: String!) {
  sendPasswordResetEmail(email: $sendPasswordResetEmailEmail) {
    success
    errors
  }
}
`;
