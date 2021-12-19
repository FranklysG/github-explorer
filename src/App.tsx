import { RepositoryList } from './components/RepositoryList';
import { Navbar } from './components/Navbar';
import './style/global.scss';

export function App() {
  return (
    <>
      <Navbar />
      <RepositoryList />
    </>
    );
}