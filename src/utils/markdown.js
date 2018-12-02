import Md from 'markdown-it'

const md = new Md()

export default md.render.bind(md)
