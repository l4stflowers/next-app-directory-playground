import { getAfter3SecondsDateTime } from '@/api/getAfter3SecondsDateTIme'

const DateTimeAfter3Seconds = async (): Promise<JSX.Element> => {
  const time = await getAfter3SecondsDateTime()
  return <>{time}</>
}

export default DateTimeAfter3Seconds
