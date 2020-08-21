import React from 'react';
import { Menu, Container, Button, Icon } from 'semantic-ui-react';
const NavBar = () => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item>
          <Icon name="gitter" size="large" />
          Still-Events
        </Menu.Item>
        <Menu.Item name="Events" />
        <Menu.Item>
          <Button positive inverted content="Create event" />
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic inverted content="Login" />
          <Button
            basic
            inverted
            content="Register"
            style={{ marginLeft: '0.5em' }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
