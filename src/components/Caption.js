import React from 'react'
import PropTypes from 'prop-types'

const selectEffect = (effect) => {
  switch (effect) {
    case 1:
      return `effect-${effect}`
    case 2:
      return `effect-${effect}`
    case 3:
      return `effect-${effect}`
    case 4:
      return `effect-${effect}`
    case 5:
      return `effect-${effect}`
    default:
      return `effect-1`
  }
}

const randomEffect = () => Math.floor(Math.random() * 5) + 1

const Caption = ({ image, title }) => {
  return (
    <li>
      <figure>
        <img src={image} alt={title} />
        <figcaption>
          <h3>Camera</h3>
          <span>Jacob Cummings</span>
          <a href='http://dribbble.com/shots/1115632-Camera'>Take a look</a>
        </figcaption>
      </figure>
    </li>
  )
}

Caption.propTypes = {}

export default Caption
