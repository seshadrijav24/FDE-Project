import { useState } from 'react'
import './StateEx.css'

const StateEx = () => {
  const [text, setText] = useState('Hello, React!')
  const [count, setCount] = useState(0)
  const [isEnabled, setIsEnabled] = useState(true)
  const [items, setItems] = useState(['Learn JSX', 'Practice state'])
  const [profile, setProfile] = useState({ name: 'Alex', role: 'React learner' })
  const [emptyValue, setEmptyValue] = useState(null)
  const [optionalValue, setOptionalValue] = useState('I have a value')
  const [bigNumber, setBigNumber] = useState(9007199254740993n)
  const [symbolValue, setSymbolValue] = useState(() => Symbol('vibe'))

  const addItem = () => {
    setItems((currentItems) => [...currentItems, `New task ${currentItems.length + 1}`])
  }

  const updateName = (name) => {
    setProfile((currentProfile) => ({ ...currentProfile, name }))
  }

  return (
    <main className="state-ex">
      <header className="state-header">
        <a className="state-brand" href="#state-demo">
          <span className="state-brand-mark">v</span>
          vibe-coding
        </a>
        <span className="state-badge">REACT BASICS</span>
      </header>

      <section className="state-intro" id="state-demo">
        <p className="state-eyebrow">INTERACTIVE EXAMPLE</p>
        <h1>React state, <span>in every shape.</span></h1>
        <p>
          State can hold JavaScript values. Try the controls to see each value
          update and trigger a re-render.
        </p>
      </section>

      <section className="state-grid" aria-label="React state data type examples">
        <article className="state-card">
          <div className="state-card-heading">
            <span className="state-type-icon purple">Aa</span>
            <div><h2>String</h2><code>typeof: string</code></div>
          </div>
          <p className="state-value string-value">{text || 'Your text will appear here'}</p>
          <label className="state-label" htmlFor="text-state">Change the text</label>
          <input
            id="text-state"
            className="state-input"
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </article>

        <article className="state-card">
          <div className="state-card-heading">
            <span className="state-type-icon orange">#</span>
            <div><h2>Number</h2><code>typeof: number</code></div>
          </div>
          <p className="state-value number-value">{count}</p>
          <div className="state-actions">
            <button className="state-button secondary" type="button" onClick={() => setCount((value) => value - 1)}>− Decrease</button>
            <button className="state-button primary" type="button" onClick={() => setCount((value) => value + 1)}>+ Increase</button>
          </div>
        </article>

        <article className="state-card">
          <div className="state-card-heading">
            <span className="state-type-icon green">✓</span>
            <div><h2>Boolean</h2><code>typeof: boolean</code></div>
          </div>
          <p className="state-value boolean-value">{String(isEnabled)}</p>
          <button
            className={`state-toggle ${isEnabled ? 'is-on' : ''}`}
            type="button"
            role="switch"
            aria-checked={isEnabled}
            onClick={() => setIsEnabled((enabled) => !enabled)}
          >
            <span />
            {isEnabled ? 'Enabled' : 'Disabled'} — click to toggle
          </button>
        </article>

        <article className="state-card">
          <div className="state-card-heading">
            <span className="state-type-icon blue">[ ]</span>
            <div><h2>Array</h2><code>typeof: object · Array</code></div>
          </div>
          <ul className="state-list">
            {items.map((item, index) => (
              <li key={`${item}-${index}`}>
                <span className="list-check">✓</span>{item}
                <button
                  className="remove-item"
                  type="button"
                  aria-label={`Remove ${item}`}
                  onClick={() => setItems((currentItems) => currentItems.filter((_, itemIndex) => itemIndex !== index))}
                >
                  ×
                </button>
              </li>
            ))}
            {items.length === 0 && <li className="empty-list">No items yet. Add one below.</li>}
          </ul>
          <button className="text-button" type="button" onClick={addItem}>+ Add an item</button>
        </article>

        <article className="state-card">
          <div className="state-card-heading">
            <span className="state-type-icon pink">{'{}'}</span>
            <div><h2>Object</h2><code>typeof: object</code></div>
          </div>
          <div className="profile-preview">
            <span className="profile-initials">{profile.name.slice(0, 1).toUpperCase()}</span>
            <span><strong>{profile.name}</strong><small>{profile.role}</small></span>
          </div>
          <label className="state-label" htmlFor="name-state">Update a property</label>
          <input
            id="name-state"
            className="state-input"
            type="text"
            value={profile.name}
            onChange={(event) => updateName(event.target.value)}
          />
        </article>

        <article className="state-card">
          <div className="state-card-heading">
            <span className="state-type-icon gray">∅</span>
            <div><h2>Null</h2><code>typeof: object (JavaScript quirk)</code></div>
          </div>
          <p className="state-value compact-value">{emptyValue === null ? 'null' : JSON.stringify(emptyValue)}</p>
          <p className="state-hint">Null represents an intentional empty value.</p>
          <button
            className="state-button secondary"
            type="button"
            onClick={() => setEmptyValue((value) => value === null ? { message: 'Now an object' } : null)}
          >
            Toggle null / object
          </button>
        </article>

        <article className="state-card">
          <div className="state-card-heading">
            <span className="state-type-icon yellow">?</span>
            <div><h2>Undefined</h2><code>typeof: undefined</code></div>
          </div>
          <p className="state-value compact-value">{String(optionalValue)}</p>
          <p className="state-hint">Undefined means no value has been assigned.</p>
          <div className="state-actions">
            <button className="state-button secondary" type="button" onClick={() => setOptionalValue(undefined)}>Set undefined</button>
            <button className="state-button secondary" type="button" onClick={() => setOptionalValue('I have a value')}>Restore value</button>
          </div>
        </article>

        <article className="state-card">
          <div className="state-card-heading">
            <span className="state-type-icon teal">n</span>
            <div><h2>BigInt</h2><code>typeof: bigint</code></div>
          </div>
          <p className="state-value compact-value">{bigNumber.toString()}n</p>
          <p className="state-hint">BigInt can represent integers beyond Number limits.</p>
          <button className="state-button secondary" type="button" onClick={() => setBigNumber((value) => value + 1n)}>
            Add one
          </button>
        </article>

        <article className="state-card">
          <div className="state-card-heading">
            <span className="state-type-icon lavender">◇</span>
            <div><h2>Symbol</h2><code>typeof: symbol</code></div>
          </div>
          <p className="state-value compact-value">Symbol({symbolValue.description})</p>
          <p className="state-hint">Each Symbol is unique, even with the same description.</p>
          <button className="state-button secondary" type="button" onClick={() => setSymbolValue(Symbol('vibe'))}>
            Create a new Symbol
          </button>
        </article>
      </section>

      <footer className="state-footer">
        <span>✦</span> The setter updates state; React renders the new value.
      </footer>
    </main>
  )
}

export default StateEx
