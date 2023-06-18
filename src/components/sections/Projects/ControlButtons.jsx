import React from "react"

const ControlButtons = ({
  handleClick,
  slideNumber,
  setSlideNumber,
  noMoreClicking,
  nodes,
  styles,
}) => {
  return (
    <>
      {/* === Left Button ==== */}
      <i
        className={`fas fa-arrow-circle-left ${styles.left}`}
        role="presentation"
        onKeyDown={handleClick}
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
        onKeyDown={handleClick}
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
