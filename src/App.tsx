import { ThemeProvider } from 'styled-components'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import themeConstCores from './containers/ListaVagas/theme/ConstCores'
import Cabecalho from './components/Cabecalho'

import EstiloGlobal, { Container } from './Global'


function App() {
  return (
    <ThemeProvider theme={themeConstCores}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
