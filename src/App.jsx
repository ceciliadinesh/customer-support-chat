import { useState } from 'react'
import Sidebar from './components/Sidebar'
import ChatHeader from './components/ChatHeader'
import ChatWindow from './components/ChatWindow'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('All conversations')
  const [chatKey, setChatKey] = useState(0)

  function handleNewChat() {
    setChatKey((current) => current + 1)
    setActiveTab('All conversations')
  }

  return (
    <main className="app-shell">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <section className="main-area">
        <ChatHeader onClear={handleNewChat} />

        <div className="content-area">
          {activeTab === 'All conversations' ? (
            <ChatWindow key={chatKey} />
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">
                {activeTab === 'Starred' ? '☆' : '▣'}
              </div>
              <h2>{activeTab}</h2>
              <p>
                {activeTab === 'Starred'
                  ? 'Your starred conversations will appear here.'
                  : 'Your archived conversations will appear here.'}
              </p>
              <button onClick={() => setActiveTab('All conversations')}>
                Return to inbox
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default App