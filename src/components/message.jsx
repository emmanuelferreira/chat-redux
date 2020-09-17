import React from 'react';

const Message = (props) => {
  return (
    <div className="message-container">
      <i className="author">{props.message.author}</i>
      <p>{props.message.content}</p>
    </div>
  );
};

export default Message;
