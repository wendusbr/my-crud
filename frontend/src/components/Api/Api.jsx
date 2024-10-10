import axios from "axios";

function Api(){
    const instance = axios.create({
        baseURL: 'http://127.0.0.1:8000/api/',
        headers: {
            'content-type': 'application/json'
        }
      });

      return {
        instance
      }
}

export default Api;