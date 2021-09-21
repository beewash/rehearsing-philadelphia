import React from "react"

const PageBuilderLineBreak = ({ block, raw }) => {
  const { borderColor, borderLength, borderMargin, borderWidth } = block

  return (
    <section id="lineBreak" className={`w-full my-${borderMargin}`}>
      <div className={`mx-auto w-${borderLength} border-t-${borderWidth} border-${borderColor}`}></div>
    </section>
  )
}

export default PageBuilderLineBreak