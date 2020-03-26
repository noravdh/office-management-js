class MeetingRoom{
  constructor(name) {
    this.name = name
    this.available = true;
  }

  enter() {
    if(this.isAvailable() === false){
      alert('Sorry, this meeting room is not available')
      throw new Error('cannot enter unavailable room');
      
    }
    this.available = false;
  }

  leave() {
    if(this.isAvailable() === true){
      alert('Sorry, you cannot leave an empty room')
      
    }
    this.available = true;
  }

  isAvailable() {
    return this.available;
  }
};