import { useState } from "react";

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    })

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <div>
                <input name="name" onChange={onChange} placeholder={"이름"} value={input.name}/> 
            </div>

            <div>
                <input name="birth" type="date" onChange={onChange} value={input.birth}/>
            </div>

            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option></option>
                    <option>한국</option>
                    <option>미국</option>
                    <option>영국</option>
                </select>
            </div>

            <div>
                <textarea name="bio" onChange={onChange} value={input.bio}/>
            </div>
        </div>
    )
}

export default Register;