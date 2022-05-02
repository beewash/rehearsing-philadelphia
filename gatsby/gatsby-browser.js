import React from 'react'
import {AnimatePresence} from 'framer-motion'
import "./src/styles/tailwind.css"
import '/node_modules/slick-carousel/slick/slick.css'
import '/node_modules/slick-carousel/slick/slick-theme.css'
import Radio from './src/components/Radio/radio'
import SimpleReactLightbox from 'simple-react-lightbox'
import RadioContextProvider from './src/context/RadioContextProvider'

export const wrapPageElement = ({element}) => (
  <RadioContextProvider>
    <AnimatePresence exitBeforeEnter>
      <SimpleReactLightbox>
      {element}
      </SimpleReactLightbox>
    </AnimatePresence>
    <Radio />
  </RadioContextProvider>
)
