import { range } from 'lodash'

// data for development

export default {
  list: range(15).map(i => {
    return {
      title: `Post No.${i + 1}`,
    }
  }),
  title: 'Richard Zg',
}
