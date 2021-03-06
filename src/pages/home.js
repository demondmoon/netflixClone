import { Fragment } from "react";
import JumbotronContainer from "../containers/jumbotron";
import FooterContainer from "../containers/footer";
import FaqsContainer from "../containers/faqs";
import HeaderContainer from "../containers/header";
import { Feature, OptForm } from "../components";
import * as ROUTES from '../constants/routes'

const Home = () => {
  return (
    <Fragment>
      <HeaderContainer signCondition="Sign In" path={ROUTES.SIGN_IN}>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </Fragment>
  );
};

export default Home;
