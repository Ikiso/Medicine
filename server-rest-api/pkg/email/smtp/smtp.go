package smtp

import (
	"github.com/Ikiso/Medicine/pkg/email"
	"github.com/go-gomail/gomail"
	"github.com/pkg/errors"
)

type Sender struct {
	from string
	pass string
	host string
	port int
}

func NewSender(from, pass, host string, port int) (*Sender, error) {
	if !email.IsEmailValid(from) {
		return nil, errors.New("invalid from email")
	}

	return &Sender{
		from: from,
		pass: pass,
		host: host,
		port: port,
	}, nil
}

func (s *Sender) Send(input email.SendEmailInput) error {
	if err := input.Validate(); err != nil {
		return err
	}
	msg := gomail.NewMessage()
	msg.SetHeader("from", s.from)
	msg.SetHeader("To", input.To)
	msg.SetHeader("Subject", input.Subject)
	msg.SetBody("text/html", input.Body)

	dialer := gomail.NewDialer(s.host, s.port, s.from, s.pass)
	if err := dialer.DialAndSend(msg); err != nil {
		return errors.Wrap(err, "failed to sent email via smtp")
	}
	return nil
}
