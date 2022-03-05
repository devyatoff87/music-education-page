import { AUTH_ACTIONS } from "./auth-actions";

export const authReducer = (state, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.AUTH_SUCCESS:
            return {
                ...state,
                status: action.payload.status,
                id: action.payload.id,
                name: action.payload.name
            }
    }
}