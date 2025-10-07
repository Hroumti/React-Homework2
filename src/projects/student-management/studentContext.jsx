import {useState, createContext, useEffect} from 'react'

const StudentContext = createContext()

export function StudentProvider({children}){
    const [students, setStudents] = useState([])
    const [currId, setCurrId] = useState(0)
    const [filteredStudents, setFilteredStudents] = useState([])

    useEffect(()=>{
        fetch('/students.json')
        .then(res=> res.json())
        .then(data=>{
            const initialStudents = Array.isArray(data) ? data : []
            setStudents(initialStudents)
            setFilteredStudents(initialStudents)
            setCurrId(initialStudents.length + 1)
        })
        .catch(err=> console.error('Data fetch error:', err))
    }, [])

    function addStudent(student){
        setStudents([...students, {...student, id:currId}])
        setCurrId(currId+1)
        setFilteredStudents(students)
        alert(`Student info have been added successfully`)
    }

    function updateStudent(student){
        setStudents(students.map(s=>s.id===student.id?student:s))
        setFilteredStudents(students)
        alert(`Student info have been updated successfully`)

    }

    function removeStudent(id){
        setStudents(students.filter(s=>s.id!==id))
        setFilteredStudents(students)
        alert(`Student info have been removed successfully`)

    }

    function search(searchInput){
        const term = (searchInput||'').toString().toLowerCase()
        setFilteredStudents(students.filter(s=> (s.name||'').toLowerCase().includes(term)))
    }

    return (
        <StudentContext.Provider value={{students, filteredStudents, addStudent, updateStudent, removeStudent, search}}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentContext