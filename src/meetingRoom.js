class MeetingRoom{
  constructor(name) {
    this.name = name
    this.available = true;
  }

  enter() {
    if(this.isAvailable() === false){
      throw new Error('cannot enter unavailable room');
    }
    this.available = false;
  }

  leave() {
    this.available = true;
  }

  isAvailable() {
    return this.available;
  }
};