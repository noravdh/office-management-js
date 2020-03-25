'use strict';

describe('Office', function(){
  var meetingRoom;
  var office;
  var room2;
  beforeEach(function(){
    room2 = new MeetingRoom("Room 2")
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
    office.add(meetingRoom)
    office.add(room2)
    expect(office.list()).toEqual([meetingRoom, room2])
  })

  it('can list all available rooms', function(){
    office.add(meetingRoom)
    office.add(room2)
    meetingRoom.enter();
    expect(office.listAvailable()).toEqual([room2])
  })
});