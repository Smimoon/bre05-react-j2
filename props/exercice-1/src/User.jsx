const User = (props) => {
    return (
        <article>
            <h2>Email de l'utilisateur</h2>
            <p>{props.email}</p>
        </article>
    );
};

export default User;
