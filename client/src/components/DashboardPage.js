import React from "react";
import DashboardCard from "./DashboardCard";
import "./Dashboard.css";
import Footer from './Footer';
import TopNav from "./TopNav";
import { Link } from "react-router-dom";


const DashboardPage = () => {
    return (
      <div className="dashboard">
        <TopNav />
        <br></br>
        <div class="usertitle">
          <b>Hi, Student!</b>
        </div>
        <div className="dashboard-grid">
            <div>
          {/* Use Link instead of 'a' because <a> doesn't work all the time*/}
                <Link to="/practice" className="dashboard-link">
                  <DashboardCard
                       title="Practice Problems"
                        value="Practice for your driving license using our 40+ expertly curated practice problems. Each question is designed to give you the similar experience."
                      />
                </Link>
            </div>

            <div> 
                <Link to = "/exam" className="dashboard-link">
                    <DashboardCard
                     title="Mock Exams"
                     value="With over four exams each having 20 questions. Test your abilities to see if you finish in 30 minutes. At the end your score will be shown."
                    
                    />
                </Link>
            </div>

            <div> 
                <Link to = "/flashcard" className="dashboard-link">
                    <DashboardCard
                    title="Flashcards"
                    value="Learn more and have everything memorized using flashcards! With over 50 flashcards, it is garaunteed you will learn."
                    />
                </Link>
            </div>
          
        </div>

        <div className="dashboard-grid">
        <div> 
            <Link to = "/suggestion" className="dashboard-link">
            <DashboardCard
            title="Create Questions"
            value="Do you have a creative mind? Create questions for other users to practice."
          />
            </Link>
        </div>

        <div> 
            <Link to = "/progress" className="dashboard-link">
            <DashboardCard
            title="Progress"
            value="Check your Progress by heading to the progress page. You can view your scores and number of questions done."
          />
            </Link>
        </div>

        <div> 
            <Link to = "/video" className="dashboard-link">
            <DashboardCard
            title="Resources"
            value="Watch videos on how to better your driving skills with several handpicked videos from across the Web."
          />
            </Link>
        </div>
        
    
 
        </div>
      </div>
    );
  };
  
  export default DashboardPage;
  
