package app

import (
	"github.com/Ikiso/Medicine/pkg/logger"
	"go.mongodb.org/mongo-driver/mongo"
)

func Run(configPath string) {
	cfg, err := config.Init(configPath)
	if err != nil {
		logger.Error(err)
	}

	//TODO: Dependencies
	mongoClient, err := mongo.NewClient(cfg.Mongo.URI)
}
