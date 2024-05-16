import { Outlet } from 'react-router-dom'
import { Header } from 'widgets/header/index'

const Root = () => {
  return (
    <>
      <Header />
      <>
        <Outlet />
      </>
    </>
  )
}

export default Root
