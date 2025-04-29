import MainRoute from '@/app/MainRoute';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';
import { Children } from 'react';

const MainLayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <aside>
        <Menu />
      </aside>
      <main>
{Children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
