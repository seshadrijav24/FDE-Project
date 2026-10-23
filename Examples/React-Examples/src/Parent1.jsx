import { useState } from 'react'
import Child1 from './Child1.jsx'
import './Parent1.css'

function Parent1() {
  const [parentMessage, setParentMessage] = useState('The child called a function from the parent.')

  const handleChildAction = () => {
    setParentMessage('Function prop called! The parent state was updated.')
  }

  return (
    <main className="props-demo">
      <header className="props-header">
        <a className="props-brand" href="#props-demo">
          <span className="props-brand-mark">v</span>
          vibe-coding
        </a>
        <span className="props-badge">PARENT → CHILD</span>
      </header>

      <section className="props-intro" id="props-demo">
        <p className="props-eyebrow">REACT PROPS</p>
        <h1>Sharing data with <span>props.</span></h1>
        <p>
          The parent owns these values and passes them down to the child as
          named props. The child displays each value and its JavaScript type.
        </p>
      </section>

      <section className="parent-panel" aria-labelledby="parent-heading">
        <div className="component-heading">
          <span className="component-icon parent-icon">P</span>
          <div>
            <h2 id="parent-heading">Parent component</h2>
            <p>Creates data and passes it to Child1</p>
          </div>
        </div>
        <pre className="props-code"><code>{`<Child1
  text="Hello from Parent1"
  count={42}
  isReady={true}
  items={['Learn React', 'Use props']}
  profile={{ name: 'Alex', role: 'Developer' }}
  emptyValue={null}
  missingValue={undefined}
  bigNumber={9007199254740993n}
  uniqueId={Symbol('id')}
  onAction={handleChildAction}
/>`}</code></pre>
        <p className="parent-message" aria-live="polite">{parentMessage}</p>
      </section>

      <div className="props-flow" aria-hidden="true">
        <span />
        <p>props flow down</p>
        <span />
        <span className="flow-arrow">↓</span>
      </div>

      <Child1
        text="Hello from Parent1"
        count={42}
        isReady
        items={['Learn React', 'Use props']}
        profile={{ name: 'Alex', role: 'Developer' }}
        emptyValue={null}
        missingValue={undefined}
        bigNumber={9007199254740993n}
        uniqueId={Symbol('id')}
        onAction={handleChildAction}
      />

      <footer className="props-footer">
        <span>✦</span> Props are read-only in the child. The parent owns the data.
      </footer>
    </main>
  )
}

export default Parent1
