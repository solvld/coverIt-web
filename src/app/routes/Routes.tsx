import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

//import elements
import Root from 'app/layouts/appRoot'
import MainPage from 'pages/main'
//import Archive from 'pages/archive'
import Profile from 'pages/profile'
import LogIn from 'pages/logIn'
import SignUp from 'pages/signUp'
import Verify from 'pages/verify'
import GeneratePlaylist from 'pages/generate-playlist'
//import GenerateTrack from 'pages/generate-track'
import { PlaylistCard } from 'pages/playlist_card'
import { ReleaseCard } from 'pages/release_card'
import { WipPage } from 'pages/workInProgress'
import { EditRelease } from 'pages/edit-release'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="archive" element={<WipPage />} />
      <Route path="liked" element={<WipPage />} />
      <Route path="my-playlist" element={<WipPage />} />
      <Route path="find-user" element={<WipPage />} />
      <Route path="subscribe" element={<WipPage />} />
      <Route path="generate">
        <Route path="playlist" element={<GeneratePlaylist />}>
          <Route path="cover/:id" element={<PlaylistCard />} />
        </Route>
        <Route path="release" element={<WipPage />}>
          <Route path="edit" element={<EditRelease />} />
          <Route path="cover/:id" element={<ReleaseCard />} />
        </Route>
      </Route>
      <Route path="profile" element={<Profile />} />
      <Route path="sign-in" element={<LogIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="verify" element={<Verify />} />
    </Route>,
  ),
)
