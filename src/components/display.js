import "./styles/display.css"

export const Display = (props) => {
    return (
        <div className="display">
            <span>{props.toDisplay}</span>
        </div>
    )
}