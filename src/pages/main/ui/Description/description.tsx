import s from './styles.module.scss'
export default function Description({
  songs,
  title,
}: {
  songs: string[]
  title: string | null
}) {
  return (
    <section className={s.ticker}>
      <div className={s.container}>
        <p>
          <span>{title}</span>
          {songs.map((song, i) => `${i + 1}. ${song}\n`)}
        </p>
      </div>
    </section>
  )
}
