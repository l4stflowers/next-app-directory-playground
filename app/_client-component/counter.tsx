'use client'

import { useState } from 'react'

const Counter = (): JSX.Element => {
  const [count, setCount] = useState(0)
  const handleClick = (): void => {
    setCount((prev) => prev + 1)
  }

  return (
    <button
      className="rounded-md border border-current p-2 hover:bg-gray-700"
      onClick={handleClick}
    >
      {`count: ${count}`}
    </button>
  )
}

export default Counter
