import './App.css';
import Topbar from './Components/Topbar';
import SideBar from './Components/SideBar';
import Middle from './Components/Middle';

function App() {
  return (
    <div className="main">
        <div className="rightpart">
          <Topbar></Topbar>
          <div className ="other"> <Middle></Middle> </div>
        </div>
        <div className ="container">
          <SideBar></SideBar>
        </div>
        
    </div>
  );
}

export default App;
