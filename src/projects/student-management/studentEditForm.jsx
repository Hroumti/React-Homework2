import {useContext, useRef, useEffect} from 'react'
import StudentContext from './studentContext'
import { useParams } from 'react-router-dom'

export default function StudentEditForm(){
    const {students, updateStudent} = useContext(StudentContext)
    const {id} = useParams()
    const numericId = Number(id)
    const student = students.find(s=>s.id===numericId) || {}

    const regNum = useRef(student.regNum)
    const name = useRef(student.name)
    const city = useRef(student.city)
    const postalCode = useRef(student.postalCode)
    const average = useRef(student.average)

    useEffect(()=>{
        if(regNum.current) regNum.current.value = student.regNum ?? ''
        if(name.current) name.current.value = student.name ?? ''
        if(city.current) city.current.value = student.city ?? ''
        if(postalCode.current) postalCode.current.value = student.postalCode ?? ''
        if(average.current) average.current.value = student.average ?? ''
    }, [])

    function handleSubmit(e){
        e.preventDefault()
        updateStudent({
            id: numericId,
            regNum: Number(regNum.current.value),
            name: name.current.value,
            city: city.current.value,
            postalCode: Number(postalCode.current.value),
            average: Number(average.current.value)
        })
    }


    return(
        <form onSubmit={handleSubmit}>
            <input type="number" ref={regNum} required min={1001} max={9999} step={1} placeholder='Registranion number'/>
            <input type="text" ref={name} required placeholder='Name'/>
            <input type="text" ref={city} required placeholder='City'/>
            <input type="number" ref={postalCode} required placeholder='Postal code' min={10000} max={90000} step={1}/>
            <input type="number" ref={average} required placeholder='Average' min={0} max={20} step={0.01}/>
            <input type="submit" value="Submit" />

        </form>
    )
}