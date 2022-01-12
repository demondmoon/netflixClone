import { useHistory } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState, Fragment} from "react";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

const Signup = () => {
  const {auth} = useAuthContext();
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  const signUpHandler = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(emailAddress, password) // 创建新用户
      .then((result) =>
        result.user
          .updateProfile({
            //更新用户profile
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            // 重置state
            setEmailAddress("");
            setPassword("");
            setError("");
            history.push(ROUTES.BROWSE); // 将跳转到Browse界面
          })
      )
      .catch((error) => setError(error.message));
  };

  return (
    <Fragment>
      <HeaderContainer signCondition="Sign In" path={ROUTES.SIGN_IN}>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={signUpHandler} method="POST">
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              value={password}
              autoComplete="off"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>

            <Form.Text>
              Already a Netflix user?{" "}
              <Form.Link to="/signin">Sign in now</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer></FooterContainer>
    </Fragment>
  );
};

export default Signup;
