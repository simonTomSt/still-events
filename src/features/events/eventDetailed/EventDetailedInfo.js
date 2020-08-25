import React, { useState } from "react";
import { Segment, Button, Grid, Icon } from "semantic-ui-react";
import { format } from "date-fns";
import EventDetailedMap from "./EventDetailedMap";

const EventDetailedInfo = ({ event }) => {
  const { description, date, venue } = event;
  const [mapToggle, setMapToggle] = useState(false);
  return (
    <Segment.Group>
      <Segment attached="top">
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="calendar" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{format(date, "MMMM d, yyyy h:mm a")}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="marker" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>{venue.address}</span>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              color="teal"
              size="tiny"
              onClick={() => setMapToggle((prevState) => !prevState)}
              content={mapToggle ? "Hide map" : " Show map"}
            />
          </Grid.Column>
        </Grid>
      </Segment>
      {mapToggle && <EventDetailedMap latLng={venue.latLng} />}
    </Segment.Group>
  );
};

export default EventDetailedInfo;
