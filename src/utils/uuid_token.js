import { v4 as uuidv4 } from 'uuid'

export const getUUID = () => {
  let uuidtoken = localStorage.getItem('UUIDTOKEN')
  if (!uuidtoken) {
    let uuidtoken = uuidv4()
    localStorage.setItem('UUIDTOKEN', uuidtoken)
  }
  return uuidtoken
}
