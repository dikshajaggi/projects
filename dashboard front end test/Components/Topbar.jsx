import './Topbar.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';


function Topbar() {
  return (
    <div className="wrapper">
      <div className ="row1">
        <div className ="left">
          <h1>Dashboard</h1>
          <h1>Monday, <span className="span1">21 June 2021</span></h1>
        </div>

        <div className ="right">
          <div className ="right1">
            <NotificationsIcon style={{ color: "white", fontSize:"22px", marginTop:"8px"}} />
            <span className="span2"></span>
            <div><h2>John Bayer</h2></div>
            <img src="./images/avatar.jpg" className = "avatar"></img>
            <ExpandMoreIcon style={{ color: "white", fontSize:"20px", marginTop:"12px" }} />
          </div>

          <div class="right2">
            <AddIcon style={{ color: "white", marginTop:"9px", marginRight:"-28px",fontSize:"15px", zIndex:"1"}} /> 
            <button className="add"><span className="span3">Add</span></button>
            <SearchIcon style={{ color: "#A7A7A7",fontSize:"20px", marginTop:"10px", marginRight:"10px" ,position:"relative" }} />
            <input type="text" placeholder="Search for Application here" />
          </div>

        </div>
      </div>
      

    </div>
  );
}

export default Topbar;