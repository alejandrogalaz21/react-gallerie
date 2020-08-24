import React from 'react'
import PropTypes from 'prop-types'
import Caption from './Caption'
import './grid.css'
import { selectEffect } from './helpers'

const Gallerie = ({ images, url, captionEffect }) => {
  return (
    <div className={`row grid ${selectEffect(captionEffect)}`}>
      {images.map((image, i) => (
        <Caption key={i} {...image} url={`${url}/${image.image}`} />
      ))}
    </div>
  )
}

Gallerie.propTypes = {
  images: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  captionEffect: PropTypes.number.isRequired,
}

export default Gallerie
