import React from "react"
import PortableText from "./portableText"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

const PageBuilderFAQ = ({ block }) => {
const { faqItems } = block

  return (
    <section id="pageBuilderFAQ" className="max-w-6xl mx-auto px-6 pb-28">
      {faqItems.map((faqItem, index) => 
      <Accordion allowZeroExpanded>
        <AccordionItem className="border-t-2 border-black p-6" key={index}>
          <AccordionItemHeading >
            <AccordionItemButton className="w-full flex space-x-8 justify-center">
              <h4 className="w-full normal-case font-normal inline-block">{faqItem.question}</h4>
              <AccordionItemState>
                {({ expanded }) => (expanded ? <BsChevronDown classNAme="inline-block" size={28} /> : <BsChevronUp className="inline-block" size={28} />)}
              </AccordionItemState>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="pt-8">
            <PortableText blocks={faqItem._rawAnswer} />
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
      )}
    </section>
  );
};

export default PageBuilderFAQ