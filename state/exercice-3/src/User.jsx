import {useState} from 'react';
const User = (props) => {
    const[profile, setProfile] = useState({status : false, role : props.profile})
    if (profile.status === true) {
        return (
            <article>
                <h2>Mari Doucet</h2>
                <h3>{profile.role}</h3>
                <p>En ligne</p>
            </article>
        );
    }
    else {
        return(
            <article>
                <h2>Mari Doucet</h2>
                <h3>{profile.role}</h3>
                <p>Hors-ligne</p>
            </article>
        );
    }
};
export default User;