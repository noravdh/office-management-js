class MeetingRoom{
  constructor() {
    this.available = true;
  }

  enter() {
    this.available = false;
  }

  isAvailable() {
    return this.available;
  }
};