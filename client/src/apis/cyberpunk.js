import axios from 'axios'

export default axios.create({
  baseURL: 'https://cybersocial.herokuapp.com'
})


// Local Environment
// export default axios.create({
//   baseURL: 'http://localhost:8080'
// })
