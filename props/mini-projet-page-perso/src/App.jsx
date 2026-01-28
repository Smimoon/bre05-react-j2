import './App.css'
import {posts, skills} from './data.js';
function App() {
  return (
    <>
      <h1>Joan Doe</h1>
      <section>
        <h2>Compétences</h2>
        <ul>
          {skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </section>
      <section>
        <h2>Publications</h2>
        <ul>
          {posts.map((post, i) => <li key={i}>{post}</li>)}
        </ul>
      </section>
    </>
  )
}

export default App