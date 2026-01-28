import './App.css';
import User from './User.jsx';
function App() {
  let user = {
    firstName: "Alain",
    lastName: "Terieur",
    email: "alain.terieur@inlook.com"
  };
  return (

    <User identity = {user}/>
  );
}

export default App;
