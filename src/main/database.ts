import { app } from 'electron'
import path from 'node:path'
import fs from 'node:fs'
import Database from 'better-sqlite3'

let db: Database.Database

type CreateUserInput = {
  username: string
  password: string
}

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

export function createUser(user: CreateUserInput): void {
  const database = getDatabase()

  database
    .prepare(
      `
      INSERT INTO users (username, password)
      VALUES (?, ?)
    `
    )
    .run(user.username, user.password)
}
