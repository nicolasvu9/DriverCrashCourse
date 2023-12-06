import React from "react";
import DashboardCard from "./DashboardCard";
import "./Dashboard.css";
import Footer from './Footer';
import TopNav from "./DashboardTopnav";


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
                <a href="./practiceproblems" className="dashboard-link">
                    <DashboardCard
                    title="Practice Problems"
                    value="Practice for your driving license using our 40+ expertly curated practice problems. Each question is designed to give you the similar experience."></DashboardCard>
                </a>
            </div>

            <div> 
                <a href="./mockexams" className="dashboard-link">
                    <DashboardCard
                     title="Mock Exams"
                     value="With over four exams each having 20 questions. Test your abilities to see if you finish in 30 minutes. At the end your score will be shown."
                    
                    />
                </a>
            </div>

            <div> 
                <a href="./flashcards" className="dashboard-link">
                    <DashboardCard
                    title="Flashcards"
                    value="Learn more and have everything memorized using flashcards! With over 50 flashcards, it is garaunteed you will learn."
                    />
                </a>
            </div>
          
        </div>

        <div className="dashboard-grid">
        <div> 
            <a href="./create" className="dashboard-link">
            <DashboardCard
            title="Create Questions"
            value="Do you have a creative mind? Create questions for other users to practice."
          />
            </a>
        </div>

        <div> 
            <a href="./progress" className="dashboard-link">
            <DashboardCard
            title="Progress"
            value="Check your Progress by heading to the progress page. You can view your scores and number of questions done."
          />
            </a>
        </div>

        <div> 
            <a href="./resources" className="dashboard-link">
            <DashboardCard
            title="resources"
            value="Watch videos on how to better your driving skills with several handpicked videos from across the Web."
          />
            </a>
        </div>
        
    
 
        </div>
      </div>
    );
  };
  
  export default DashboardPage;
  
