const User = (props) => {
    return (
    <article>
        <h2>Nom d'utilisateur : {props.userName}</h2>
        <a href="#">Email : {props.email}</a>
    </article>
    );
};

export default User;