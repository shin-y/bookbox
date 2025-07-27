package model

import (
	"time"

	"github.com/google/uuid"
)

type User struct {
	ID        uuid.UUID `gorm:"type:uuid;primaryKey;default:uuid_generate_v4()"`
	Name      string
	Email     string `gorm:"unique;not null"`
	Biography *string
	IconUrl   *string
	CreatedAt time.Time
	UpdatedAt time.Time
}

type Book struct {
	ID            uuid.UUID `gorm:"type:uuid;primaryKey;default:uuid_generate_v4()"`
	Title         string
	Author        string
	Publisher     *string
	Description   *string
	ISBN          *string
	PublishedAt   *time.Time `gorm:"type:date"`
	CoverImageUrl *string
}

type UserBook struct {
	ID         uuid.UUID `gorm:"type:uuid;primaryKey;default:uuid_generate_v4()"`
	UserID     string    `gorm:"index;not null"`
	BookID     string    `gorm:"index;not null"`
	Status     string    // e.g. "WANT_TO_READ", "READING", "READ"
	StartedAt  *time.Time
	FinishedAt *time.Time
	IsLendable bool

	User User `gorm:"foreignKey:UserID"`
	Book Book `gorm:"foreignKey:BookID"`

	CreatedAt time.Time
	UpdatedAt time.Time
}

type Review struct {
	ID        uuid.UUID `gorm:"type:uuid;primaryKey;default:uuid_generate_v4()"`
	UserID    string    `gorm:"index;not null"`
	BookID    string    `gorm:"index;not null"`
	Title     *string   // 任意
	Comment   *string   // 任意
	Spoiler   *string   // 任意
	Rating    *int32    // 1〜5、nullable
	CreatedAt time.Time
	UpdatedAt time.Time

	User User `gorm:"foreignKey:UserID"`
	Book Book `gorm:"foreignKey:BookID"`
}

type ReviewReaction struct {
	ID       uuid.UUID `gorm:"type:uuid;primaryKey;default:uuid_generate_v4()"`
	UserID   string    `gorm:"index;not null"`
	ReviewID string    `gorm:"index;not null"`

	User   User   `gorm:"foreignKey:UserID"`
	Review Review `gorm:"foreignKey:ReviewID"`
}
