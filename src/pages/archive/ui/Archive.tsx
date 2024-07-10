import { FilterSelect } from 'features/filterSelect'
import ArchiveCardsList from './ArchiveCardsList'
import { useState } from 'react'

const Archive = () => {
  const [filter, setFilter] = useState<string | null>(null)
  return (
    <>
      <FilterSelect setFilter={setFilter} />
      <ArchiveCardsList filter={filter} />
    </>
  )
}

export default Archive
