import React from 'react'
import Header from './containers/Header'
import GlobalStyle from './styles'
import Hero from './containers/Hero'
import About from './containers/About'
import Experience from './containers/Experience'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Experience />
      <About />
    </>
  )
}

export default App
