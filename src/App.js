import styled from 'styled-components'
import Home from './pages/Home'
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <AppContainer>
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
   text-align: center;
`