import {MdVideoLibrary} from 'react-icons/md'

export default {
  name: 'youtube',
  type: 'object',
  icon: MdVideoLibrary,
  title: 'YouTube Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL'
    }
  ]
}
