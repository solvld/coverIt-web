import { Select } from 'shared/ui/Select'
import s from './styles.module.scss'
import Arrow from 'shared/assets/images/arrow-next.svg?react'
import { useState } from 'react'
import { LinearLoading } from 'entities/LinearLoading'
import { InputRadio } from 'shared/ui/InputRadio'

const GeneratePlaylistForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }

  return (
    <section className={s.page}>
      {isLoading ? (
        <LinearLoading>We are cooking your cover...</LinearLoading>
      ) : (
        <div className={s.card}>
          <h2>Generate cover for playlist</h2>
          <form onSubmit={handleSubmit}>
            <div className={s.form}>
              <input
                className={s.urlInput}
                type="url"
                placeholder="Enter Spotify or Yandex Music playlist url..."
              />
              <div className={s.allInputRadio}>
                <label>
                  <InputRadio id="abstract" name="content" />
                  Abstract
                </label>
                <label>
                  <InputRadio id="lo-fi" name="content" />
                  Lo-Fi
                </label>
                <label>
                  <InputRadio id="hi-fi" name="content" />
                  Hi-Fi
                </label>
              </div>
              <Select name="select">
                <option value="value1" selected>
                  Vibe
                </option>
                <option value="value2">Nice</option>
                <option value="value3">Bumbox</option>
              </Select>
            </div>
            <button type="submit">
              <Arrow />
            </button>
          </form>
        </div>
      )}
    </section>
  )
}

export default GeneratePlaylistForm
