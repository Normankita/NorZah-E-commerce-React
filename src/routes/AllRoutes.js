import { Routes, Route } from "react-router-dom"
import {WordCounter} from '../pages/WordCounter'
import {PageNotFound} from '../pages/PageNotFound'
import { Jokes } from '../pages/Jokes'
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<WordCounter/>}/>
      <Route path="jokes/" element={<Jokes/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}
