import { Loading } from 'shared/ui/Loading'
import s from './style.module.scss'
import { Title } from 'shared/ui/form'

export const LinearLoading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={s.container}>
      <Title>{children}</Title>
      <div className={s.frame}>
        <Loading />
      </div>
    </div>
  )
}
