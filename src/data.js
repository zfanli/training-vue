import { range } from 'lodash'


// data for development

export default {
  list: range(5).map(i => {
    return {
      title: `Post No.${i + 1}`
    }
  })
}
