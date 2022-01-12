import { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { Form } from "../components";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import * as ROUTES from "../constants/routes";

const Signin = () => {
  const { auth } = useAuthContext();
  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = (password === "") | (emailAddress === "");

  const handleSignin = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        setEmailAddress("");
        setPassword("");
        setError("");
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <Fragment>
      <HeaderContainer signCondition="Sign Up" path={ROUTES.SIGN_UP}>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              value={password}
              autoComplete="off"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>

            <Form.Text>
              New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
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

export default Signin;
