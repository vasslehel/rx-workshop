import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { messageService } from './services';
import { Subscription } from 'rxjs';
import { HomePage } from './HomePage';

class App extends Component<{}, { messages: string[] }> {
  private subscription: Subscription = new Subscription();
  constructor(props: any) {
    super(props);
    this.state = { messages: [] };
  }

  componentDidMount() {
    this.subscription = messageService.getMessage().subscribe(message => {
      if (message) {
        this.setState({ messages: [...this.state.messages, message] });
      } else {
        this.setState({ messages: [] });
      }
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    const { messages } = this.state;
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
