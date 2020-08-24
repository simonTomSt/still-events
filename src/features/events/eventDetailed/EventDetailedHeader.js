import React from "react";
import { Segment, Item, Button, Header, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const EventDetailedHeader = ({ event }) => {
  const { title, category, date, hostedBy, id } = event;
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={`/assets/categoryImages/${category}.jpg`}
          fluid
          className="detailed-img"
        />

        <Segment basic className="detailed-text">
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={title}
                  style={{ color: "white" }}
                />
                <p>{format(date, "MMMM d, yyyy h:mm a")}</p>
                <p>
                  Hosted by <strong>{hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button>Cancel My Place</Button>
        <Button color="teal">JOIN THIS EVENT</Button>

        <Button as={Link} to={`/manage/${id}`} color="orange" floated="right">
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default EventDetailedHeader;
