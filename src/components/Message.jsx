function Message({ message }) {
    const isUser = message.sender === 'user'
  
    return (
      <div className={`message-row ${isUser ? 'user-row' : 'agent-row'}`}>
        {!isUser && (
          <div className="message-avatar">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop&crop=faces"
              alt="Sophia Williams"
            />
          </div>
        )}
  
        <div className="message-content">
          {!isUser && <span className="message-sender">Sophia Williams</span>}
  
          <div className={`message-bubble ${isUser ? 'user-bubble' : 'agent-bubble'}`}>
            {message.text}
          </div>
  
          <div className={`message-meta ${isUser ? 'user-meta' : ''}`}>
            <span>{message.time}</span>
            {isUser && (
              <img
                className="message-check-icon"
                src="https://img.icons8.com/ios/50/7650D8/double-tick.png"
                alt="Sent"
              />
            )}
          </div>
        </div>
  
        {isUser && (
          <div className="user-message-avatar">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
              alt="Customer"
            />
          </div>
        )}
      </div>
    )
  }
  
  export default Message