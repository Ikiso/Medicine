package domain

import "go.mongodb.org/mongo-driver/bson/primitive"

type Diseases struct {
	ID          primitive.ObjectID `json:"id" bson:"_id,omitempty"`
	Name        string             `json:"name" bson:"name"`
	Code        string             `json:"code" bson:"code"`
	Description string             `json:"description" bson:"description,omitempty"`
}
