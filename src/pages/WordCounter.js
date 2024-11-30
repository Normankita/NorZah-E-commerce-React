import { Header } from "../components/Header"
import {Counter} from "../components/Counter"
export const WordCounter = () => {
  return (
    <div>
      <Header title={"Word Counter"}  subtitle={"write your words, and we will count for you"}/>
      <Counter/>
    </div>
  )
}
