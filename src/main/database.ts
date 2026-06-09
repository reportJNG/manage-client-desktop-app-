import { app } from 'electron'
import path from 'node:path'
import fs from 'node:fs'
import Database from 'better-sqlite3'
import type { usertype, Userojbect } from '../shared/usertypes'
let db: Database.Database

//creating full database and path
export function initDatabase(): Database.Database {
  const appPath = path.join(app.getPath('userData'), 'client-mgr')

  if (!fs.existsSync(appPath)) {
    fs.mkdirSync(appPath, { recursive: true })
  }

  const dbPath = path.join(appPath, 'app.sqlite')

  db = new Database(dbPath)

  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      age NUMBER NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `
  ).run()

  return db
}

export function getDatabase(): Database.Database {
  if (!db) {
    throw new Error('Database not initialized')
  }

  return db
}

//create profile in pc
export function createUser(user: usertype): void {
  const database = getDatabase()

  database
    .prepare(
      `
      INSERT INTO users (username, password,age)
      VALUES (?,?,?)
    `
    )
    .run(user.name, user.password, user.age)
}

//login with your profile in your pc

export function loginUser(user: usertype): Userojbect | undefined {
  const database = getDatabase()
  const finduser = database
    .prepare(
      `
      SELECT * FROM users WHERE username=? AND password = ?
    `
    )
    .get(user.name, user.password) as Userojbect | undefined
  return finduser
}
//get all profiles
export default function Getallprofiles(): Userojbect[] | undefined {
  const database = getDatabase()
  const users = database
    .prepare(
      `
      SELECT * FROM users 
    `
    )
    .all() as Userojbect[] | undefined
  return users
}
//change password of this profile id
