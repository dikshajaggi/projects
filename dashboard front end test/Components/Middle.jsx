import React from 'react';
import './Middle.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CallMadeIcon from '@material-ui/icons/CallMade';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FolderIcon from '@material-ui/icons/Folder';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PersonIcon from '@material-ui/icons/Person';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

function Middle() {
  return (
    <div className="middle">

      <div className="col1">
        <div className="rows">
          <div className="row0">
            <div className="box1">
              <span className="head1">Total Applications <MoreHorizIcon  style={{fontSize:"18px"}}></MoreHorizIcon></span>
              <div className="body2">
                  <div className="body1" style={{color:"#937DE2",fontSize:"12px"}}><h1>7956</h1><CallMadeIcon style={{color:"#937DE2",fontSize:"12px"}}></CallMadeIcon> +3.59%</div>
                  <CircularProgress variant="determinate" value={75}></CircularProgress>
              </div>
            </div>
            <div className="box2">
            <div className="box1" style={{backgroundColor:"#2E9CFD"}}>
              <span className="head1">Shortlisted Candidates <MoreHorizIcon  style={{fontSize:"18px"}}></MoreHorizIcon></span>
              <div className="body2">
                  <div className="body1" style={{color:"#ffffff",fontSize:"12px"}}><h1>7956</h1><CallMadeIcon style={{color:"#ffffff",fontSize:"12px"}}></CallMadeIcon> +3.59%</div>
                  <CircularProgress variant="determinate" value={75}></CircularProgress>
              </div>
            </div>
            </div>
          </div>
          <div className="row2">
            <div className="box3">
              <div className="header">
                <span className="head1">Applications Recieved</span>
                <div className="header1">
                  <span className="s0">This Year</span>
                  <span className="s0">This Week</span>
                  <span className="s0">Today</span>
                  <span className="s0"><FolderIcon style={{fontSize:"14px", marginTop:"6px", marginLeft:"-12px",position:"absolute"}}></FolderIcon> Download Report <MoreVertIcon style={{fontSize:"18px",marginTop:"5px", position:"absolute"}}></MoreVertIcon></span>
                </div>
                <img src="./images/chart.PNG"style={{marginLeft:"62px" , marginTop:"40px", height:"130px",width:"350px" ,position:"absolute"}}></img>
              </div>
            </div>
          </div>
          <div className="row3">
          <div className="box4"> 
           <div className="header">
            <span className="head1">Referals and Campaign Stats</span>
            <div className="header1">
              <span className="head1" style={{color:"#FE5260"}}>40 Campaings sent in total</span>
              <span className="head1">4 Campaings sent in last month</span>
           </div>
           </div>
            <div className="blocks">
               <span className="s1"><h2>User's Reached</h2><CallMadeIcon style={{fontSize:"14px"}}></CallMadeIcon> +3.59% <h1>7956</h1></span>
               <span className="s1"><h2>Referals</h2><CallMadeIcon style={{fontSize:"14px"}}></CallMadeIcon> +3.59%  <h1>7956</h1></span>
               <span className="s1"><h2>Shares</h2><CallMadeIcon style={{fontSize:"14px"}}></CallMadeIcon> +3.59%  <h1>7956</h1></span>
               <span className="s1"><h2>Applications</h2><CallMadeIcon style={{fontSize:"14px"}}></CallMadeIcon> +3.59%  <h1>7956</h1></span>
            </div>
            <div class="box4btn">
              <button className="btn1">Start a New Campaign now</button>
              <button className="btn2">Pause All Running Campaings</button>
            </div>
            
          </div>
          </div>
        </div>
    </div>

    <div className="col2">
      <div className="row4">
        <div className="box1">
              <span className="head1">Total Applications <MoreHorizIcon style={{fontSize:"18px"}}></MoreHorizIcon></span>
              <div className="body2">
                  <div className="body1" style={{color:"#F05E73", fontSize:"12px"}}><h1>7956</h1><CallReceivedIcon style={{color:"#F05E73",fontSize:"12px"}}></CallReceivedIcon> -0.4%</div>
                  <CircularProgress variant="determinate" value={75}></CircularProgress>
              </div>
        </div>
      </div>
      <div className="row5"> 
        <div className="box5">
          <span className="head1">Total Applications</span>
          <div className = "box6">
            <ul>
              <li style={{color:"#AED3F0"}}> Applications</li> <span className="list1"><LinearProgress variant="determinate" value={50} style={{width:"100px" , backgroundColor:"#46484", height:"6px", borderRadius:"15px"}} /></span>
              <li style={{color:"#2A9BFB"}}> Short Listed</li> <span className="list1"><LinearProgress variant="determinate" value={80} style={{width:"100px" ,  backgroundColor:"#46484",height:"6px", borderRadius:"15px"}}/></span>
              <li style={{color:"#FE5260"}}> Rejected </li> <span className="list1"><LinearProgress variant="determinate" value={35} style={{width:"100px" , backgroundColor:"#46484", height:"6px", borderRadius:"15px"}} /></span>
              <li style={{color:"#DBBAE9"}}> On hold </li> <span className="list1"><LinearProgress variant="determinate" value={10} style={{width:"100px" ,  backgroundColor:"#46484",height:"6px", borderRadius:"15px"}}/></span>
              <li style={{color:"#644FB4"}}> Pending </li> <span className="list1"><LinearProgress variant="determinate" value={70} style={{width:"100px" , backgroundColor:"#46484", height:"6px", borderRadius:"15px"}}/></span>
            </ul>
          </div>
        </div>
      </div>
      <div className="row6">
        <div className="box5">
          <span className="head1">Open Positions by Department <MoreHorizIcon  style={{fontSize:"18px"}}></MoreHorizIcon></span>
          <img src="./images/1.PNG"style={{marginLeft:"62px" , height:"130px", position:"absolute"}}></img>
        </div>
        
      </div>
    </div>

    <div className="col3">
      <ArrowRightAltIcon style={{color:"white", marginLeft:"-10px", marginTop:"30px" , position:"absolute"}}></ArrowRightAltIcon>
      <p> Hello John Bayer,<br></br>
      You have 8 New Applications Today!</p>
      <img src="./images/Capture.PNG" style={{marginLeft:"90px" , height:"100px", position:"absolute"}}></img>
      <div className="col3part2">
        <div className="p1">
          <h4>New Applicants</h4>
          <ChevronRightIcon style={{color:"white" , marginTop:"13px" , marginLeft:"290px", position:"absolute"}}></ChevronRightIcon>
        </div>
      </div>

    </div>

    </div>
  );
}

export default Middle;