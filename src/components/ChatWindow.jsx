import { useEffect, useRef, useState } from 'react'
import Message from './Message'
import ChatInput from './ChatInput'

const initialMessages = [
  {
    id: 1,
    sender: 'agent',
    text: "Hello! Welcome to ConvoCare. I'm Sophia, and I'm here to help you today.",
    time: '10:41 AM',
  },
  {
    id: 2,
    sender: 'agent',
    text: 'What can I help you with?',
    time: '10:41 AM',
  },
]

const quickReplies = [
  {
    label: 'I need help with my order',
    icon: 'https://img.icons8.com/ios/50/7650D8/package.png',
  },
  {
    label: 'How do I reset my password?',
    icon: 'https://img.icons8.com/ios/50/7650D8/lock--v1.png',
  },
  {
    label: 'Talk to a human',
    icon: 'https://img.icons8.com/ios/50/7650D8/headset.png',
  },
]

function ChatWindow() {
  const [messages, setMessages] = useState(initialMessages)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const replyTimerRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => {
    return () => {
      if (replyTimerRef.current) {
        clearTimeout(replyTimerRef.current)
      }
    }
  }, [])

  function getCurrentTime() {
    return new Date().toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
    })
  }

  function getReply(text) {
    const normalized = text.toLowerCase()

    if (normalized.includes('order')) {
      return "I'd be happy to help with your order. Could you share your order number so I can help you check its status?"
    }

    if (normalized.includes('password') || normalized.includes('reset')) {
      return 'You can reset your password by selecting Forgot Password on the sign-in page. You will receive a reset link in your email. Would you like help with anything else?'
    }

    if (normalized.includes('human') || normalized.includes('agent')) {
      return "You're chatting with Sophia from our support team. Please tell me what you need help with, and I'll do my best to assist."
    }

    if (normalized.includes('refund') || normalized.includes('return')) {
      return 'I can help you with returns and refunds. Please share a few details about your purchase, and we can explore the next steps together.'
    }

    if (normalized.includes('hello') || normalized.includes('hi')) {
      return 'Hello! What can I help you with today?'
    }

    if (normalized.includes('thank')) {
      return "You're very welcome. I'm happy to help. Is there anything else you'd like to know?"
    }

    return "Thanks for reaching out. I'd be happy to help you with that. Could you share a little more detail so I can point you in the right direction?"
  }

  function sendMessage(text) {
    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text,
      time: getCurrentTime(),
    }

    setMessages((current) => [...current, userMessage])
    setIsTyping(true)

    if (replyTimerRef.current) {
      clearTimeout(replyTimerRef.current)
    }

    replyTimerRef.current = setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        sender: 'agent',
        text: getReply(text),
        time: getCurrentTime(),
      }

      setMessages((current) => [...current, reply])
      setIsTyping(false)
      replyTimerRef.current = null
    }, 1200)
  }

  return (
    <section className="conversation-panel">
      <div className="conversation-toolbar">
        <div>
          <span className="toolbar-label">CONVERSATION</span>
          <div className="conversation-title">
            <h1>Customer Support</h1>
            <span className="conversation-status">Open</span>
          </div>
        </div>

        <div className="toolbar-details">
          <span className="ticket-id">#CC-2048</span>
          <span className="priority-badge">
            <span className="priority-dot" />
            Normal priority
          </span>
        </div>
      </div>

      <div className="conversation-body">
        <div className="date-divider">
          <span />
          <p>
            Today,{' '}
            {new Date().toLocaleDateString([], {
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <span />
        </div>

        <div className="messages-list" aria-live="polite">
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}

          {isTyping && (
            <div className="typing-row">
              <div className="message-avatar">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop&crop=faces"
                  alt="Sophia Williams"
                />
              </div>

              <div className="typing-bubble">
                <span />
                <span />
                <span />
              </div>

              <span className="typing-label">Sophia is typing...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="conversation-footer">
        {messages.length <= 2 && (
          <div className="quick-replies">
            <span className="quick-replies-label">QUICK REPLIES</span>

            <div className="quick-replies-list">
              {quickReplies.map((reply) => (
                <button
                  key={reply.label}
                  className="quick-reply"
                  onClick={() => sendMessage(reply.label)}
                >
                  <img src={reply.icon} alt="" />
                  <span>{reply.label}</span>
                  <img
                    className="quick-reply-arrow"
                    src="https://img.icons8.com/ios/50/7650D8/external-link.png"
                    alt=""
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        <ChatInput onSend={sendMessage} disabled={isTyping} />

        <div className="privacy-note">
          <img
            src="https://img.icons8.com/ios/50/aaa5b5/lock--v1.png"
            alt=""
          />
          <span>Your conversation is private and secure.</span>
          <span className="powered-note">
            Powered by <strong>ConvoCare</strong>
          </span>
        </div>
      </div>
    </section>
  )
}

export default ChatWindow