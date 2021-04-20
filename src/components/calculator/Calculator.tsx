import React, { useEffect, useState } from "react";
import {
  CalcResult,
  Header,
  Key,
  KeysContainer,
  OuterContainer,
} from "./CalculatorElements";

interface Props {}

interface IKey {
  value: number | string;
  id: string;
  style?: any;
}

const keys: IKey[] = [
  { value: 7, id: "seven" },
  { value: 8, id: "eight" },
  { value: 9, id: "nine" },
  { value: "del", id: "delete" },
  { value: 4, id: "four" },
  { value: 5, id: "five" },
  { value: 6, id: "six" },
  { value: "+", id: "add" },
  { value: 1, id: "one" },
  { value: 2, id: "two" },
  { value: 3, id: "three" },
  { value: "-", id: "subtract" },
  { value: ".", id: "decimal" },
  { value: 0, id: "zero" },
  { value: "/", id: "divide" },
  { value: "x", id: "multiply" },
  { value: "clear", id: "clear" },
  { value: "=", id: "equals" },
];

const Calculator = (props: Props) => {
  const [display, setDisplay] = useState<string>("0");

  useEffect(() => {
    const listener = (event: any) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
        // callMyFunction();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  const handleInput = (e: any, code: any) => {
    e.preventDefault();
    let result: any = "0";
    
    const isLastInputOperator =
      display[display.length - 1] === "+" ||
      display[display.length - 1] === "*" ||
      display[display.length - 1] === "/" ||
      display[display.length - 1] === "-";

    const isSecondLastInputOperator =
      display[display.length - 2] === "+" ||
      display[display.length - 2] === "*" ||
      display[display.length - 2] === "/" ||
      display[display.length - 2] === "-";

    const isLastInputOperatorExceptMinus =
      display[display.length - 1] !== "+" &&
      display[display.length - 1] !== "*" &&
      display[display.length - 1] !== "/";
      
    switch (code) {
      case "clear":
        setDisplay("0");
        break;
      case "-":
        if (
          (isLastInputOperator && !isSecondLastInputOperator) ||
          !isLastInputOperator
        ) {
          appendToDisplay(code);
        }
        break;
      case "+":
      case "/":
      case "*":
        if (isLastInputOperatorExceptMinus) {
          appendToDisplay(code);
        }
        break;
      case ".":
        let appendDecimal = true;
        for (let i = display.length - 1; i--; i >= 0) {
          if (["+", "-", "/", "*"].includes(display[i])) {
            appendDecimal = !display.substr(i).includes(".");
            break;
          }
        }
        if (
          !(
            display.includes("+") ||
            display.includes("-") ||
            display.includes("/") ||
            display.includes("*")
          )
        ) {
          appendDecimal = !display.includes(".");
        }
        appendDecimal && setDisplay(display + code);
        break;
      case "=":
        // eslint-disable-next-line no-eval
        result = eval(display);
        setDisplay(result + "");
        break;
      case "del":
        result = display.slice(0, -1);
        setDisplay(result);
        break;

      default:
        appendToDisplay(code);
        break;
    }
  };

  const appendToDisplay = (code: string) => {
    if (display === "0") {
      setDisplay("" + code);
    } else {
      setDisplay(display + code);
    }
  };

  return (
    <OuterContainer>
      <Header>calc</Header>
      <CalcResult id="display" disabled value={display} />
      <KeysContainer>
        {keys.map((key, index: number) => (
          <Key
            key={index}
            id={key.id}
            onClick={(e) => {
              if (key?.value === "x") handleInput(e, "*");
              else handleInput(e, key?.value);
            }}
          >
            {key.value}
          </Key>
        ))}
      </KeysContainer>
    </OuterContainer>
  );
};

export default Calculator;
