import { useContext } from "react";
import StudentContext from './studentContext'
import {Link} from 'react-router-dom'

export default function StudentList(){
    const {search, filteredStudents, removeStudent, students} = useContext(StudentContext)
    
    
    return(
        <div className="general-container">
            <div className="search">
                <input type="text" placeholder="Search" onInput={(e)=>search(e.target.value)}/>
            </div>
            <table className="list">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Registration number</td>
                        <td>Name</td>
                        <td>City</td>
                        <td>Postal code</td>
                        <td>Average</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents && filteredStudents.map(s => (
                        <tr key={s.id}>
                            <td>{s.id}</td>
                            <td>{s.regNum}</td>
                            <td>{s.name}</td>
                            <td>{s.city}</td>
                            <td>{s.postalCode}</td>
                            <td>{s.average}</td>
                            <td className="actions">
                                <button className="edit-btn"><Link to={`/edit-student/${s.id}`}>Edit</Link></button>
                                <button className="remove-btn" onClick={()=>removeStudent(s.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="stats">
                <p>Highest average: <span>{Math.max(...students.map(s=>s.average))}</span></p>
                <p>Lowest average: <span>{Math.min(...students.map(s=>s.average))}</span></p>
                <p>Class average: <span>{(students.reduce((acc, s)=>acc+s.average, 0)/students.length).toFixed(2)}</span></p>


            </div>
        </div>
    )
}