import {useState, createContext, useEffect} from 'react'

const StudentContext = createContext()

export function StudentProvider({children}){
    const [students, setStudents] = useState([])
    const [currId, setCurrId] = useState(0)
    const [filteredStudents, setFilteredStudents] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

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
        const nextStudents = [...students, {...student, id: currId}]
        setStudents(nextStudents)
        setCurrId(currId + 1)
        alert(`Student info have been added successfully`)
    }

    function updateStudent(student){
        const nextStudents = students.map(s=> s.id === student.id ? student : s)
        setStudents(nextStudents)
        alert(`Student info have been updated successfully`)
    }

    function removeStudent(id){
        const nextStudents = students.filter(s=> s.id !== id)
        setStudents(nextStudents)
        alert(`Student info have been removed successfully`)
    }

    function search(searchInput){
        const term = (searchInput || '').toString().toLowerCase()
        setSearchTerm(term)
    }

    useEffect(()=>{
        const term = searchTerm
        const nextFiltered = students.filter(s => (s.name || '').toLowerCase().includes(term))
        setFilteredStudents(nextFiltered)
    }, [students, searchTerm])

    return (
        <StudentContext.Provider value={{students, filteredStudents, addStudent, updateStudent, removeStudent, search}}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentContext