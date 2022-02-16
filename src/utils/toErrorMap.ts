export const toErrorMap = (errors: any[]) => {
  const errorMap: { [key: string]: string } = {}
  errors.forEach((errMessage: string) => {
    let key = errMessage.toString().split(' ')[0]
    errorMap[key] = errMessage
  })
  return errorMap
}
