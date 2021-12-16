import React, {useState} from 'react'
import PortableText from './portableText'
import Button from './button'
import Roster from './roster'

const PageBuilderRoster = ({block, raw}) => {
  const {title, roster, summary, _rawSummary} = block

  const allCategories = ['All', ...new Set(roster.map(roster => roster.moduleList))]

  const [rosterItem, setRosterItem] = useState(roster)
  // const [buttons, setButtons] = useState(allCategories)
  const [buttons] = useState(allCategories)

  //Filter Function
  const filter = (button) =>{

    if(button === 'All'){
      setRosterItem(roster);
      return;
    }

    const filteredData = roster.filter(roster => roster.moduleList ===  button)
    setRosterItem(filteredData)
  }

  return (
    <section id="Roster" className='max-w-6xl mx-auto px-6 pb-28'>
      <div className='container mx-auto flex flex-col py-4'>
        <div className="mb-8">
          <h4 className="normal-case" >{title}</h4>
        </div>
        {summary ? (
          <div className="mb-8">
            <PortableText blocks={_rawSummary} />
          </div>
        ) : null}
        <Button button={buttons} filter={filter} roster={roster} />
        <div className="h-0.5 w-16 bg-black mb-8"></div>
        <Roster rosterItem={rosterItem} />
      </div>
    </section>
  )
}

export default PageBuilderRoster