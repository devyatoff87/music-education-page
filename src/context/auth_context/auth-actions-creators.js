import { AUTH_ACTIONS } from "./auth-actions";

export const authSuccess = (id) => {
    return {
        type: AUTH_ACTIONS.AUTH_SUCCESS,
        payload: {
            id: id,
            status: ok
        }
    }
}