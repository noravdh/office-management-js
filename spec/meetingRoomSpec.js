'use strict';

describe('MeetingRoom', function(){
  var meetingRoom;
  // var office;
  beforeEach(function(){
    meetingRoom = new MeetingRoom();
    // office = jasmine.createSpyObj('office', ['officeMethod']);
  });

  it('can be entered', function(){
    meetingRoom.enter();
    expect(meetingRoom.isAvailable()).toBeFalsy();
  });

  it('can left', function(){
    meetingRoom.enter();
    meetingRoom.leave();
    expect(meetingRoom.isAvailable()).toBeTruthy();
  });
});