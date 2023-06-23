import "./styles/button.css";

export const Button = (props) => {
    return (
        <button className={`calc-btn-${props.style}`} onClick={() => props.newResult(props.style,props.Symbol)}>{props.Symbol}</button>
    )
}