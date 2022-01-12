import { Fragment } from "react";
import { Header, Profiles } from "../components";
import * as ROUTES from "../constants/routes";

const SelectProfileContainer = ({ user, setProfile }) => {
  return (
    <Fragment>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo
            to={ROUTES.HOME}
            src={require("../assets/images/misc/logo.svg").default}
            alt="Netflix"
          />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who is watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
          <Profiles.Picture src={user.photoURL} />
          <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </Fragment>
  );
};

export default SelectProfileContainer;
