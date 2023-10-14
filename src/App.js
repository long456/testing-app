import './App.css';
import SideBar from './Components/Common/SideBar';
import Footer from './Components/Common/Footer';
import Header from './Components/Common/Header';
import Page from './Components/Page/Page';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='layout'>
        <SideBar/>
        <Page/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
