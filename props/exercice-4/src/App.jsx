import './App.css'
import User from './User.jsx'
function App() {
  let user = [{
      firstName: "Alain",
      lastName: "Terieur",
      email: "alain.terieur@inlook.com"
    },
    {
      firstName: "Alex",
      lastName: "Terieur",
      email: "alex.terieur@outlook.com"
    },
  ];
  return (
    <ul>
      {user.map((item, i) => <li key={i}><User identity = {item}/></li>)}
    </ul>
  );
}

export default App;
