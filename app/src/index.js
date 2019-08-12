import React from "react"
import ReactDOM from "react-dom"
import { Frame, useCycle } from "framer"
import "./styles.css"

// Parameter
function microwave(food) {
  // function body
  // return value
  return "heated " + food
}

// defining a function
function sandwichMaker(meat) {
  let sandwich = "🍞"
  sandwich = sandwich + meat
  sandwich = sandwich + "🍀"
  sandwich = sandwich + "🍅"
  sandwich = sandwich + "🍞"
  return sandwich
}

function App() {
  const [knobX, cycleKnobX] = useCycle(0, 60)
  return (
    <div className="App">
      <div>{sandwichMaker("🥓")}</div>
      <Frame
        width={120}
        height={60}
        borderRadius={30}
        onTap={function handleTap() {
          console.log(knobX)
          cycleKnobX()
        }}
      >
        <Frame size={60} borderRadius={30} x={knobX} />
      </Frame>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
