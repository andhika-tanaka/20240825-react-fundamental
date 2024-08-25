import './App.css'
import Article from './components/Article'

function App() {
  return (
    <div className="App">
      <Article name="Andhika" titles={["NextJS, ReactJS, NodeJS"]}/>
      <Article name="Tanaka" titles={["NextJS, ReactJS, NodeJS"]}/>
    </div>
  )
}

export default App
