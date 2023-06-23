import { Button } from "./button"
import { Display } from "./display"
import { isOperator, endsWithOp } from "../logic/calculator-base"
import * as math from "mathjs"
import "./styles/calc.css";

export const Calculator = (props) => {
    const numberButtons = ["%", "C", "CE", "/", "1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "+/-", "0", ".", "="]

    const calculate = (type, val) => {
        if (type === "clr") {
            props.setResult("0")
        } else if (type === "eqls") {
            props.setResult(math.evaluate(props.result).toString())
        } else if (type === "num") {
            if (props.result === "0") {props.setResult(val)} else
            { props.setResult(props.result.toString() + val) }
        } else if (type === "op") {
            if (!endsWithOp(props.result)) {
                props.setResult(props.result.toString() + val)
            }
        } else if (type === "neg") {
            props.setResult(Math.abs(props.result) * -1)
        } else if (type === "dec") {
            props.setResult(props.result.toString() + ".")
        }
    }
    
    const handleEvent = (e) => {
        const key = e.key

        if (key === "Enter") {calculate(isOperator(key), key)}
        else if (key === "Backspace") {calculate(isOperator(key), key)}

        for (var i=0; i < numberButtons.length; i++) {
          if (key === numberButtons[i]) {
            calculate(isOperator(key), key)
          }
        }
    }
    
    return (
        <div className="calc-holder" onKeyDown={handleEvent} tabIndex="0">
            <div className="calculator">
                <Display toDisplay={props.result} />
                <div className="buttons">
                    {numberButtons.map((symbol, i) => {
                        if (i % 4 === 0) {return <><br /><Button key={symbol} Symbol={symbol} newResult={calculate} style={isOperator(symbol)} /></>}
                        return <Button key={symbol} Symbol={symbol} newResult={calculate} style={isOperator(symbol)}></Button>
                    })}
                </div>
            </div>
        </div>
    )
}