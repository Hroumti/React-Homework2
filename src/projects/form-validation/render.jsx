

export default function Render({ formData }){
    if (!formData) return null
    const { name, email, pwd, gender, interests, country, present } = formData
    return(
        <div className="render-info">
            <div className="display">Name: {name}</div>
            <div className="display">Email: {email}</div>
            <div className="display">password: {pwd}</div>
            <div className="display">Gender: {gender}</div>
            <div className="display">Interests: {interests.join(', ')}</div>
            <div className="display">Country: {country}</div>
            <div className="display">Presentation: {present}</div>
        </div>
    )
}