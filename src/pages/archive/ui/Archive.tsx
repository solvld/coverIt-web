import { FilterSelect } from 'features/filterSelect'
import ArchiveCardsList from './ArchiveCardsList'
import { useState } from 'react'
import { ToasterOnError } from 'entities/ToastOnError'

const Archive = () => {
  const [filter, setFilter] = useState<string | null>(null)
  return (
    <>
      <div style={{ marginLeft: '1.875rem' }}>
        <FilterSelect setFilter={setFilter} />
      </div>
      <ArchiveCardsList filter={filter} />
      <ToasterOnError />
    </>
  )
}

export default Archive
