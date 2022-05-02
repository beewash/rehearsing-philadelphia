const React = require('react')
const { AnimatePresence } = require('framer-motion')
const Radio = require('./src/components/Radio/radio')
const SimpleReactLightbox = require('simple-react-lightbox')
const RadioContextProvider = require('./src/context/RadioContextProvider')

exports.wrapPageElement = ({element}) => {
  return (
  <RadioContextProvider>
    <AnimatePresence exitBeforeEnter>
      <SimpleReactLightbox>
      {element}
      </SimpleReactLightbox>
    </AnimatePresence>
    <Radio />
  </RadioContextProvider>
  )
}