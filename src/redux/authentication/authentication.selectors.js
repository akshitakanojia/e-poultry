import {createSelector} from 'reselect'

const selectAuthentication = state => state.authentication

export const selectAuthenticationSignin = createSelector (
    [selectAuthentication],
    authentication => authentication.signin
)

export const selectAuthenticationToken = createSelector (
    [selectAuthentication],
    authentication => authentication.token
)

export const selectOtpLoading = createSelector (
    [selectAuthentication],
    authentication => authentication.otpLoading
)

export const selectOtpSuccess = createSelector (
    [selectAuthentication],
    authentication => authentication.otpSuccessMsg
)

export const selectOtpError = createSelector (
    [selectAuthentication],
    authentication => authentication.otpError
)

export const selectProfile = createSelector (
    [selectAuthentication],
    authentication => authentication.profile
)

export const selectModifyProfile = createSelector (
    [selectAuthentication],
    authentication => ({
        loading : authentication.profileSubmitting,
        error : authentication.requestingProfileError,
        success : authentication.profileSubmitSuccess
    })
)

export const selectRequestProfile = createSelector (
    [selectAuthentication],
    authentication => ({
        loading : authentication.requestingProfile,
        error : authentication.requestingProfileError 
    })
)

export const selectSubmitOtp = createSelector (
    [selectAuthentication],
    authentication => ({
        loading : authentication.otpsubmitting,
        error : authentication.otpsubmittingError,
        profile : authentication.profile
    })
)