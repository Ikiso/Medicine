package domain

import "go.mongodb.org/mongo-driver/bson/primitive"

type Hospital struct {
	ID      primitive.ObjectID `json:"id" bson:"_id,omitempty"`
	Name    string             `json:"name" bson:"name"`
	Type    string             `json:"type" bson:"type,omitempty"`
	Reports Reports            `json:"reports" bson:"reports,omitempty"`
}

type Reports struct {
	Report []Report `json:"report" bson:"report,omitempty"`
}

type Report struct {
	ID               primitive.ObjectID `json:"id" bson:"_id,omitempty"`
	Year             string             `json:"year" bson:"year"`
	Diseases         Diseases           `json:"diseases" bson:"diseases,omitempty"`
	NumberOfPatients int                `json:"numberOfPatients" bson:"numberOfPatients,omitempty"`
}
