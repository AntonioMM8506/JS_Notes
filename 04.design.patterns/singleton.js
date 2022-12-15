// Basic use of Singleton pattern
class DatabaseConnection {
  constructor() {
    this.databaseConnection = 'dummytext'
  }

  getNewDBConnection() {
    return this.databaseConnection
  }
}

class Singleton {
  constructor() {
    throw new Error('Use the getInstance() method on the Singleton object!')
  }

  getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new DatabaseConnection()
    }

    return Singleton.instance
  }
}

module.exports = Singleton