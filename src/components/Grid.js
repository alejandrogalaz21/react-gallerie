import React from 'react'
import PropTypes from 'prop-types'
import Caption from './Caption'
import './grid.css'

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

const Gallerie = ({ images, url, effect }) => {
  return (
    <div className={`row grid ${selectEffect(effect)}`}>
      {images.map((image, i) => (
        <Caption key={i} {...image} url={`${url}/${image.image}`} />
      ))}
    </div>
  )
}

Gallerie.propTypes = {
  images: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
}

export default Gallerie
