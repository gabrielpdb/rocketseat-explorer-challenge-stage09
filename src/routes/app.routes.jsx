import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { CreateMovie } from '../pages/CreateMovie'
import { MoviePreview } from '../pages/MoviePreview'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create" element={<CreateMovie />} />
      <Route path="/preview" element={<MoviePreview />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}
