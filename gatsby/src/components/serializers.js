import React from 'react'
import Figure from './Figure/Figure'
import { Link } from 'gatsby'

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    cta: ({ node }) => {
      return (
        <section id="cta" className='pt-2 pb-8'>
          <div className={`w-max py-2 text-cfsSM font-acuminPro font-medium text-center text-${node.textColor} bg-${node.bgColor} border-black border-2 rounded-full hover:bg-${node.bgHoverColor} hover:text-${node.textHoverColor}`}>
            {node.linkTo.externalContent ? (
              <a href={node.linkTo.linkUrl} target='_blank' rel="noreferrer" className="px-8">{node.linkText}</a>
            ) 
              : <Link to={`/${node.linkTo.linkUrl}`} className="px-16">{node.linkText}</Link>
            }
          </div>
        </section>
      )
    },
    block(props) {
      switch (props.node.style) {
        case "h1":
          return <h1 className="">{props.children}</h1>

        case "h2":
          return <h2 className="">{props.children}</h2>

        case "h3":
          return <h3 className="mb-6">{props.children}</h3>

        case "h4":
          return <h4 className="mb-6 normal-case">{props.children}</h4>

        case "h5":
          return <h5 className="">{props.children}</h5>

        case "h6":
          return <h6 className="">{props.children}</h6>

        case "li":
          return <p className="">{props.children}</p>

        case "blockquote":
          return <blockquote className="">{props.children}</blockquote>

        case "break":
          return <hr className="my-10 border-black border-opacity-20"></hr>
        
        case "normal":
          return  <p className="mb-5">{props.children}</p>
        
        default:
          return <p className="">{props.children}</p>
      }
    }
  },
  marks: {
    link: ({mark, children}) => {
      // Read https://css-tricks.com/use-target_blank/
      const { blank, href } = mark
      return blank ?
        <a href={href} className="hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>
        : <a href={href} className="hover:underline">{children}</a>
    }
  },
  list: (props) => {
    const { type } = props;
    const bullet = type === 'bullet';
    const numbered = type === 'number';
    if (bullet) {
      return <ul className="list-disc mb-6 ml-6">{props.children}</ul>;
    } else if (numbered) {
      return <ul className="list-decimal mb-6 ml-6">{props.children}</ul>;
    } else return <ol>{props.children}</ol>;
  },
  listItem: (props) => <p><li className="list-item mb-5 lg:ml-6">{props.children}</li></p>
}

export default serializers
