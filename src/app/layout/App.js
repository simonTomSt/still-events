import React from "react";

import NavBar from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDasboard/EventDashboard";
import { Route, useLocation } from "react-router-dom";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import ModalMenager from "../common/modals/ModalManager";
import { ToastContainer } from "react-toastify";

function App() {
  const { key } = useLocation();
  return (
    <>
      <ModalMenager />
      <ToastContainer position="bottom-right" />
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className="main">
              <Route exact path="/events" component={EventDashboard} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route
                path={["/create-event", "/manage/:id"]}
                component={EventForm}
                key={key}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
