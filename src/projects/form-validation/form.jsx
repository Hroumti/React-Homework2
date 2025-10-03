import {useState, useRef} from 'react'
import Render from './render'
export default function Form(){
    const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo (Kinshasa)",
  "Costa Rica",
  "Côte d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia (Czech Republic)",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
];

    const formRef = useRef(null)
    const name = useRef(null)
    const email = useRef(null)
    const pwd = useRef(null)
    const gender = useRef('')
    const [interests, setInterests] = useState([])
    const country = useRef(null)
    const present = useRef(null)

    const [isValid, setIsValid] = useState(true)

    const [formData, setFormData] = useState({name:'', email:'', pwd:'', gender:'', interests:[], country:'', present:''})
    const [formErr, setFormErr] = useState({name:'', email:'', pwd:'', gender:'', interests:'', country:'', present:''})

    const handleInterestsChange = (e)=>{
        const {value, checked} = e.target
        if (checked){
            setInterests([...interests, value])
        } else{
            setInterests(interests.filter(i=>i!==value))
        }
    }


    function handleSubmit(e){
        e.preventDefault()
        setIsValid(true)
        const formEl = formRef.current || e.currentTarget
        const values = {
            name: (name.current?.value || '').trim(),
            email: (email.current?.value || '').trim(),
            pwd: (pwd.current?.value || '').trim(),
            gender: formEl?.gender?.value || '',
            interests: interests,
            country: country.current?.value || '',
            present: (present.current?.value || '').trim()
        }

        setFormErr( {
            name: /^[A-Z]{1}[a-z]{2,}\s[A-Z]{1}[a-z]{2,}$/.test(values.name) ? '' : 'Invalid value',
            email: /^[A-Za-z0-9]{2,}@[A-Za-z]{4,}\.[a-z]{2,3}$/.test(values.email) ? '' : 'Invalid value',
            pwd: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(values.pwd) ? '' : 'Invalid value',
            gender: values.gender !== '' ? '' : 'Invalid value',
            interests: (Array.isArray(values.interests) && values.interests.length > 0) ? '' : 'Invalid value',
            country: values.country !== '' ? '' : 'Invalid value',
            present: values.present !== '' ? '' : 'Invalid value'
        })
        const validNow = Object.values(formErr).every(v => v === '')
        setFormErr(formErr)
        setIsValid(validNow)
        if(isValid){
            setFormData(values)
        }
    }
    
    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name='name' 
                ref={name} 
                
                placeholder='Full name'
            />
            <span className='error-span' id='name-err'>{formErr.name}</span>
            <input

                type="email"
                name="email"
                ref={email}
                placeholder="Email"
            />
            <span className='error-span' id='email-err'>{formErr.email}</span>

            <input
                type="password"
                name="pwd"
                ref={pwd}
                placeholder="Password"
            />
            <span className='error-span' id='pwd-err'>{formErr.pwd}</span>

            <div className='gender-container'>
                <h3>Gender</h3>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                    />
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                    />
                    Female
                </label>
            </div>
            <span className='error-span' id='gender-err'>{formErr.gender}</span>

            <div className='interests-container'>
                <h3>Interests:</h3>
                <label>
                    <input
                        type="checkbox"
                        name="interests"
                        value="sports"
                        checked={interests.includes("sports")}
                        onChange={handleInterestsChange}
                    />
                    Sports
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="interests"
                        value="music"
                        checked={interests.includes("music")}
                        onChange={handleInterestsChange}
                    />
                    Music
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="interests"
                        value="reading"
                        checked={interests.includes("reading")}
                        onChange={handleInterestsChange}
                    />
                    Reading
                </label>
            </div>
            <span className='error-span' id='interests-err'>{formErr.interests}</span>

            <select
                name="country"
                ref={country}
                defaultValue=""
            >
                <option value="" disabled>Select Country</option>
                {countries&&(countries.map((c, index)=>(
                    <option value={c} key={index}>{c}</option>
                )))}
            </select>
            <span className='error-span' id='country-err'>{formErr.country}</span>

            <textarea
                name="present"
                ref={present}
                placeholder="Presenation"
            />
            <span className='error-span' id='present-err'>{formErr.present}</span>
            <input type="submit" value="Submit"/>
        </form>
        <div className="personal-info">
            <h1>Personal information</h1>
                <Render formData={formData}/>
        </div>
                
        </div>
    )





}