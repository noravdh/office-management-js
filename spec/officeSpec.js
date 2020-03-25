'use strict';

describe('Office', function(){
  var meetingRoom;
  var office;
  beforeEach(function(){
    meetingRoom = new MeetingRoom("Room 1")
    office = new Office; 
  });

  it('has no rooms by default', function(){
    expect(office.rooms).toEqual([]);
  });

  it('can have rooms added', function(){
    office.add(meetingRoom)
    expect(office.rooms[0].name).toEqual("Room 1")
  })
});