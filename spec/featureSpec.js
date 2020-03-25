'use strict'

describe('Feature test:', function(){
  var meetingRoom;
  var office;

  beforeEach(function(){
    meetingRoom = new MeetingRoom();
    office = new Office();
  });

  it('rooms are available by default', function(){
    expect(meetingRoom.isAvailable()).toBeTruthy();
  });

  it('rooms are unavailable after entering', function(){
    meetingRoom.enter();
    expect(meetingRoom.isAvailable()).toBeFalsy();
  })
});