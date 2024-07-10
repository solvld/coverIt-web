import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useArchive } from 'shared/services/queries'
import styled from 'styled-components'
import { ArchivePlaylistCard } from 'widgets/archiveCard/playlist'

export const CardsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 38rem);
  gap: 1rem;
  justify-content: center;
  padding-bottom: 2rem;
`
interface ArchiveProps {
  filter: string | null
}
export default function ArchiveCardsList({ filter }: ArchiveProps) {
  const { data, status, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useArchive(filter)
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage, hasNextPage])

  return (
    <>
      <CardsList>
        {data?.pages.map(page =>
          page.map((item, index) => {
            if (page.length == index + 1) {
              return (
                <ArchivePlaylistCard key={item.id} data={item} innerRef={ref} />
              )
            }
            return <ArchivePlaylistCard key={item.id} data={item} />
          }),
        )}
      </CardsList>
      {(status == 'pending' || isFetchingNextPage) && (
        <p className="text-red-500 text-center">Loading...</p>
      )}
      {/* {hasNextPage && <h1 style={{color: 'red'}}>0000</h1>} */}
    </>
  )
}
