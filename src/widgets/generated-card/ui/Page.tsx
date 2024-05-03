import s from './style.module.scss'
import wolf from 'shared/assets/images/image1.png'
import { songs } from 'shared/mocks/songs'
import AddCircle from 'shared/assets/images/add-circle.svg?react'
import Regenerate from 'shared/assets/images/regenerate.svg?react'
import Download from 'shared/assets/images/download.svg?react'
import Shared from 'shared/assets/images/shared.svg?react'
import Play from 'shared/assets/images/play.svg?react'
import { InputRadio } from 'shared/ui/InputRadio'

export const GeneratedCard = () => {
  return (
    <section className={s.page}>
      <div className={s.card}>
        <div className={s.main}>
          <img src={wolf} alt="Wolf" />
          <div>
            <h2>Lol music list</h2>
            <div className={s.actions}>
              <table className={s.playlist}>
                <thead>
                  {Object.entries(songs).map(([artist, song], index) => (
                    <tr key={index}>
                      <th>{index + 1}.</th>
                      <th>
                        <span>{artist} -</span> {song}
                      </th>
                    </tr>
                  ))}
                </thead>
              </table>
            </div>
          </div>
        </div>
        <div className={s.buttom}>
          <div>
            <AddCircle />
            <Regenerate />
            <label>
              <InputRadio $primary id="public" name="visible" />
              Public
            </label>
            <label>
              <InputRadio $primary id="private" name="visible" />
              Private
            </label>
          </div>
          <div>
            <Download />
            <Shared />
            <Play />
          </div>
        </div>
      </div>
    </section>
  )
}
