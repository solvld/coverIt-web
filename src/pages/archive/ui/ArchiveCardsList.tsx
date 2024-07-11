import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useArchive } from 'shared/services/queries'
import { DotsLoader } from 'shared/ui/DotsLoader'
import styled from 'styled-components'
import { ArchivePlaylistCard } from 'widgets/archiveCard/playlist'

export const CardsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 38rem);
  gap: 2.35rem;
  justify-content: center;
  padding-bottom: 2rem;
  margin-top: 2.8rem;
`
const LoadingLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 1rem;
  height: 1rem;
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
        <LoadingLine>
          <DotsLoader />
        </LoadingLine>
      )}
      {/* {hasNextPage && <h1 style={{color: 'red'}}>0000</h1>} */}
    </>
  )
}
