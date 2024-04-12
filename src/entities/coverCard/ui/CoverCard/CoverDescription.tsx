import s from './styles.module.scss'

const CoverDescription = ({
  title,
  songs,
}: {
  title: string
  songs: string[]
}) => {
  return (
    <aside className={s.description}>
      <h2>{title}</h2>
      <ol>
        {songs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ol>
    </aside>
  )
}

export default CoverDescription
