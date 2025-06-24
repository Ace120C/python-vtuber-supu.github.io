package main

import (
	"net/http"
	"log"
)

func main(){
	fs := http.FileServer(http.Dir("../python-vtuber-supu.github.io//"))
	http.Handle("/", fs)

	log.Println("Serving at Port 8080...")

	err := http.ListenAndServe(":8080", nil)

	if err != nil {
		log.Fatal(err)
	}
}
