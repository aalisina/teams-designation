import React from 'react'
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';
import Teams from './Teams';

function Employees({employees,
                    selectedTeam,
                    handleTeamSelectionChange,
                    handleEmployeeCardClick}) {


  return (
    <main>

      <main className='container'>
        <div className='row justify-content-center mt-3 mb-3'>
          <div className="col-6">
            <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange} />
          </div>
          <div className='col-8'>
            <div className='card-collection'>
              {employees.map((employee) => {
                return (
                  <div id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{ cursor: "pointer" }} key={employee.id} onClick={handleEmployeeCardClick} >
                    <img src={employee.gender === 'male' ? maleProfile : femaleProfile} alt={employee.fullName} className='card-img-top' />
                    <div className='card-body'>
                      <h5 className='card-title'>
                        Fullname: {employee.fullName}
                      </h5>
                      <p className='card-text'><b>Designation: </b>{employee.designation}</p>
                    </div>
                  </div>)
              })}

            </div>
          </div>
        </div>
      </main>


    </main>
  )
}

export default Employees
