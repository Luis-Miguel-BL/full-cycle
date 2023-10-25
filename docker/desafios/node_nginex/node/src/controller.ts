import { Request, Response } from "express";
import { faker } from '@faker-js/faker';
import { RowDataPacket } from "mysql2";
import connection from "./data";

interface User extends RowDataPacket {
    name: string;
}
const db = connection
export class Controller {
    async execute(req: Request, res: Response) {
        await addUser()
        let users = await getUsers()
        return res.send("<h1>Full Cycle Rocks!</h1><br>"+ users.map(({name})=>{return name}).join(", <br>"))
    }
}

function addUser():Promise<any> {
    return new Promise((resolve, reject) => {
        var randomName = faker.person.fullName();
        db.query(`INSERT INTO users (name) VALUES ('${randomName}');`, (err, res) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(res)
            }
        });
        return
    });
}

function  getUsers():Promise<User[]>  {
    let query = `SELECT name FROM users;`
    return new Promise((resolve, reject) => {
        db.query<User[]>(query, (err, res) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(res);
            }
        });
        return
    });
}