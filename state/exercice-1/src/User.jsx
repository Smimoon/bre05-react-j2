import {useState} from 'react';
const User = (props) => {

    const [isActive, setIsActive] = useState(false);
    if (isActive === true) {
        return (
            <article>
            <h2>Mari Doucet</h2>
            <p>Statut de l'utilisateur : en ligne</p>
        </article>
        );
    }
    else {
        return (
        <article>
            <h2>Mari Doucet</h2>
            <p>Statut de l'utilisateur : hors-ligne</p>
        </article>
        );
    }
};

export default User;