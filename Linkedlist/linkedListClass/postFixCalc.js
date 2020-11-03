import Stack from "./Stack.js";

export default class PostFixCalc {
    stack;

    constructor(value) {
        this.stack = new Stack();
    }

    calculate(tokens)
    {
        tokens.forEach((value) => {
            if(Number.isInteger(value))
            {
                this.stack.push(value);
            }
            else
            {
                let rhs = this.stack.pop();
                let lhs = this.stack.pop();

                switch (value) {
                    case "+":
                        this.stack.push(lhs + rhs);
                        break;
                    case "-":
                        this.stack.push(lhs - rhs);
                        break;
                    case "*":
                        this.stack.push(lhs * rhs);
                        break;
                    case "/":
                        this.stack.push(lhs / rhs);
                        break;
                    case "%":
                        this.stack.push(lhs % rhs);
                        break;
                    default:
                        throw "Unrecognized token " + value;
                }
            }
        });

        console.log("Total is: " + this.stack.pop())
    }

}