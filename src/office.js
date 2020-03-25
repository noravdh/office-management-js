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
};