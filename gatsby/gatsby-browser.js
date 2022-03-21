/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import {AnimatePresence} from 'framer-motion'
import "./src/styles/tailwind.css"
import '/node_modules/slick-carousel/slick/slick.css'
import '/node_modules/slick-carousel/slick/slick-theme.css'
import Radio from './src/components/Radio/radio'

export const wrapPageElement = ({element}) => (
  <>
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
  <Radio />
  </>
)
