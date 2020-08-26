import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

export function LoadingComponent({ inverterd = true, content = "Loading" }) {
  return (
    <Dimmer inverted={inverterd} active={true}>
      <Loader content={content} />
    </Dimmer>
  );
}
