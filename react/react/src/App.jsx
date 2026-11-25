import Home from "./home"
import "./App.css"

function Data({ obj }) {
  return(
    <>
      <p className="college-name">College: {obj}</p>
    </>
  )
}

function Team({ players }) {
  return (
    <section className="team-section" aria-labelledby="team-heading">
      <h2 id="team-heading">List of Players</h2>
      <ul className="player-grid">
        {players.map((player) => (
          <li className="player-card" key={player.id}>
            <span className="player-card__label">Player</span>
            <h3>{player.name}</h3>
          </li>
        ))}
      </ul>
    </section>
  )
}

function App() {
  let players_data = [
    {
      id : 100,
      name : "Kohli",
      Team :  "India"
    },
    {
      id : 101,
      name : "Dhoni",
      Team : "India"
    },
    {
      id : 102,
      name : "Sachin",
      Team : "India"
    }
  ]
  return(
    <main className="app">
      <h1>Welcome to App</h1>
      <div className="app-intro">
        <Home/>
        <Data obj="Sece"/>
      </div>
      <Team players={players_data}/>
    </main>
  )
}
export default App