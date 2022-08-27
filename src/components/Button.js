import "./Button.scss";

const Button = (props) => {
    return <a href={props.link} className="btn btn-gb">{props.children}</a>
}

export default Button