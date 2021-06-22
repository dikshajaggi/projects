import './SideBar.css';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import FolderIcon from '@material-ui/icons/Folder';
import AssessmentIcon from '@material-ui/icons/Assessment';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';

function SideBar() {
  return (
    <div className="wrapper1">

        <div className="icons">
            <span className="active"></span>
            <HomeIcon  style={{ color: "#2E9CFD", fontSize:"22px",marginBottom:"15px"}}></HomeIcon> 
            <AssessmentIcon style={{ color: "white" , fontSize:"22px", marginBottom:"15px"}}></AssessmentIcon> 
            <BusinessCenterIcon style={{ color: "white" , fontSize:"22px", marginBottom:"15px"}}></BusinessCenterIcon> 
            <FolderIcon style={{ color: "white" , fontSize:"22px", marginBottom:"15px"}}></FolderIcon> 
            <EventAvailableIcon style={{ color: "white" , fontSize:"22px", marginBottom:"15px"}}></EventAvailableIcon> 
            <PeopleAltIcon style={{ color: "white" , fontSize:"22px", marginBottom:"15px"}}></PeopleAltIcon> 
            <CommentIcon style={{ color: "white" , fontSize:"22px", marginBottom:"15px"}}></CommentIcon> 
            <ExitToAppIcon style={{ color: "white" , fontSize:"22px", marginBottom:"15px"}}></ExitToAppIcon>
        </div>

        <div className="lasticon"> 
        <SettingsIcon style={{ color: "white" , fontSize:"22px", marginBottom:"15px"}}></SettingsIcon>
        </div>
    </div>
  );
}

export default SideBar;