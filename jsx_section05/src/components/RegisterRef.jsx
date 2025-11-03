import { useState, useRef } from "react";

const RegisterRef = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    })

    // const refObj = useRef(0);
    // console.log(refObj.current);
    
    const countRef = useRef(0);
    const inputRef = useRef()

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = () => {
        if(input.name === "") {
            // 포커스
            inputRef.current.focus();
        }
    }

    return (
        <div>
            {/* <button onClick={() => {
                refObj.current++;
                console.log(refObj.current);
            }}>
                ref +1
            </button> */}
            <div>
                <input ref={inputRef} name="name" onChange={onChange} placeholder={"이름"} value={input.name}/> 
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

            <button onClick={onSubmit}>제출</button>
        </div>
    )
}

export default RegisterRef;