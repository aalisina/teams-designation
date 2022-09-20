import { useState } from 'react'

function GroupedTeamMembers({employees, selectedTeam, setSelectedTeam}) {

    const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers());
    
    return (
        <main>
            <div className="container">
                <div className="row justify-content-center mt-3 mb-4">
                    <div className="col-8">
                        <h1 className="text-center">Grouped Team Members</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default GroupedTeamMembers
