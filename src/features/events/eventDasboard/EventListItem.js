import React from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../eventActions";
import { format } from "date-fns";

const EventListItem = ({ event }) => {
  const { hostPhotoURL, title, hostedBy, date, venue, description } = event;
  const dispatch = useDispatch();

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={hostPhotoURL} />
            <Item.Content>
              <Item.Header>{title}</Item.Header>
              <Item.Description>Hosted by {hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <Icon name="clock" /> {format(date, "MMMM d, yyyy h:mm a")}
        <Icon name="marker" /> {venue}
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div> {description}</div>
        <Button
          color="red"
          floated="right"
          content="Delete"
          onClick={() => dispatch(deleteEvent(event.id))}
        />

        <Button
          as={Link}
          to={`/events/${event.id}`}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;
