import React from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
const EventListItem = ({ event, selectEvent, deleteEvent }) => {
  const { hostPhotoURL, title, hostedBy, date, venue, description } = event;
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
        <Icon name="clock" /> {date}
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
          onClick={() => deleteEvent(event.id)}
        />

        <Button
          color="teal"
          floated="right"
          content="View"
          onClick={() => selectEvent(event)}
        />
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;
