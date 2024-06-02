import { Loading } from 'shared/ui/Loading'
import s from './style.module.scss'
import { Title } from 'shared/ui/form'

interface LinearLoadingProps {
  isDone?: boolean
  children: React.ReactNode
}
export const LinearLoading = ({
  children,
  isDone = false,
}: LinearLoadingProps) => {
  return (
    <div className={s.container}>
      <Title>{children}</Title>
      <div className={s.frame}>
        <Loading $isDone={isDone} />
      </div>
    </div>
  )
}
