import React, { Component } from 'react';
// eslint-disable-next-line import/no-unresolved
import Message from '../components/message';


// eslint-disable-next-line padded-blocks, react/prefer-stateless-function
class MessageList extends Component {

  componentWillMount () => {

  }

  render() {
    return (
      <div className="channel-container">
        <div className="channel-title">
          <span>Channel #{this.props.selectedChannel}</span>
        </div>
        <div className="channel-content">
          {
            this.props.messages.map((message) => {
              return <Message key={message.id} message={message} />;
            })
          }
        </div>
      </div>
    );
  }
}

export default MessageList;
