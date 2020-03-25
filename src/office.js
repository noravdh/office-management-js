class Office {
  constructor() {
    this.rooms = []
  }

  add(room) {
    this.rooms.push(room)
  }

  list() {
    return this.rooms
  }

  listAvailable() {
    return this.rooms.filter(room => room.isAvailable() === true )
  }
};