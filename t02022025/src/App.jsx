import Container from './component/Container';
import {Provider} from 'react-redux';
import firstStore from './redux/store';

function App() {

  return (
    <>
    <Provider store = {firstStore}>
      <Container/>
    </Provider>
    </>
  )
}

export default App
