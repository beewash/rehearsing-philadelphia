import React from "react"
import GridBuilderTileAbout from "./gridBuilderTileAbout"
import GridBuilderTileBasic from "./gridBuilderTileBasic"
import GridBuilderTileDesc from "./gridBuilderTileDesc"
import GridBuilderTileLocation from "./gridBuilderTileLocation"
import PageBuilderColumns from "./pageBuilderColumns"
import GridBuilderTileArtist from "./gridBuilderTileArtist"

function GridBuilder(props) {
  const { type, gridItems, _rawGridItems, globalStyles} = props

  // console.log('pageBuilder: ', pageBuilder);

  // Load the right component, based on the _type from Sanity
  const Components = {
    tileAbout: GridBuilderTileAbout,
    tileBasic: GridBuilderTileBasic,
    tileDescription: GridBuilderTileDesc,
    tileLocation: GridBuilderTileLocation,
    pageBuilderColumns: PageBuilderColumns,
    tileArtist: GridBuilderTileArtist
  }

  // 'raw' content needs to be passed in for the PortableText Component
  return gridItems.map((block, index) => {
    if (Components[block._type]) {
      return React.createElement(Components[block._type], {
        key: block._key,
        block: block,
        type,
        globalStyles,
        raw: _rawGridItems[index]
      });
    }
  });
}

export default GridBuilder
