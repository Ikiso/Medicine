package email

type AddEmailInput struct {
	Email     string
	ListID    string
	Variables map[string]string
}

type Provide interface {
	AddEmailInput(AddEmailInput) error
}
