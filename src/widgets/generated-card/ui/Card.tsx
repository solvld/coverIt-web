import s from './style.module.scss'
import wolf from 'shared/assets/images/image1.png'
import { songs } from 'shared/mocks/songs'
import AddCircle from 'shared/assets/images/add-circle.svg?react'
import Regenerate from 'shared/assets/images/regenerate.svg?react'
import Download from 'shared/assets/images/download.svg?react'
import Shared from 'shared/assets/images/shared.svg?react'
import Play from 'shared/assets/images/play.svg?react'
import styled from 'styled-components'
import { Button } from 'shared/ui/Button'

const SongsList = styled.ol`
  list-style-position: inside;
  li {
    font-size: 20px;
    line-height: 32px;
    list-style-type: decimal;
    color: var(--gray1);
    span {
      color: var(--black);
    }
  }
`

export const GeneratedCard = () => {
  return (
    <section className={s.page}>
      <div className={s.card}>
        <div className={s.main}>
          <img src={wolf} alt="Wolf" />
          <div>
            <h2>Lol music list</h2>
            <div className={s.actions}>
              <SongsList>
                {songs.map((song, index) => (
                  <li key={index}>
                    {`${song.author} - `}
                    <span>{song.title}</span>
                  </li>
                ))}
              </SongsList>
            </div>
          </div>
        </div>
        <div className={s.bottom}>
          <div>
            <Button>
              <AddCircle />
              Save
            </Button>
            <Button>
              <Regenerate />
              Regenerate
            </Button>
          </div>
          <div>
            <Button>
              <Download />
              Download
            </Button>
            <Button>
              <Shared />
              Shared
            </Button>
            <Button>
              <Play />
              Play
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
