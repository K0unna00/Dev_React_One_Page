import './common.scss';
import { Head } from './components/Head/Head';
import { Header } from "./pages/header/Header";
import { Discount } from "./pages/home/components/Discount/Discount";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Head/>
        <Discount/>
      <header>
        <Header/>
      </header>
      <main>
        <Home/>
      </main>
    </div>
  );
}

export default App;
