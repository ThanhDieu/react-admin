/* eslint-disable @typescript-eslint/no-explicit-any */
export const fitResponseModel = <T>(response: any, isGetArray = false): T[] => {
  if (isGetArray) return response
  const newData: T[] = []

  if (response) {
    for (const key in response) {
      newData.push({ ...response[key], id: key })
    }
  }

  return newData
}
