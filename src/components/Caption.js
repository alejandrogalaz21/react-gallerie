import React from 'react'
import PropTypes from 'prop-types'

const Caption = ({ image, title, description }) => {
  return (
    <li>
      <figure>
        <img src={image} alt={title} />
        <figcaption>
          <h3>{title}</h3>
          <span>{description}</span>
          <a href='http://dribbble.com/shots/1115632-Camera'>Take a look</a>
        </figcaption>
      </figure>
    </li>
  )
}

Caption.propTypes = {}

export default Caption
