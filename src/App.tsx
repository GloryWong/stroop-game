import './App.css'
import Progress from './components/Progress'
import Header from './components/Header'
import Question from './components/Question'
import Cards from './components/Cards'
import Land from './components/Land'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Progress />
      <div>
        <Question />
        <Cards />
      </div>
      <Land />
    </div>
  )
}
