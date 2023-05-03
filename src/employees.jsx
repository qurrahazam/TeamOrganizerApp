import femaleProfile from './img/femaleProfile.jpg';
import maleProfile from './img/maleProfile.jpg';
import Teams from './Teams';

const Employees = ({ employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange }) => {

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange}/>
        
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className= 'card-collection'>
            {employees.map((employee) => (
              <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam? 'card m-2 standout' : 'card m-2')} style={{cursor : 'pointer'}} onClick = {handleEmployeeCardClick}>
                <img
                  src={employee.gender === 'female' ? femaleProfile : maleProfile}
                  className="card-img-top"
                  alt={employee.fullName}
                />
                <div className="card-body">
                  <h5 className="card-title">Full Name: {employee.fullName}</h5>
                  <p className="card-text">
                    <b>Designation:</b> {employee.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
 );
}

export default Employees;
