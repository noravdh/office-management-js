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

  it('can list all rooms', function(){
    var room2 = new MeetingRoom("Room 2")
    office.add(meetingRoom)
    office.add(room2)
    expect(office.list()).toEqual([meetingRoom, room2])
  })
});