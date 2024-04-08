import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
function Login() {
        const { loginWithRedirect, isAuthenticated } = useAuth0();
        return (
                        !isAuthenticated && (
                                <button className='w-[70%] h-[50px] mt-5' onClick={() => loginWithRedirect()}>Log in</button>
                        )
        )
}

export default Login