import {useState} from 'react';
const User = (props) => {
    const[isActive, setIsActive] = useState(true);
    const[role,setRole] = useState("Admin");
    
    if(isActive === true) {
        return(
            <article>
                <h2>Mari Doucet</h2>
                <h3>{role}</h3>
                <p>En ligne</p>
            </article>
        );
    }
    else {
        return(
            <article>
                <h2>Mari Doucet</h2>
                <h3>{role}</h3>
                <p>Hors-ligne</p>
            </article>
        );
    }
};

export default User;