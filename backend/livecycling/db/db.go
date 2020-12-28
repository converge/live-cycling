// DB is a package to handle database operations
package db

import (
	"database/sql"
	"github.com/converge/livecycling/model"
	_ "github.com/jackc/pgx/v4/stdlib"
	"log"
	"os"
)

/**
 * Initialize db connection
 */
func GetDatabaseInstance() *sql.DB {
	db, err := sql.Open("pgx", os.Getenv("POSTGRES_URI"))
	if err != nil {
		log.Print("Unable to connect to db!", err)
	}
	return db
}

/**
	Retrieve most recent race updates.
 */
func GetLastRaceUpdates() []model.RaceUpdate {
	var dbConn *sql.DB = GetDatabaseInstance()
	stmt, err := dbConn.Prepare("SELECT id, race_action, race_action_time FROM raceupdates ORDER BY modified DESC LIMIT 5")
	if err != nil {
		log.Fatal("Unable to prepare query database!", err)
	}
	rows, err := stmt.Query()
	if err != nil {
		log.Fatal("Unable to query database!", err)
	}
	defer rows.Close()
	var (
		id             int
		raceAction     string
		raceActionTime string
	)

	var raceUpdates []model.RaceUpdate
	for rows.Next() {
		err := rows.Scan(&id, &raceAction, &raceActionTime)
		if err != nil {
			log.Fatal("Unable to save query data!", err)
		}
		queryResult := model.RaceUpdate{Id: id, RaceAction: raceAction, RaceActionTime: raceActionTime}
		raceUpdates = append(raceUpdates, queryResult)
	}
	return raceUpdates
}
