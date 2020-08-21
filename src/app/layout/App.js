import React from 'react';

import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDasboard/EventDashboard';
function App() {
  return (
    <>
      <NavBar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </>
  );
}

export default App;
