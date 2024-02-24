import React from 'react';
import calenderlines from "../Images/calendarlines.svg";
import books from "../Images/books.svg";
import star from "../Images/star.svg";
import stats from "../Images/stats.svg";
import tablelist from "../Images/tablelist.svg";
import creditcard from "../Images/creditcard.svg";
import circlethree from "../Images/circlethree.svg";
import ballotcheck from "../Images/ballotcheck.svg";

const Sidebar = () => {
  return( 
  <div className='sidebar'>

      <div className='logoContainer'>
        <h3 className='head'>SUV</h3>
        <p className='title'>Approved points system</p>
      </div> 

      <div className='burgerContainer'>
        <div className='burgerTigger'></div> 
        <div className='burgerMenu'></div>
      </div>   
   
      <div className='contactContainer'>
        <ul>
          <li>
            <img src={calenderlines} alt='calenderlines'/>
            <a href='/'>Basic Data</a>
          </li>
          <li>
            <img src={ballotcheck} alt='ballotcheck'/>
            <a href='/TimeTable'>Time Table</a>
          </li>
          <li>
            <img src={creditcard} alt='creditcard'/>
            <a href='/TuitionFees'>Tuition Fees</a>
          </li>
          <li>
            <img src={stats} alt='stats'/>
            <a href='/AbsenceReports'>Absence Reports</a>
          </li>
          <li>
            <img src={star} alt='star'/>
            <a href='/CoursesGrades'>Courses Grades</a>
          </li>
          <li>
            <img src={circlethree} alt='circlethree'/>
            <a href='/StudentProgress'>Student Progress</a>
          </li>
          <li>
            <img src={tablelist} alt='tablelist'/>
            <a href='/ExamTable'>Exam Table</a>
          </li>
          <li>
            <img src={books} alt='books'/>
            <a href='/Portfolio'>Portfolio</a>
          </li>
        </ul>

      </div>
  </div>
  

  );
}

export default Sidebar;
