import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

export default new Gitalk({
  clientID: 'de47adf4f9d0394257eb',
  clientSecret: '7619f44e8a16d8d6b450a588caf2e087f1fb8500',
  repo: 'comments',
  owner: 'zfanli',
  admin: ['zfanli'],
  id: `vue-training/${location.hash}`, // Ensure uniqueness and length less than 50
  distractionFreeMode: false, // Facebook-like distraction free mode
})
