import React from "react"

const ControlButtons = ({
  nodes,
  setSlideNumber,
  slideNumber,
  styles,
}) => {
  const noMoreClicking = () => {
    console.log("No More Clicking!")
  }

  return (
    <>
      {/* === Left Button ==== */}
      <i
        className={`fas fa-arrow-circle-left ${styles.left}`}
        role="presentation"
        onClick={() => {
          slideNumber <= nodes.length && slideNumber >= 0
            ? setSlideNumber(slideNumber - 1)
            : noMoreClicking()
        }}
      />

      {/* ==== Right Button ==== */}
      <i
        className={`fas fa-arrow-circle-right ${styles.right}`}
        role="presentation"
        onClick={() => {
          slideNumber < nodes.length - 1
            ? setSlideNumber(slideNumber + 1)
            : noMoreClicking()
        }}
      />
    </>
  )
}

export default ControlButtons
