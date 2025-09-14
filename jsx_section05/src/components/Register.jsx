import { useState } from "react";

const Register = () => {
    const [name, setName] = useState()

    return (
        <div>
            <div>
                <input placeholder={"이름"} /> 
            </div>

            <div>
                <input />
            </div>
            
        </div>
    )
}

export default Register;