import './App.css'
import { EventCreateForm } from './components/EventCreateForm'
import { Theme } from './components/Theme'
import { Banner } from './components/Banner'

function App() {

  const themes = [
    {
      id: 1,
      name: 'front-end'
    },
    {
      id: 2,
      name: 'back-end'
    },
    {
      id: 3,
      name: 'devops'
    },
    {
      id: 4,
      name: 'inteligência artificial'
    },
    {
      id: 5,
      name: 'data science'
    },
    {
      id: 6,
      name: 'data cloud'
    }, 
  ]

  return (
    <>
      <main>
        <header>
          <img src="/logo.png" alt="" />
        </header>

        <Banner />

        <EventCreateForm />

        <section>
          <Theme  theme={themes[0]} />
          <Theme  theme={themes[1]} />
          <Theme  theme={themes[2]} />
          <Theme  theme={themes[3]} />
          <Theme  theme={themes[4]} />
          <Theme  theme={themes[5]} />
        </section>
      </main>
    </>
  )
}

export default App