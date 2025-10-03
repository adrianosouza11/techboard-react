import './App.css'
import { EventCreateForm } from './components/EventCreateForm'
import { Theme } from './components/Theme'
import { Banner } from './components/Banner';
import { EventCard } from './components/EventCard';

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
  ];

  const events = [
    {
      id: 1,
      theme: themes[0],
      title: 'Mulheres no Front',
      date: new Date,
      image: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      link: '#'
    }
  ]

  return (
    <>
      <main>
        <header>
          <img src="/logo.png" alt="" />
        </header>

        <Banner />

        <EventCreateForm />

        { /* Percorrendo array com .map */
          themes.map(item => (
            <section key={item.id}>
              <Theme theme={item} />
              <EventCard event={events[0]} />
            </section>
          ))
        }

      </main>
    </>
  )
}

export default App