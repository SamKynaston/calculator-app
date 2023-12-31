export const isOperator = (symbol) => {
    if (symbol === "CE") {return "clr"} 
    else if (symbol === "Backspace" || symbol === "C") {return "rml"}
    else if (symbol === "=" || symbol === "Enter") {return "eqls"}
    else if (symbol === ".") {return "dec"}
    else if (symbol === "+/-") {return "neg"}

    const ops = ["+", "*", "-", "/", "%"]
    for (var i = 0; i < ops.length; i++) {
        if (symbol === ops[i]) { return "op" }
    }

    return "num"
}

export const endsWithOp = (res) => {
    res = res.toString()
    const ops = ["+", "*", "-", "+"]
    for (var i = 0; i < ops.length; i++) {
        if (res.endsWith(ops[i])) { return true }
    }

    return false
}