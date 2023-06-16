import React from 'react';
import './main.css';
import {MessageHistory} from "./components/MessageHistory.component";
import {messages} from "./props/messages.props";

function App() {
  return (
      <div className="clearfix container">
          <div className="chat">
              <MessageHistory list={messages} />
          </div>
      </div>
  );
}

export default App;
