import axios from 'axios';

export const getUserService = async ( ) => {
    try {
      const response  = await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(response.data , "in service")
      return response.data
    } catch (error) {
          console.log(error)
    }
}
