import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
function Profile() {
        const { user, isAuthenticated } = useAuth0();
        return (
                isAuthenticated && (
                        <article className='w-full flex flex-wrap justify-center *:my-3'>
                                <h2 className='w-full text-[24px]'>Hello {user?.name}</h2>
                                {user?.picture && <img className='w-[200px] h-[200px] rounded-[50%]' src={user.picture} alt={user?.name} />}
                                <ul className='w-full'>
                                        {Object.keys(user).map((objkey) => {
                                                <li>{objkey} : {user[objkey] }</li>
                                        })}
                                </ul>
                        </article>
                )
        )
}

export default Profile