import { Outlet } from 'react-router-dom'
import './App.css';
import Nav from './components/NavTabs';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
