import AuthenticationActionTypes from './authentication.types'

const INITIAL_STATE = {
    signin : false,
    token : '',
    otpLoading : false,
    otpSuccessMsg : null,
    otpError : null,
    otpsubmitting : false,
    profile : undefined,
    newUserFlag : undefined,
    otpsubmittingError : null,
    profileSubmitting : false,
    profileSubmitSuccess : undefined,
    profileError : null ,
    requestingProfile : false,
    requestingProfileError : null
}

const authenticationReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case AuthenticationActionTypes.SIGNIN_TOGGLE:
            return {
                ...state,
                signin : !state.signin,
                otpLoading : false,
                otpSuccessMsg : null,
                otpError : null,
                otpsubmitting : false,
                otpsubmittingError : null
            }
        case AuthenticationActionTypes.CLEAR_PROFILENTOKEN:
            return {
                ...state,
                token : '',
                profile : undefined,
                newUserFlag : undefined,
            }
        case AuthenticationActionTypes.REQUEST_OTP_START:
            return {
                ...state,
                otpLoading : true,
                otpError : null
            }
        case AuthenticationActionTypes.REQUEST_OTP_SUCCESS:
            return {
                ...state,
                otpLoading : false,
                otpSuccessMsg : action.payload
            }
        case AuthenticationActionTypes.REQUEST_OTP_ERROR:
            return {
                ...state,
                otpLoading : false,
                otpError : action.payload
            }
        case AuthenticationActionTypes.OTP_SUBMIT_START:
            return {
                ...state,
                otpsubmitting : true
            }
        case AuthenticationActionTypes.OTP_SUBMIT_SUCCESS:
            return {
                ...state,
                otpsubmitting : false,
                token : action.payload.token,
                profile : action.payload.user,
                newUserFlag : action.payload.new_user
            }
        case AuthenticationActionTypes.OTP_SUBMIT_ERROR:
            return {
                ...state,
                otpsubmitting : false,
                otpsubmittingError : action.payload
            }
        case AuthenticationActionTypes.PROFILE_MODIFY_START:
            return {
                ...state,
                profileSubmitting : true
            }
        case AuthenticationActionTypes.PROFILE_MODIFY_SUCCESS:
            return {
                ...state,
                profileSubmitting : false,
                profile : action.payload,
                profileSubmitSuccess : true
            }
        case AuthenticationActionTypes.PROFILE_MODIFY_ERROR:
            return {
                ...state,
                profileSubmitting : false,
                profileError : action.payload,
                profileSubmitSuccess : false
            }
        case AuthenticationActionTypes.PROFILE_MODIFY_CLEAR:
            return {
                ...state,
                profileSubmitSuccess : undefined
            }
        case AuthenticationActionTypes.REQUEST_PROFILE_START:
            return {
                ...state,
                requestingProfile : true
            }
        case AuthenticationActionTypes.REQUEST_PROFILE_SUCCESS:
            return {
                ...state,
                requestingProfile : false,
                profile : action.payload[0]
            }
        case AuthenticationActionTypes.REQUEST_PROFILE_ERROR:
            return {
                ...state,
                requestingProfile : false,
                requestingProfileError : action.payload
            }
        default:
            return state
    }
}

export default authenticationReducer