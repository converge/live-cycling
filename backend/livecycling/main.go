package main

import (
	"encoding/json"
	"fmt"
	"github.com/converge/livecycling/db"
	"github.com/converge/livecycling/model"
	"log"
	"net/http"
)

func version(res http.ResponseWriter, req *http.Request) {
	_, err := fmt.Fprint(res, "0.0.1")
	if err != nil {
		log.Fatal("version endpoint issue")
	}
}

func raceinfo(res http.ResponseWriter, req *http.Request) {
	res.Header().Set("Access-Control-Allow-Origin", "*")
	res.Header().Set("Content-Type", "application/json")

	if req.Method == "GET" {
		var raceInfo []model.RaceUpdate = db.GetLastRaceUpdates()

		for i := 0; i < len(raceInfo); i++ {
			fmt.Printf("Id: %v, Race Info %s, Time %s", raceInfo[i].Id, raceInfo[i].RaceAction, raceInfo[i].RaceActionTime)
		}

		// encode JSON
		raceInfoJson, err := json.Marshal(raceInfo)
		if err != nil {
			log.Fatal("Error converting to JSON format!", err)
		}

		_, err = res.Write(raceInfoJson)
		if err != nil {
			log.Fatal("Unable to return in JSON format!", err)
		}
	} else if req.Method == "POST" {
		db.AddRaceUpdate()
	}
}

func main() {
	// handlers
	http.HandleFunc("/", version)
	http.HandleFunc("/raceinfo", raceinfo)

	const PORT = ":7001"
	hostname := "https://localhost"
	log.Printf("API running at %s%s", hostname, PORT)
	err := http.ListenAndServe(PORT, nil)
	if err != nil {
		log.Fatal("Unable to start API!", err)
	}
}
