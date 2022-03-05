import UIStateWrapper from "./context/ui-context/ui-state";
import AuthContextWrapper from "./context/auth_context/auth-state";


//import React from 'react'

function ContextCombiner({ children }) {
    return (
        <>
            <UIStateWrapper>
                <AuthContextWrapper>
                    {children}
                </AuthContextWrapper>
            </UIStateWrapper>
        </>
    )
}

export default ContextCombiner