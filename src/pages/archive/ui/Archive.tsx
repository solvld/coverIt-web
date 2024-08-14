import { useState } from 'react'
import { FilterSelect } from 'features/filterSelect'
import { ArchiveCardsList } from './cardsLists/ArchiveCardsList'
import { LikedCardsList } from './cardsLists/LikedCardsList'
import { ToasterOnError } from 'entities/ToastOnError'

const Archive = ({ liked }: { liked?: boolean }) => {
  const [filter, setFilter] = useState<string | null>(null)
  return (
    <>
      <div style={{ marginLeft: '1.875rem' }}>
        <FilterSelect setFilter={setFilter} />
      </div>
      {!liked ? (
        <ArchiveCardsList filter={filter} />
      ) : (
        <LikedCardsList filter={filter} />
      )}
      <ToasterOnError />
    </>
  )
}

export default Archive
