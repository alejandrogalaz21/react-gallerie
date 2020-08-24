import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Caption from './Caption'
import './grid.css'
import './caption.css'

import { selectCE, selectGE } from './helpers'

const Gallerie = ({ images, url, effect, captionEffect }) => {
  useEffect(() => {
    new window.AnimOnScroll(document.getElementById('grid'), {
      minDuration: 0.4,
      maxDuration: 0.7,
      viewportFactor: 0.2,
    })
  }, [])

  return (
    <div
      className={`row grid ${selectGE(effect)} ${selectCE(captionEffect)}`}
      id='grid'>
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
