import { BrowserRouter, Routes, Route } from "react-router-dom";

import StudentAddForm from "./studentAddForm";
import StudentEditForm from "./studentEditForm";
import StudentList from "./studentList";
import StudentNav from "./studentNav";
import { StudentProvider } from './studentContext'
import './style.css'

export default function Main(){
    return(
        <BrowserRouter>
            <StudentProvider>
                <StudentNav/>
                <div className="root-container">
                    <div className="content-wrapper">
                    <Routes>
                        <Route path='/' element={<h1>Welcome to our website</h1>}/>
                        <Route path='/add-student' element={<StudentAddForm/>}/>
                        <Route path='/edit-student/:id' element={<StudentEditForm/>}/>
                        <Route path='/student-list' element={<StudentList/>}/>
                        <Route path='/about' element={<h1>Student management website using React</h1>}/>
                        <Route path='*' element={<h1>Error 404, not found!!!</h1>}/>
                    </Routes>
                </div>
                </div>
            </StudentProvider>
        </BrowserRouter>
    )
}