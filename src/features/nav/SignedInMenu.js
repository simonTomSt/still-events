import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { signOutUser } from "../auth/authActions";
import { useDispatch, useSelector } from "react-redux";

const SignedInMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currUser } = useSelector((state) => state.auth);

  return (
    <Menu.Item position="right">
      <Image
        avatar
        spaced="right"
        src={currUser.photoURL || "/assets/user.png"}
      />
      <Dropdown pointing="top left" text="Bob" text={currUser.email}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/create-event"
            text="Create event"
            icon="plus"
          />
          <Dropdown.Item text="My profile" icon="user" />
          <Dropdown.Item
            onClick={() => {
              dispatch(signOutUser());
              history.push("/");
            }}
            text="Sign Out"
            icon="power"
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
