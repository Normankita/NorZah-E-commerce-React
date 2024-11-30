import { Header } from "../components/Header";
import { Joke } from "../components/Joke";

export const Jokes = () => {
  return (
    <div>
      <Header title={"Jokes"} subtitle={"get random Chuck Noris Jokes here"}/>
      <Joke/> 
    </div>
  )
}
