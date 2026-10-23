function Child1({
  text,
  count,
  isReady,
  items,
  profile,
  emptyValue,
  missingValue,
  bigNumber,
  uniqueId,
  onAction,
}) {
  const values = [
    { name: 'String', type: typeof text, value: text },
    { name: 'Number', type: typeof count, value: String(count) },
    { name: 'Boolean', type: typeof isReady, value: String(isReady) },
    { name: 'Array', type: `object · ${Array.isArray(items) ? 'Array' : 'not an Array'}`, value: JSON.stringify(items) },
    { name: 'Object', type: typeof profile, value: JSON.stringify(profile) },
    { name: 'Null', type: typeof emptyValue, value: String(emptyValue) },
    { name: 'Undefined', type: typeof missingValue, value: String(missingValue) },
    { name: 'BigInt', type: typeof bigNumber, value: `${bigNumber.toString()}n` },
    { name: 'Symbol', type: typeof uniqueId, value: `Symbol(${uniqueId.description})` },
    { name: 'Function', type: typeof onAction, value: 'Passed as a prop and callable by the child' },
  ]

  return (
    <section className="child-panel" aria-labelledby="child-heading">
      <div className="component-heading">
        <span className="component-icon child-icon">C</span>
        <div>
          <h2 id="child-heading">Child component</h2>
          <p>Receives values through props and renders them</p>
        </div>
      </div>

      <div className="received-grid">
        {values.map(({ name, type, value }) => (
          <article className="received-card" key={name}>
            <div className="received-card-heading">
              <h3>{name}</h3>
              <code>typeof: {type}</code>
            </div>
            <p className="received-value">{value}</p>
            {name === 'Function' && (
              <button className="props-action-button" type="button" onClick={onAction}>
                Call parent function
              </button>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Child1
