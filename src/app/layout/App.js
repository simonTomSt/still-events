import React, { useState } from "react";

import NavBar from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDasboard/EventDashboard";
function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setFormOpen(true);
  };
  const handleCreateFormOpen = (event) => {
    setSelectedEvent(null);
    setFormOpen(true);
  };

  return (
    <>
      <NavBar setformOpen={handleCreateFormOpen} />
      <Container className="main">
        <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectEvent={handleSelectEvent}
          selectedEvent={selectedEvent}
        />
      </Container>
    </>
  );
}

export default App;
