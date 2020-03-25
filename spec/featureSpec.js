'use strict'

describe('Feature test:', function(){
  var meetingRoom;
  var office;

  beforeEach(function(){
    meetingRoom = new MeetingRoom();
    office = new Office();
  });

  it('rooms are available by default', function(){
    console.log(meetingRoom)
    expect(meetingRoom.isAvailable()).toBeTruthy();
  });
});