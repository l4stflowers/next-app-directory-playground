import DateTimeAfter3Seconds from '@/components/dateTimeAfter3seconds'

const Static = (): JSX.Element => {
  return (
    <div className="container mx-auto px-4">
      <p className="text-xl">
        {/* @ts-expect-error Server Component */}
        <DateTimeAfter3Seconds />
      </p>
    </div>
  )
}

export default Static
