import React from 'react'
import Teams from './Teams';
import TeamMembers from './TeamMembers';

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
              {employees.map(employee => <TeamMembers employee={employee} 
                                                      handleEmployeeCardClick={handleEmployeeCardClick} 
                                                      selectedTeam={selectedTeam}/>) }
            </div>
          </div>
        </div>
      </main>


    </main>
  )
}

export default Employees
