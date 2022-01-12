import { Fragment, useState } from "react";
import SelectProfileContainer from "./profiles";
import FooterContainer from "./footer";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import { useAuthContext } from "../hooks/useAuthContext";

const BrowseContainer = () => {
  const [category, setCategory] = useState("series");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const { auth } = useAuthContext();

  const user = {
    displayName: "Karl",
    photoURL: "1",
  };

  return profile.displayName ? (
    <Fragment>
      <Header src="squid-game" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={ROUTES.HOME}
              src="/images/misc/logo.svg"
              alt="Netflix"
            />
            <Header.Link
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.Link>
            <Header.Link
              active={category === "films" ? "true" : "false"}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.Link>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Squid Game Now</Header.FeatureCallOut>
          <Header.Text>
            Hundreds of cash-strapped players accept a strange invitation to
            compete in children's games. Inside, a tempting prize awaits with
            deadly high stakes. A survival game that has a whopping 45.6
            billion-won prize at stake.
          </Header.Text>
        </Header.Feature>
        <Header.PlayButton>Play</Header.PlayButton>
      </Header>
      <FooterContainer />
    </Fragment>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};

export default BrowseContainer;
