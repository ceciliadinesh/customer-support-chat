function ChatHeader({ onClear }) {
    return (
      <header className="chat-header">
        <div className="header-person">
          <div className="header-avatar">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=120&h=120&fit=crop&crop=faces"
              alt="Support team"
            />
            <span className="online-indicator" />
          </div>
  
          <div className="header-person-info">
            <div className="header-name-row">
              <h2>Sophia Williams</h2>
              <span className="agent-badge">Support Agent</span>
            </div>
            <p><span className="live-dot" /> Online now · Usually replies instantly</p>
          </div>
        </div>
  
        <div className="header-actions">
          <button className="icon-button" aria-label="Search messages" title="Search messages">
            <img
              src="https://img.icons8.com/ios/50/777087/search--v1.png"
              alt=""
            />
          </button>
  
          <button className="icon-button" aria-label="More options" title="More options">
            <img
              src="https://img.icons8.com/ios/50/777087/more.png"
              alt=""
            />
          </button>
  
          <button className="close-chat-button" onClick={onClear}>
            <img
              src="https://img.icons8.com/ios/50/7650D8/refresh.png"
              alt=""
            />
            <span>New chat</span>
          </button>
        </div>
      </header>
    )
  }
  
  export default ChatHeader