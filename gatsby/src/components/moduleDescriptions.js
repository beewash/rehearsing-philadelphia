import React from 'react'
import PortableText from './portableText'

function ModuleDescription({description, isDescription}) {
    return (
        <div id="moduleDescription" className={`${isDescription !== true ? 'hidden' : 'block'}`}>
            <PortableText blocks={description?._rawOrchestraDescription} />
        </div>
    )
}

export default ModuleDescription