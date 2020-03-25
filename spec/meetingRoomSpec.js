'use strict';

describe('MeetingRoom', function(){
  var meetingRoom;
  // var office;
  beforeEach(function(){
    meetingRoom = new MeetingRoom("Room 1");
    // office = jasmine.createSpyObj('office', ['officeMethod']);
  });

  it('can be entered', function(){
    meetingRoom.enter();
    expect(meetingRoom.isAvailable()).toBeFalsy();
  });

  it('can be left', function(){
    meetingRoom.enter();
    meetingRoom.leave();
    expect(meetingRoom.isAvailable()).toBeTruthy();
  });

  it('has a name', function(){
    expect(meetingRoom.name).toEqual("Room 1")
  })
});