
function fromPlace(obj) {
var placeType="";
 console.log($("#fromPlace").find('option:selected').val());
 var val = $("#fromPlace").find('option:selected').val();
 if(val == "Space")
placeType = "space";
else if(val == "Group")
placeType ="group";
else
placeType = "project";
var placeName = fromSpaceRequest(obj.id,val,placeType);
$("#fromPlace").find('option:first').attr('selected', 'selected');
console.log("place name : "+placeName);
}

function fromSpaceRequest(selectedCombo,val,placeType) {
  var place_name = "";
  var params = {
        type: ""+placeType,
        success: (function (data) {
            //consolelog("DATA: "+JSON.stringify(data));
			
            place_name = data.name;
			console.log(place_name);
			if(place_name!='' && selectedCombo == "fromPlace")
               $('#fromLabel').text(val+" : "+place_name);		
			  else if(place_name!='' && selectedCombo == "toPlace")
               $('#toLabel').text(val+" : "+place_name);
        }),
        error: handleResponse
    };
    // calling the OSAPI with the params. final call.
    osapi.jive.corev3.places.requestPicker(params);
	return place_name;
}

function handleResponse(data) {
    alert("Error in Application..!!");
    console.log(data);
}