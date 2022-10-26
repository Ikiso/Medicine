package repository

import (
	"context"
	"github.com/Ikiso/Medicine/internal/domain"
)

type Users interface {
	Create(ctx context.Context, user domain.User)
}
