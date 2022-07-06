import React, { useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faForward } from "@fortawesome/free-solid-svg-icons"
import { faBackward } from "@fortawesome/free-solid-svg-icons"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"

const Button = ({ label, fontIcon }) => {
  const [ariaPressed, setAriaPressed] = useState(false)
  const [faIcon, setFaIcon] = useState(fontIcon)
  const buttonRef = useRef(null)
  // I want to be kept
  //enter button events
  const onButtonClick = () => {
    if (ariaPressed === false) {
      setAriaPressed(true)
      setFaIcon(<FontAwesomeIcon icon={faThumbsUp} />)
      setTimeout(() => {
        setAriaPressed(false)
        setFaIcon(fontIcon)
      }, 1555)
      console.log("button clicked")
    } else {
      setAriaPressed(false)
      setFaIcon(fontIcon)
    }
  }
  return (
    <button
      className={label}
      ref={buttonRef}
      onClick={onButtonClick}
      type='button'
      aria-pressed={ariaPressed}>
      {faIcon}
      {label}
      {faIcon}
    </button>
  )
}
const App = () => {
  return (
    <div className='wrapper'>
      <div className=' button-section container'>
        <Button
          fontIcon={<FontAwesomeIcon icon={faBackward} />}
          label='previous'
        />
        <Button fontIcon={<FontAwesomeIcon icon={faForward} />} label='next' />
      </div>
      <div className='container two'>
        <Button
          fontIcon={<FontAwesomeIcon icon={faPaperPlane} />}
          label='send'
        />
      </div>
    </div>
  )
}

export default App
