package email

import (
	"bytes"
	"errors"
	"github.com/Ikiso/Medicine/pkg/logger"
	"html/template"
)

type SendEmailInput struct {
	To      string
	Subject string
	Body    string
}

type Sender interface {
	Send(input SendEmailInput) error
}

func (s *SendEmailInput) GenerateBodyFromHTML(templateFileName string, data interface{}) error {
	t, err := template.ParseFiles(templateFileName)
	if err != nil {
		logger.Errorf("failed to parse file %s%s", templateFileName, err.Error())

		return err
	}

	buf := new(bytes.Buffer)
	if err = t.Execute(buf, data); err != nil {
		return err
	}

	s.Body = buf.String()

	return nil
}

func (s *SendEmailInput) Validate() error {
	if s.To == "" {
		return errors.New("empty To")
	}

	if s.Subject == "" || s.Body == "" {
		return errors.New("empty subject/body")
	}

	if !IsEmailValid(s.To) {
		return errors.New("invalid emails")
	}

	return nil
}
