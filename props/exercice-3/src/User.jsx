const User = (props) => {
    return(
        <article>
            <h2>{props.identity.firstName} {props.identity.lastName}</h2>
            <a href="#">{props.identity.email}</a>
        </article>
    
    );
    
};
export default User;