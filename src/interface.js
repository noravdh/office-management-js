$(document).ready(function() {
	$("#hiddenRow-0").hide();
	$("#hiddenRow-1").hide();
	$("#hiddenRow-2").hide();
	$("#hiddenRow-3").hide();
	$("#hiddenRow-4").hide();
	$("#hiddenRow-5").hide();
	$("#hiddenRow-6").hide();
	$("#hiddenRow-7").hide();
	$("#hiddenRow-8").hide();
	$("#hiddenRow-9").hide();
	$("#hiddenRow-10").hide();
	var office = new Office();

  $('#add-room').submit(function(event) {
		event.preventDefault();
		var room = new MeetingRoom($('#room-name').val());
    office.add(room)
    $('#room-name').val('');
		$(`.room-item-${office.list().length} .value`).html(`${room.name}`);
		$("#hiddenRow-0").show();
		$(`#hiddenRow-${office.list().length}`).toggle();
	})

	$('.enter-room').on('click', function(){
	var roomNumber = (this.id);
	room = office.list()[roomNumber-1]
	room.enter();
	console.log(room.isAvailable())
	$(`#${roomNumber}.availability .value`).html("Unavailable");
	});
	
	$('.leave-room').on('click', function(){
		var roomNumber = (this.id);
		room = office.list()[roomNumber-1]
		room.leave();
		console.log(room.isAvailable())
		$(`#${roomNumber}.availability .value`).html("Available");
	});
  
})
