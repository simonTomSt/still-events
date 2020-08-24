import React, { useState } from "react";
import { Menu, Container, Button, Icon } from "semantic-ui-react";
import { NavLink, useHistory } from "react-router-dom";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";
const NavBar = () => {
  const history = useHistory();
  const [auth, setAuth] = useState(false);

  const handleSignOut = () => {
    setAuth(false);
    history.push("/");
  };

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <Icon name="gitter" size="large" />
          Still-Events
        </Menu.Item>
        <Menu.Item as={NavLink} to="/events" name="Events" />
        {auth && (
          <Menu.Item>
            <Button
              as={NavLink}
              to="/create-event"
              positive
              inverted
              content="Create event"
            />
          </Menu.Item>
        )}
        {auth ? (
          <SignedInMenu signOut={handleSignOut} />
        ) : (
          <SignedOutMenu setAuth={setAuth} />
        )}
      </Container>
    </Menu>
  );
};

export default NavBar;
