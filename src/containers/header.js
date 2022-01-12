import { Header } from "../components";
import * as ROUTES from "../constants/routes";

const HeaderContainer = ({ children, path, signCondition}) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={ROUTES.HOME}
          src={require("../assets/images/misc/logo.svg").default}
          alt="Netflix"
        />
        <Header.ButtonLink to={path}>{signCondition}</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
};

export default HeaderContainer;
