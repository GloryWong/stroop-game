import './App.css'
import Progress from './components/Progress'
import Header from './components/Header'
import Title from './components/Title'
import Cards from './components/Cards'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Progress />
      <div>
        <Title />
        <Cards />
      </div>
    </div>
  )
}
