import { Link } from 'react-router-dom';
import { MainRoute } from '../../routes/MainRoute';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import './MainLayout.css';

function MainLayout() {
  return (
    <div className='MainLayout gradient-background '>
       <header>
          <Header />
        </header>
        <aside>
          <Menu />
        </aside>
        <main>
          <MainRoute />
        </main>
        <footer>
          <Footer />
        </footer>
      
    </div>
  );
}

export default MainLayout;


