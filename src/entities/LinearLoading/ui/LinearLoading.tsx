import { Loading } from 'shared/ui/Loading'
import s from './style.module.scss'

export const LinearLoading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={s.container}>
      <h2>{children}</h2>
      <div className={s.frame}>
        <Loading />
      </div>
    </div>
  )
}
