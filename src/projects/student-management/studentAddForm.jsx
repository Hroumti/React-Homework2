import {useContext, useRef} from 'react'
import StudentContext from './studentContext'

export default function StudentAddForm(){
    const {addStudent} = useContext(StudentContext)
    const regNum = useRef(null)
    const name = useRef(null)
    const city = useRef(null)
    const postalCode = useRef(null)
    const average = useRef(null)

    function handleSubmit(e){
        e.preventDefault()
        addStudent({
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