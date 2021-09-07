import { userEarningInfoInput } from '../types'

/* eslint-disable no-mixed-operators */
export const generateUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const saveUserInput = (userInput: userEarningInfoInput) => {
  const data = {
    ...userInput,
    quantity: 1,
    uuid: generateUUID(),
  }
  let storedData = window.localStorage.getItem('crypto')

  if (storedData) {
    storedData = JSON.parse(storedData)
    Array.isArray(storedData) && storedData.push(data)
    window.localStorage.setItem(
      'crypto',
      JSON.stringify(storedData)
    )
  } else {
    window.localStorage.setItem('crypto', JSON.stringify([data]))
  }
  console.log(data)
}

