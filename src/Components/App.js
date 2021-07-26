import React from 'react';
import './App.css';
import SiteMenu from './SiteMenu';
import Personal from './Resume/Intro';
import PersonalProfile from './Resume/PersonalProfile';
import Education from './Resume/Education';
import Experience from './Resume/WorkExperience';
import Certification from './Resume/Certification';
import SeminarsTrainingsAttended from './Resume/Seminars';
import TechnicalSummary from './Resume/TechnicalSummary';

function App() {
    return (
        <>
        <SiteMenu></SiteMenu>

        <div className="container mt-5">
            <Personal
                imageName="Centennial-HarbinRamo_2.jpg"
                name="Harbin Benedict Ramo"
                title="Software Engineer"
                address="Unit 206, 1 Rosemount Drive, Toronto, ON M1K 2W5"
                linkedIn="https://www.linkedin.com/in/harbin-ramo-32a347103"
                gitHub="https://github.com/harbs0626">
            </Personal>
            <br></br>
            <br></br>
            <PersonalProfile 
                summary="I am a dedicated Software Engineering Technician with proven skills and abilities in this field. Through this program, 
                I was able to consistently engage in welcoming new inputs or new ideas, and able to adapt accordingly with emerging 
                technologies and able collaborate effectively and efficiently in a diverse team. My goal is for me to take part in any 
                team and able share current my knowledge and skillset, and to be an integral asset to the organization.">
            </PersonalProfile>
            <br></br>
            <Education
                date1="December 2018 - April 2020"
                diploma1="Ontario College Diploma"
                school1="Centennial College"
                program1="Software Engineering Technician"
                date2="2004 - 2008"
                diploma2="Bachelor of Science in Business Administration"
                school2="De La Salle - College of Saint Benilde"
                program2="Major in Computer Application"
                date3="2000 - 2004"
                diploma3="Highschool Diploma"
                school3="Immaculate Heart of Mary College"
                program3="Completed Secondary Education">
            </Education>
            <br></br>
            <Experience
                expDate0="November 2020"
                expPosition0="Software Engineer"
                expCompanyName0="DeskPal.com"
                // expDate1="April 2020"
                // expPosition1="Part-Time: Dietary Aide #9 (Grocer)"
                // expCompanyName1="Hellenic Home for the Aged"
                // expDate2="March 2019 - March 2020"
                // expPosition2="Part-Time: Housekeeping"
                // expCompanyName2="Hellenic Home for the Aged"
                expDate3="January 2012 - November 2018"
                expPosition3="Full-Time: Junior Assistant Manager/Analyst Programmer"
                expCompanyName3="Rizal Commercial Banking Corporation"
                expDate4="July 2008 - December 2011"
                expPosition4="Full-Time: First Officer/Applications Programmer"
                expCompanyName4="Rizal Commercial Banking Corporation">
            </Experience>
            <br></br>
            <Certification
                location1="Learning React.js - LinkedIn"
                issueDate1="December 2020"
                exprDate1="No Expiration Date"
                location2="MERN Essential Training - LinkedIn"
                issueDate2="December 2020"
                exprDate2="No Expiration Date"
                location3="Express Essential Training - LinkedIn"
                issueDate3="December 2020"
                exprDate3="No Expiration Date"
                location4="Machine Learning No-Code Approach: Using ML Studio"
                issueDate4="September 2020"
                exprDate4="No Expiration Date"
                location5="The Complete ASP.NET MVC 5 Course - Udemy"
                issueDate5="September 2020"
                exprDate5="No Expiration Date"
                location6="Advanced Food Safety Certification Program - SafeCheck Learning and Certification"
                issueDate6="September 2020"
                exprDate6="September 2025">
            </Certification>
            <br></br>
            <SeminarsTrainingsAttended
                date1="2014"
                title1="Performance Tuning and Optimization - Microsoft SQL Server 2014"
                companyName1="Microsoft Philippines"
                description1="A training held by Microsoft Philippines. The company had 
                prepared various activities such as seminars and short hands-on trainings 
                on how to fine tune SQL databases on a database server."
                date2="2013"
                title2="Lotus Notes - XPages"
                companyName2="Now Corporation"
                description2="A training help by Now Corporation Philippines. The company 
                had prepared various activities such as hands-on trainings on how to use 
                Lotus Notes XPages."
                date3="2012"
                title3="Lotus Notes - Composite Applications"
                companyName3="IBM Philippines"
                description3="A seminar held by IBM Philippines. The company had prepared 
                a various activity such as hands-on trainings on how to use Lotus Notes Composite 
                Applications."
                date4="2008"
                title4="ELITE (Entry Level For IT Education)"
                companyName4="Rizal Commercial Banking Corporation"
                description4="A training held by RCBC Commercial. The company had prepared a various 
                activity for office entry level.">
            </SeminarsTrainingsAttended>
            <br></br>
            <TechnicalSummary></TechnicalSummary>
            <br></br>
            <br></br>
        </div>
        </>
    )
}

export default App;
