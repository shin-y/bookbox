package db

import (
	"bookbox/backend/model"
)

// DB 初期化後に呼び出す
func Migrate() error {
	db := GetDB()
	return db.AutoMigrate(
		&model.User{},
		&model.Book{},
		&model.UserBook{},
		&model.Review{},
		&model.ReviewReaction{},
	)
}
