package domain

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

type User struct {
	ID           primitive.ObjectID `json:"id" bson:"_id,omitempty"`
	Name         string             `json:"name" bson:"name"`
	Email        string             `json:"email" bson:"email"`
	Password     string             `json:"password" bson:"password"`
	RegisteredAt time.Time          `json:"registeredAt" bson:"registeredAt"`
	LastVisitAt  time.Time          `json:"lastVisitAt" bson:"lastVisitAt"`
	Verification Verification       `json:"verification" bson:"verification"`
	Admins       []Admin            `json:"admins" bson:"admins,omitempty"`
	Blocked      bool               `json:"blocked" bson:"blocked"`
	Session      Session            `json:"session" bson:"session,omitempty"`
	//Hospital     []primitive.ObjectID `json:"hospital" bson:"hospital"` //TODO: насчёт этого не уверен
}

type Verification struct {
	Code     string `json:"code" bson:"code"`
	Verified bool   `json:"verified" bson:"verified"`
}

// Admin TODO: если будем делать так чтоб у каждой больницы был свой админ то я вынему это в другое место
// и надо заменить UserID по которому будет осущ поиск, на HospitalID и удалить у User коллекцию Admins
type Admin struct {
	ID       primitive.ObjectID `json:"id" bson:"_id"`
	Name     string             `json:"name" bson:"name"`
	Email    string             `json:"email" bson:"email"`
	Password string             `json:"password" bson:"password"`
	UserID   primitive.ObjectID
}

type UpdateUserInput struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Verified *bool  `json:"verified"`
	Blocked  *bool  `json:"blocked"`
}

type CreateUserInput struct {
	Name     string `json:"name" binding:"required,min=2"`
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required,min=6"`
}
