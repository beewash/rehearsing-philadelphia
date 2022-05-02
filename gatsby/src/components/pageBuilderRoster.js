import React, {useState} from 'react'
import PortableText from './portableText'
import Button from './button'
import Roster from './roster'
import ModuleDescription from './moduleDescriptions'

const PageBuilderRoster = ({block, raw}) => {
  const {title, roster, summary, _rawSummary, optionalDescriptions} = block
  

  const allCategories = ['All', ...new Set(roster.map(roster => roster.moduleList))]

  const [rosterItem, setRosterItem] = useState(roster)
  const [isDescription, setDescription] = useState(false)

  //Filter Function
  const filter = (button) =>{

    if(button === 'All'){
      setRosterItem(roster);
      setDescription(false);
      return
    } else if (button === 'orchestra') {
      setDescription(true)
    } else if (button !== 'orchestra') {
      setDescription(false)
    } else {return}

    // if(button !== 'orchestra'){
    //   setDescription(false)
    //   return;
    // }

    // if(button === 'orchestra'){
    //   setDescription(true)
    //   return;
    // }

    const filteredData = roster.filter(roster => roster.moduleList === button)
    setRosterItem(filteredData)
  }

  const renderDescription = () => (
    <>
      <div >
        <PortableText blocks={optionalDescriptions?._rawOrchestraDescription} />
      </div>
    </>
  )

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
        {allCategories.length > 2 ? (
          <>
            <Button button={allCategories} filter={filter} />
            <div className="h-0.5 w-16 bg-black mb-8"></div>
          </>
        ) : (
          null
        )}
        <ModuleDescription isDescription={isDescription} description={optionalDescriptions}  />
        <Roster rosterItem={rosterItem} />
      </div>
    </section>
  )
}

export default PageBuilderRoster