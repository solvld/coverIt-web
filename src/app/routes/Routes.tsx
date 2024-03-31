import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

//import elements
import Root from 'app/layouts/appRoot'
import MainPage from 'pages/main'
import Archive from 'pages/archive/ui/Archive'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<MainPage />} />
      <Route path="/archive" element={<Archive />} />
    </Route>,
  ),
)
