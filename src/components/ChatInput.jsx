import { useState } from 'react'

function ChatInput({ onSend, disabled }) {
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const message = text.trim()

    if (!message || disabled) return

    onSend(message)
    setText('')
  }

  return (
    <form className="chat-input-form" onSubmit={handleSubmit}>
      <div className="input-tools">
        <button
          type="button"
          className="tool-button"
          aria-label="Add attachment"
          title="Attachments"
        >
          <img
            src="https://img.icons8.com/ios/50/928AA4/attach.png"
            alt=""
          />
        </button>

        <button
          type="button"
          className="tool-button"
          aria-label="Insert smiley"
          title="Insert smiley"
          onClick={() => setText((current) => `${current} `)}
        >
          <img
            src="https://img.icons8.com/ios/50/928AA4/happy--v1.png"
            alt=""
          />
        </button>
      </div>

      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault()
            handleSubmit(event)
          }
        }}
        placeholder="Write your message..."
        aria-label="Write your message"
        disabled={disabled}
      />

      <div className="input-right">
        <span className="enter-hint">Enter to send</span>

        <button
          type="submit"
          className="send-button"
          disabled={!text.trim() || disabled}
          aria-label="Send message"
        >
          <span>Send</span>
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/filled-sent.png"
            alt=""
          />
        </button>
      </div>
    </form>
  )
}

export default ChatInput