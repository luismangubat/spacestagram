const formatedDate = (date: Date): string => date.toISOString().split('T')[0]

export const currentDate = (): string => formatedDate(new Date())

export const getDate = (current: string, length: number): string => {
  const date = new Date(current)
  const previous = date.setDate(date.getDate() - length)
  return formatedDate(new Date(previous))
}
