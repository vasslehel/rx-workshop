import React, { Component } from 'react';

import { messageService } from '../services';

class HomePage extends Component {
  sendMessage() {
    messageService.sendMessage('Hello from Home Component');
  }

  clearMessages() {
    messageService.clearMessages();
  }

  render() {
    return (
      <div>
        <h1>Home Component</h1>
        <button onClick={this.sendMessage}>Send Message</button>
        <button onClick={this.clearMessages}>Clear Messages</button>
      </div>
    );
  }
}

export { HomePage };
