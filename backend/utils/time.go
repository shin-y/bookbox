package utils

import "time"

var jst *time.Location

func init() {
	jst, _ = time.LoadLocation("Asia/Tokyo")
}

// TimeJST returns the Asia/Tokyo location (UTC+9)
func JST() *time.Location {
	return jst
}

// FormatJST formats a time.Time into JST and returns it as a string
func FormatJST(t *time.Time) string {
	if t == nil {
		return ""
	}
	return t.In(JST()).Format("2006-01-02 15:04:05")
}
