
function fromPlace() {
var placeType="";
 console.log($("#from_place").find('option:selected').val());
 var val = $("#from_place").find('option:selected').val();
 if(val == "Space")
placeType = "space";
else if(val == "Group")
placeType ="group";
else
placeType = "project";
var place-name = fromSpaceRequest();
console.log("place name : "+place-name);
$("#from_place").find('option:first').attr('selected', 'selected');
}

function fromSpaceRequest() {
  
  var params = {
        type: ""+placeType,
        success: (function (data) {
            //consolelog("DATA: "+JSON.stringify(data));
			
            var from_place_name = data.name;
			console.log(from_place_name);
        }),
        error: handleResponse
    };
    // calling the OSAPI with the params. final call.
    osapi.jive.corev3.places.requestPicker(params);
	return from_place_name;
}

function handleResponse(data) {
    alert("Error in Application..!!");
    console.log(data);
}