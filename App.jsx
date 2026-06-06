function App() {
  return (
    <div style={{
      padding: "40px",
      fontFamily: "Arial",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh"
    }}>

      <h1>Sushma Portfolio</h1>

      <h2>About Me</h2>
      <p>
        I am learning Full Stack Development and building modern websites.
      </p>

      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
      </ul>

      <h2>Projects</h2>

      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px"
      }}>
        <h3>AI Social Media Calendar</h3>
        <p>
          AI-powered content calendar generator project.
        </p>
      </div>

      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px"
      }}>
        <h3>Portfolio Website</h3>
        <p>
          Personal portfolio built using React.
        </p>
      </div>

      <h2>Contact</h2>
      <p>Email: sushmatulimilli@gmail.com</p>

    </div>
  );
}

export default App;