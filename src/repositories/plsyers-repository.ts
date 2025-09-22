import {PlayerModel} from "../model/players-model"
import { ok } from "../util/http-helper";

const database:PlayerModel[] = [
    {
        "id": 1,
        "name": "Messi",
        "club": "Paris Saint-Germain",
        "nationality": "Argentina",
        "Position": "Forward",
        "statistics": {
            "Overall": 93,
            "Pace": 85,
            "Shooting": 94,
            "Passing": 91,
            "Dribbling": 95,
            "Defending": 38,
            "Physical": 65
        }
    },
    {
        "id": 2,
        "name": "Kylian Mbappé",
        "club": "Real Madrid",
        "nationality": "France",
        "Position": "Forward",
        "statistics": {
            "Overall": 92,
            "Pace": 96,
            "Shooting": 90,
            "Passing": 84,
            "Dribbling": 91,
            "Defending": 40,
            "Physical": 78
        }
    },
    {
        "id": 3,
        "name": "Robert Lewandowski",
        "club": "Barcelona",
        "nationality": "Poland",
        "Position": "Forward",
        "statistics": {
            "Overall": 90,
            "Pace": 78,
            "Shooting": 91,
            "Passing": 79,
            "Dribbling": 85,
            "Defending": 40,
            "Physical": 82
        }
    },
    {
        "id": 4,
        "name": "Harry Kane",
        "club": "Bayern Munich",
        "nationality": "England",
        "Position": "Forward",
        "statistics": {
            "Overall": 89,
            "Pace": 78,
            "Shooting": 89,
            "Passing": 81,
            "Dribbling": 84,
            "Defending": 45,
            "Physical": 84
        }
    },
    {
        "id": 5,
        "name": "Pedri",
        "club": "Barcelona",
        "nationality": "Spain",
        "Position": "Midfielder",
        "statistics": {
            "Overall": 87,
            "Pace": 80,
            "Shooting": 75,
            "Passing": 88,
            "Dribbling": 89,
            "Defending": 60,
            "Physical": 70
        }
    }
]


export const findAllPlayers = async ():Promise<PlayerModel[]> =>{
    return database;

}

export const findByIdPlayers = async (id:number):Promise<PlayerModel | undefined > =>{
    return database.find( player => player.id === id);

}

export const insertPlayers = async (player:PlayerModel)=>{
    database.push(player)
    return ok(player)
}

