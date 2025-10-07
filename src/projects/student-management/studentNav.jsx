import {Link} from 'react-router-dom'

export default function StudentNav(){

    return(
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/student-list'}>Student list</Link>
            <Link to={'/add-student'}>Add Students</Link>
            <Link to={'/about'}>About</Link>
        </nav>
    )
}