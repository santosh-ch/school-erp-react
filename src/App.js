import './App.css';
import { Home } from './components/home/home';
import { StudentDetailForm } from './components/student-detail-form/student-detail-form';

function App() {
  return (
    <div>
      <div>School-ERP</div>
      {/* <Home></Home> */}
      <StudentDetailForm></StudentDetailForm>
    </div>
  );
}

export default App;
