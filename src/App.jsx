import logo from './logo.svg';
import './App.css';
import '../src/style/main.scss';
import 'remixicon/fonts/remixicon.css' ;
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import BasicData from './Pages/BasicData';
import TimeTable from './Pages/TimeTable';
import TuitionFees from './Pages/TuitionFees';
import AbsenceReports from './Pages/AbsenceReports';
import CoursesGrades from './Pages/CoursesGrades';
import StudentProgress from './Pages/StudentProgress';
import Portfolio from './Pages/Portfolio';
import ExamTable from './Pages/ExamTable';
import Sidebar from './Componant/Sidebar';
import Student from './Componant/Student';
import Com from './Componant/Com';
import Bar from './Componant/Bar';
import Barr from './Componant/Barr';
import Dwon from './Componant/Dwon';
import Table from './Componant/Table';
import Up from './Componant/Up';





function App() {
  return (
      
   <>

    <div>
      <Up/>
    </div>  

    <div className='ta'>
      <Table/>
    </div>


   </>
  
  );
 
}

export default App;
