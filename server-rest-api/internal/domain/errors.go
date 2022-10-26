package domain

import "errors"

var (
	ErrUserNotFound            = errors.New("user, doesn't exist")
	ErrVerificationCodeInvalid = errors.New("verification code is invalid")
	ErrUserAlreadyExists       = errors.New("user with such email already exists")
	ErrSendPulseIsNotConnected = errors.New("sendpulse is not connected")
	ErrUserBlocked             = errors.New("user is blocked by the admin")
)
