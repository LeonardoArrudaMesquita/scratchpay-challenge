import axios from 'axios'

export const AxiosHelper = {
  uri: '' as string,

  get (uri: string): any {
    return axios.get(uri)
  }
}
