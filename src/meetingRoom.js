class MeetingRoom{
  constructor() {
    this.available = true;
  }

  enter() {
    this.available = false;
  }

  leave() {
    this.available = true;
  }

  isAvailable() {
    return this.available;
  }
};