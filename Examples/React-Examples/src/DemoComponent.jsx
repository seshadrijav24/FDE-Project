import './DemoComponent.css'

const projects = [
  {
    name: 'Portfolio refresh',
    description: 'A fresh home for your work and ideas.',
    category: 'Design',
    progress: 72,
    color: 'purple',
    initials: ['AJ', 'MK'],
  },
  {
    name: 'Habit tracker',
    description: 'Small steps, celebrated every day.',
    category: 'Development',
    progress: 45,
    color: 'mint',
    initials: ['AJ', 'SL', 'MK'],
  },
  {
    name: 'Weekend journal',
    description: 'Collect the moments worth remembering.',
    category: 'Personal',
    progress: 88,
    color: 'peach',
    initials: ['AJ'],
  },
]

const stats = [
  { label: 'Active projects', value: '08', icon: '✳' },
  { label: 'Tasks completed', value: '24', icon: '✓' },
  { label: 'Focus time', value: '12.5h', icon: '◷' },
]

function DemoComponent() {
  return (
    <div className="demo-app">
      <aside className="sidebar">
        <a className="brand" href="#home" aria-label="vibe-coding home">
          <span className="brand-mark">v</span>
          <span>vibe-coding</span>
        </a>

        <p className="nav-label">WORKSPACE</p>
        <nav className="navigation" aria-label="Main navigation">
          <a className="nav-link active" href="#overview">
            <span aria-hidden="true">⌂</span> Overview
          </a>
          <a className="nav-link" href="#projects">
            <span aria-hidden="true">▦</span> My projects
          </a>
          <a className="nav-link" href="#tasks">
            <span aria-hidden="true">☷</span> Tasks
          </a>
          <a className="nav-link" href="#inspiration">
            <span aria-hidden="true">✧</span> Inspiration
          </a>
        </nav>

        <div className="sidebar-note">
          <span className="note-sparkle" aria-hidden="true">✦</span>
          <p className="note-title">Make room for ideas</p>
          <p className="note-copy">Your next great thing starts with one small step.</p>
          <a href="#projects">Explore projects <span aria-hidden="true">→</span></a>
        </div>

        <button className="profile-button" type="button">
          <span className="profile-avatar">AJ</span>
          <span className="profile-details">
            <strong>Alex Johnson</strong>
            <span>Free plan</span>
          </span>
          <span className="profile-menu" aria-hidden="true">···</span>
        </button>
      </aside>

      <main className="main-content" id="overview">
        <header className="topbar">
          <p>Thursday, October 22</p>
          <button className="notification-button" type="button" aria-label="Notifications">
            ♧ <span className="notification-dot" />
          </button>
        </header>

        <section className="welcome-section">
          <div>
            <p className="eyebrow">YOUR CREATIVE SPACE</p>
            <h1>Good morning, Alex <span aria-hidden="true">✳</span></h1>
            <p className="welcome-copy">A little progress today goes a long way. Here’s your day at a glance.</p>
          </div>
          <button className="create-button" type="button">
            <span aria-hidden="true">+</span> New project
          </button>
        </section>

        <section className="stats-grid" aria-label="Your activity">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <div className="stat-topline">
                <span>{stat.label}</span>
                <span className="stat-icon" aria-hidden="true">{stat.icon}</span>
              </div>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-caption">Looking good this week <span aria-hidden="true">↗</span></p>
            </article>
          ))}
        </section>

        <section className="projects-section" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">IN THE MAKING</p>
              <h2>Your projects</h2>
            </div>
            <a className="view-all" href="#projects">View all <span aria-hidden="true">→</span></a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className={`project-art ${project.color}`} aria-hidden="true">
                  <span className="art-shape art-shape-one" />
                  <span className="art-shape art-shape-two" />
                  <span className="art-label">{project.category}</span>
                </div>
                <div className="project-info">
                  <div className="project-title-row">
                    <h3>{project.name}</h3>
                    <button className="more-button" type="button" aria-label={`More options for ${project.name}`}>···</button>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="progress-label">
                    <span>Progress</span>
                    <strong>{project.progress}%</strong>
                  </div>
                  <div
                    className="progress-track"
                    role="progressbar"
                    aria-label={`${project.name} progress`}
                    aria-valuenow={project.progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span style={{ width: `${project.progress}%` }} />
                  </div>
                  <div className="project-footer">
                    <div className="avatar-stack" aria-label={`${project.initials.length} collaborators`}>
                      {project.initials.map((initials, index) => (
                        <span className={`collaborator collaborator-${index + 1}`} key={initials}>{initials}</span>
                      ))}
                    </div>
                    <span className="updated-label">Updated today</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="footer-note">
          <span aria-hidden="true">✦</span> Made for the ideas you can’t wait to bring to life.
        </footer>
      </main>
    </div>
  )
}

export default DemoComponent
