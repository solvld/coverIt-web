import { CoverCardDescription } from './styles/CoverCard.styles.ts'

const CoverDescription = ({
  title,
  songs,
}: {
  title: string
  songs: string[]
}) => {
  return (
    <CoverCardDescription>
      <h2>{title}</h2>
      <ol>
        {songs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ol>
    </CoverCardDescription>
  )
}

export default CoverDescription
