import React from "react";
import LandingHeader from "../LandingHeader";
import Rectangle1 from "../Rectangle1";
import Button1 from "../Button1";
import "./LandingPage.css";

function LandingPage(props) {
  const {
    working, people, group,vector,learning,certificate, paper, hat, vector5, vector6,vector7,line,copyright,
    landingHeaderProps,button1Props, button12Props, rectangle1Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="landing-page screen">
        <div className="header-landing-pg-1">
          <LandingHeader
            overlapGroup={landingHeaderProps.overlapGroup}
          />
          <div className="landing-pg-1">
            <div className="overlap-group6">
              <Rectangle1 src={rectangle1Props.src} />
              <div className="text-7">Learn Today,<br />Lead Tomorrow</div>
              <div className="text-8">Develop skills with our courses and certificates from the best universities with in your reach.</div>
              <img className="image-1-1" src={working} />
              <Button1>{button1Props.children}</Button1>
            </div>
          </div>
        </div>
        <a href="#text-5">
          <div className="arrow-circle-down-solid-1">
            <img
              className="vector-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/60a7577bc1327c975bf6fa8a/releases/60a75bba9a8d3176266d3ba2/img/vector-3@2x.svg"
            />
          </div>
        </a>
        <div className="overlap-group">
          <div className="langing-pg-2">
            <div className="overlap-group2-1">
              <div className="enhance">
                <div className="overlap-group3">
                  <div className="text-3 valign-text-middle roboto-medium-black-30px">Enhance Your current skills</div>
                  <div className="rectangle-14"></div>
                </div>
              </div>
              <div className="career">
                <div className="overlap-group-1">
                  <div className="career-readiness valign-text-middle roboto-medium-black-30px">Career Readiness</div>
                  <div className="rectangle-1"></div>
                </div>
              </div>
              <div className="monitize">
                <div className="overlap-group-1">
                  <div className="text-4 valign-text-middle roboto-medium-black-30px">Monitize your skills</div>
                  <div className="rectangle-1"></div>
                </div>
              </div>
              <div className="rectangle-10"></div>
              <div className="text-5 valign-text-middle" id="text-5">
              We colloborate with Leading Universities + companies
              </div>
              <div className="rectangle-11">
              <div className="text-6 valign-text-middle">Land your dream jobs with us</div>
              </div>
              
            </div>
          </div>
          <img className="x6663-1" src={people} />
        </div>
        <div className="accessibility valign-text-middle roboto-medium-black-40px">ACCESSIBILITY</div>
        <div className="overlap-group1">
          <div className="text-9 valign-text-middle roboto-normal-black-30px">Discover resilient and pocket friendly option with us.</div>
          <img className="group-business-gn40876-1442-1" src={group} />
          <div className="certification valign-text-middle roboto-medium-black-40px">CERTIFICATION</div>
          <div className="courses valign-text-middle roboto-medium-black-40px">COURSES</div>
          <div className="specialisation valign-text-middle roboto-medium-black-40px">SPECIALISATION</div>
          <img className="vector" src={vector} />
          <img className="vector-3" src={vector} />
          <img className="vector-4" src={vector} />
        </div>
        <div className="landing-pg-3">
          <div className="overlap-group2">
            <div className="text-1 valign-text-middle roboto-normal-black-30px">Gain mastery over your skills with live industry projects, internship and quizzes. Get feed back from the community of learners, tutors + trainers.</div>
            <img className="learningmanagem-i695biipuz504-1" src={learning} />
          </div>
          <div className="text-2 valign-text-middle roboto-medium-black-40px">EXPERIENTIAL LEARNING</div>
          <Button1 className="button">{button12Props.children}</Button1>
        </div>
        <div className="landing-pg-4">
          <div className="text-10 valign-text-middle">Take a leap of faith towards your professional and personal goals with us at Sklztect, the skills builders.</div>
          <div className="flex-row">
            <img className="image-c-1" src={certificate} />
            <img className="unnamed-1" src={paper} />
            <img className="x819px-universityhaticon-1" src={hat} />
          </div>
          <div className="text-11 valign-text-middle">BOOST YOUR CAREER WITH OUR COURSES</div>
        </div>
        <div className="footer">
          <div className="overlap-group7">
            <div className="rectangle-15"></div>
            <div className="instagram-brands-1">
              <img className="vector-1" src={vector5} />
            </div>
            <div className="facebook-square-brands-1">
              <img className="vector-1" src={vector6} />
            </div>
            <div className="linkedin-brands-1">
              <img className="vector-1" src={vector7} />
            </div>
            <div className="footer0">
            <div className="footer1">
              <div className="heading-f1">SklzTect</div>
              <div className = "f1">
               <ul>
                <li> <a href="Instagram">Instagram</a> </li>
                <li> <a href="Facebook">Facebook</a> </li>
                <li> <a href="LinkedIn">LinkedIn</a> </li>
                <li className="manageCookies"> <a href="Manage Cookies">Manage Cookies</a></li>
               </ul>
              </div>
            </div>
            
            <div className="footer2">
              <div className="heading-f2">Resources</div>
              <div className= "f2">
               <ul>
                <li> <a href="Blogs">Blogs </a> </li>
                <li> <a href="Videos">Videos </a> </li>
                <li> <a href="Benifites">Benifites</a> </li>
               </ul>
              </div>
            </div>
          
            <div className="footer3">
              <div className="heading-f3">Quick Links</div>
              <div className = "f3">
              <ul>
               <li>  <a href="About Us">About Us</a> </li>
               <li>  <a href="Contact">Contact</a> </li>
               <li>  <a href="Success Stories">Success Stories</a> </li>
               <li>  <a href="SklzTect’s  APP">SklzTect’s  APP</a> </li>
               <li>  <a href="Privacy Policy">Privacy Policy</a> </li>
               <li>  <a href="Terms & Condition">Terms & Condition</a> </li>
               <li>  <a href="Career at SklzTect">Career at SklzTect</a> </li>
              </ul>
              </div>
            </div>

            <div className="footer4">
             <div className="heading-f4">Courses</div>
             <div className = "f4">
              <ul>
               <li> <a href="Engineering">Engineering</a> </li>
               <li> <a href="Media">Media</a>  </li>
               <li> <a href="Administration">Administration</a> </li>
               <li> <a href="Electronics">Electronics</a> </li>
               <li> <a href="Technology Sale">Technology Sale</a> </li>
               <li> <a href="Publishing and Art">Publishing and Art</a> </li>
              </ul>
             </div>
            </div>
            </div>

            <img className="line-10" src={line} />
            <div className="copyright-regular-1" style={{ backgroundImage: `url(${copyright})` }}></div>
            <div className="text-12 valign-text-middle">SklzTect, All rights are reserved</div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default LandingPage;
