package mock_email

import (
	"github.com/Ikiso/Medicine/pkg/email"
	"github.com/stretchr/testify/mock"
)

type EmailProvider struct {
	mock.Mock
}

func (m *EmailProvider) AddEmailToList(inp email.AddEmailInput) error {
	args := m.Called(inp)

	return args.Error(0)
}

type EmailSender struct {
	mock.Mock
}

func (m *EmailSender) Send(inp email.SendEmailInput) error {
	args := m.Called(inp)

	return args.Error(0)
}
