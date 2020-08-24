import React from "react";
import { Menu, Container, Button, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";
import { useSelector } from "react-redux";
const NavBar = () => {
  const { auth } = useSelector((state) => state.auth);

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
        {auth ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  );
};

export default NavBar;
