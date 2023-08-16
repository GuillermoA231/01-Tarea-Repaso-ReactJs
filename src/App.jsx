
import './styles/index.css';
import './styles/features.css';
import NavBar from './components/common/NavBar';
import Banner from './components/common/Banner';
import Novedades from './components/views/Novedades';

const App = () => {
 

  return (
    <>
      <NavBar />
      <Banner />
      <Novedades />
    </>
  );
}

export default App
