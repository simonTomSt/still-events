import React, { useState } from "react";
import { Segment, Header, Form, Button } from "semantic-ui-react";
import cuid from "cuid";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";

const EventForm = ({ match, history }) => {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };
  const [values, setValues] = useState(initialValues);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    selectedEvent
      ? dispatch(updateEvent({ selectedEvent, ...values }))
      : dispatch(
          createEvent({
            ...values,
            id: cuid(),
            hostedBy: "Bob",
            attendees: [],
            hostPhotoURL: "/assets/user.png",
          })
        );
    history.push("/events");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Segment clearing>
      <Header content={selectedEvent ? "Edit the event" : "Create new event"} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type="text"
            placeholder="Event title"
            value={values.title}
            name="title"
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Category "
            value={values.category}
            name="category"
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Description"
            value={values.description}
            name="description"
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="City"
            value={values.city}
            name="city"
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Venue"
            value={values.venue}
            name="venue"
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            placeholder="Date"
            value={values.date}
            name="date"
            onChange={handleInputChange}
          />
        </Form.Field>
        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          as={Link}
          to="/events"
          type="submit"
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};

export default EventForm;
