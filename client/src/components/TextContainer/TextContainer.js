import React from "react";
import { green, red } from "@material-ui/core/colors";
import {
  Person,
  KeyboardBackspace,
  QuestionAnswer,
  Favorite,
} from "@material-ui/icons/";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>
        Instant Chat
        <span role="img" aria-label="emoji">
          <QuestionAnswer style={{ fontSize: 100 }} />
        </span>
      </h1>
      <h2>
        build with React, Express, Node and Socket.IO{" "}
        <span role="img" aria-label="emoji">
          <Favorite style={{ color: red[500], fontSize: 40 }} />
        </span>
      </h2>
      <h2>
        <span role="img" aria-label="emoji">
          <KeyboardBackspace style={{ fontSize: 40, marginRight: 10 }} />
        </span>
        Try it out right now!{" "}
      </h2>
    </div>
    {users ? (
      <div>
        <h1>People currently chatting:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <Person
                  style={{ color: green[500], marginLeft: 10, fontSize: 30 }}
                />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
