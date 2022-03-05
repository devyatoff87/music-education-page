import React from 'react'
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../../../context/auth_context/auth-context';
import "./auth-icon.styles.scss";
import { ReactComponent as UserCion } from '../../../shared/img/user-avatar.svg';

function AuthStatusIcon() {
    const authContext = useContext(AuthContext);
    const { name, status } = authContext.authState
    console.log(authContext);
    return (
        <div className='auth-status'>
            {
                status ?
                    <div className='auth-icon'>
                        <UserCion />  <p>{name}</p>
                    </div>
                    :
                    <p>login</p>
            }
        </div>



    )
}

export default AuthStatusIcon