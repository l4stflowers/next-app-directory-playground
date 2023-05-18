import DateTimeAfter3Seconds from '@/components/dateTimeAfter3seconds'

export const revalidate = 0

const Dynamic = (): JSX.Element => {
  return (
    <p className="text-xl">
      {/* @ts-expect-error Server Component */}
      <DateTimeAfter3Seconds />
    </p>
  )
}

export default Dynamic
