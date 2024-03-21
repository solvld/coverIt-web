import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

//import elements
import Root from 'app/layouts/appRoot'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<h1>Page Generate</h1>} />
      <Route path="/archive" element={<h1>Page archive</h1>} />
    </Route>,
  ),
)
