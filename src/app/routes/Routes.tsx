import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

//import elements
import Root from 'app/layouts/appRoot'
import MainPage from 'pages/main'
import Archive from 'pages/archive'
import Generate from 'pages/generate'
import Profile from 'pages/profile'
import LogIn from 'pages/logIn'
import SignUp from 'pages/signUp'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<MainPage />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/generate" element={<Generate />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sign-in" element={<LogIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Route>,
  ),
)
