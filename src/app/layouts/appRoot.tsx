import { Outlet } from 'react-router-dom'
import { Header } from 'widgets/header/index'

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Root
