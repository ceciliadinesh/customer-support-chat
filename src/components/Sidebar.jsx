const conversations = [
    {
      icon: 'https://img.icons8.com/ios/50/7650D8/chat.png',
      label: 'All conversations',
      count: '12',
    },
    {
      icon: 'https://img.icons8.com/ios/50/7650D8/star.png',
      label: 'Starred',
      count: '',
    },
    {
      icon: 'https://img.icons8.com/ios/50/7650D8/archive.png',
      label: 'Archived',
      count: '',
    },
  ]
  
  function Sidebar({ activeTab, onTabChange }) {
    return (
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/chat.png"
              alt="ConvoCare logo"
            />
          </div>
          <span>convo<span className="brand-light">care</span></span>
        </div>
  
        <div className="workspace-label">WORKSPACE</div>
  
        <div className="workspace-card">
          <div className="workspace-avatar">
            <img
              src="https://img.icons8.com/ios/50/7650D8/conference-call.png"
              alt="Workspace"
            />
          </div>
          <div className="workspace-info">
            <strong>Customer Care</strong>
            <span>Free workspace</span>
          </div>
          <span className="workspace-arrow">⌄</span>
        </div>
  
        <div className="sidebar-section-label">INBOX</div>
  
        <nav className="sidebar-nav">
          {conversations.map((item) => (
            <button
              key={item.label}
              className={`nav-item ${activeTab === item.label ? 'active' : ''}`}
              onClick={() => onTabChange(item.label)}
            >
              <span className="nav-icon">
                <img src={item.icon} alt="" />
              </span>
              <span>{item.label}</span>
              {item.count && <span className="nav-count">{item.count}</span>}
            </button>
          ))}
        </nav>
  
        <div className="sidebar-section-label team-label">TEAM</div>
  
        <div className="team-member">
          <img
            className="team-avatar"
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop&crop=faces"
            alt="Sophia Williams"
          />
          <div className="team-member-info">
            <strong>Sophia Williams</strong>
            <span><i className="status-dot" /> Online</span>
          </div>
          <button className="member-menu" aria-label="Team options">···</button>
        </div>
  
        <div className="sidebar-bottom">
          <div className="help-card">
            <div className="help-icon">
              <img
                src="https://img.icons8.com/ios/50/7650D8/headset.png"
                alt=""
              />
            </div>
            <strong>Need a hand?</strong>
            <p>Our team is always here to help you.</p>
            <button onClick={() => window.open('mailto:support@example.com')}>
              Contact support
              <img
                src="https://img.icons8.com/ios/50/7650D8/external-link.png"
                alt=""
              />
            </button>
          </div>
  
          <button className="profile-button">
            <img
              className="profile-avatar"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
              alt="Customer profile"
            />
            <div className="profile-info">
              <strong>Customer Demo</strong>
              <span>customer@example.com</span>
            </div>
            <span className="profile-menu">⌄</span>
          </button>
        </div>
      </aside>
    )
  }
  
  export default Sidebar