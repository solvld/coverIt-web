import { FilterSelect } from 'features/filterSelect'
import ArchiveCardsList from './ArchiveCardsList'
import { useState } from 'react'
import { ToasterOnError } from 'entities/ToastOnError'

const Archive = () => {
  const [filter, setFilter] = useState<string | null>(null)
  return (
    <>
      <FilterSelect setFilter={setFilter} />
      <ArchiveCardsList filter={filter} />
      <ToasterOnError />
    </>
  )
}

export default Archive
