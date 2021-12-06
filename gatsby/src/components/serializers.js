import React from 'react'
import Figure from './Figure/Figure'

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
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
        <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
        : <a href={href}>{children}</a>
    }
  },
  list: (props) => {
    const { type } = props;
    const bullet = type === 'bullet';
    if (bullet) {
      return <ul className="list-disc mb-6 ml-6">{props.children}</ul>;
    }
    return <ol>{props.children}</ol>;
  },
  listItem: (props) => <p><li className="list-item lg:ml-6">{props.children}</li></p>
}

export default serializers
