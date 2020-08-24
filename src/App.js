import React, { Fragment } from 'react'
import Grid from './components/Grid'

const gallerie = [
  {
    image: require('./images/1.jpg'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/2.jpg'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/3.jpg'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/4.jpg'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/5.jpg'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/6.jpg'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/7.jpg'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/8.jpg'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/9.jpg'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/10.png'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/11.png'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/12.png'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/13.png'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/14.png'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/1.jpg'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/2.jpg'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/3.jpg'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/4.jpg'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/5.jpg'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/6.jpg'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/7.jpg'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/8.jpg'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/9.jpg'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/10.png'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/11.png'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/12.png'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/13.png'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: require('./images/14.png'),
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
]

function App() {
  return (
    <Fragment>
      <header>
        <h1>
          Loading Effects for Grid Items <span>with CSS Animations</span>
        </h1>
      </header>
      <div className='container-fluid'>
        <Grid images={gallerie} url={'gallerie'} effect={2} captionEffect={4} />
      </div>
    </Fragment>
  )
}

export default App
