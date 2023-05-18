export const getAfter3SecondsDateTime = (): Promise<string> =>
  new Promise<string>((resolve) => {
    setTimeout(() => {
      const now = new Date().toLocaleString()
      resolve(now)
    }, 3000)
  })
