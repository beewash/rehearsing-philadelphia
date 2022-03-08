import React from "react"
import {motion} from 'framer-motion'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
        {this.props.noHeader ? null : <Header />}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: .75
          }}
          className="min-h-screen"
        >
          {children}
        </motion.div>
        {this.props.noFooter ? null : <Footer />}
      </>
    )
  }
}

export default Layout
