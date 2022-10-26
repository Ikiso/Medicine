package hash

import (
	"crypto/sha1"
	"fmt"
)

// Password Hashes provides hashing logic to securely store passwords.
type PasswordHash interface {
	Hash(password string) (string, error)
}

// SHA1Harsher uses SHA1 to hash passwords with provided salt.
type SHA1Harsher struct {
	salt string
}

func NewSHA1harsher(salt string) *SHA1Harsher {
	return &SHA1Harsher{salt: salt}
}

func (h *SHA1Harsher) Hash(password string) (string, error) {
	hash := sha1.New()

	if _, err := hash.Write([]byte(password)); err != nil {
		return "", err
	}

	return fmt.Sprintf("%x", hash.Sum([]byte(h.salt))), nil
}
