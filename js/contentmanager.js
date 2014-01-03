//start copy
function getPlace(obj) {
var placeType="";
 console.log($("#"+obj.id).find('option:selected').val());
 var val = $("#"+obj.id).find('option:selected').val();
 if(val == "Space")
placeType = "space";
else if(val == "Group")
placeType ="group";
else
placeType = "project";
var placeName = fromSpaceRequest(obj.id,val,placeType);
$("#"+obj.id).find('option:first').attr('selected', 'selected');
console.log("place name : "+placeName);
}

function fromSpaceRequest(selectedCombo,val,placeType) {
  var place_name = "";
  var params = {
        type: ""+placeType,
        success: (function (data) {
            //consolelog("DATA: "+JSON.stringify(data));			
            place_name = data.name;
			/*
			var  fromLabelStr = $('#fromLabel').text();
			fromLabelStr = fromLabelStr.substring(fromLabelStr.indexOf(":")+1,fromLabelStr.length);
			console.log(fromLabelStr);
			var  toLabelStr = $('#toLabel').text();
			toLabelStr = fromLabelStr.substring(toLabelStr.indexOf(":")+1,toLabelStr.length);
			console.log(toLabelStr);
			*/			
			if(place_name!='' && selectedCombo == "fromPlace")
               $('#fromLabel').text(val+" : "+place_name);		
			  else if(place_name!=''&& selectedCombo == "toPlace")
               $('#toLabel').text(val+" : "+place_name);
        }),
        error: handleResponse
    };
    // calling the OSAPI with the params. final call.
    osapi.jive.corev3.places.requestPicker(params);
	return place_name;
}
//end copy

//start move
function getMovePlace(obj) {
var placeType="";
 console.log($("#"+obj.id).find('option:selected').val());
 var val = $("#"+obj.id).find('option:selected').val();
 if(val == "Space")
placeType = "space";
else if(val == "Group")
placeType ="group";
else
placeType = "project";
var placeName = fromMoveSpaceRequest(obj.id,val,placeType);
$("#"+obj.id).find('option:first').attr('selected', 'selected');
console.log("place name : "+placeName);
}

function fromMoveSpaceRequest(selectedCombo,val,placeType) {
  var place_name = "";
  var params = {
        type: ""+placeType,
        success: (function (data) {
            //consolelog("DATA: "+JSON.stringify(data));			
            place_name = data.name;
			 if(place_name!='' && selectedCombo == "fromMovePlace")
               $('#fromMoveLabel').text(val+" : "+place_name);		
			  else if(place_name!=''&& selectedCombo == "toMovePlace")
               $('#toMoveLabel').text(val+" : "+place_name);
        }),
        error: handleResponse
    };
    // calling the OSAPI with the params. final call.
    osapi.jive.corev3.places.requestPicker(params);
	return place_name;
}
//end move

//start delete
function getDeletePlace(obj) {
var placeType="";
 console.log($("#"+obj.id).find('option:selected').val());
 var val = $("#"+obj.id).find('option:selected').val();
 if(val == "Space")
placeType = "space";
else if(val == "Group")
placeType ="group";
else
placeType = "project";
var placeName = fromDeleteSpaceRequest(obj.id,val,placeType);
$("#"+obj.id).find('option:first').attr('selected', 'selected');
console.log("place name : "+placeName);
}

function fromDeleteSpaceRequest(selectedCombo,val,placeType) {
  var place_name = "";
  var params = {
        type: ""+placeType,
        success: (function (data) {
            //consolelog("DATA: "+JSON.stringify(data));			
            place_name = data.name;
			 if(place_name!='' && selectedCombo == "fromDeletePlace")
               $('#fromDeleteLabel').text(val+" : "+place_name);
        }),
        error: handleResponse
    };
    // calling the OSAPI with the params. final call.
    osapi.jive.corev3.places.requestPicker(params);
	return place_name;
}
//end delete

//start upload
function getUploadPlace(obj) {
var placeType="";
 console.log($("#"+obj.id).find('option:selected').val());
 var val = $("#"+obj.id).find('option:selected').val();
 if(val == "Space")
placeType = "space";
else if(val == "Group")
placeType ="group";
else
placeType = "project";
var placeName = fromUploadSpaceRequest(obj.id,val,placeType);
$("#"+obj.id).find('option:first').attr('selected', 'selected');
console.log("place name : "+placeName);
}

function fromUploadSpaceRequest(selectedCombo,val,placeType) {
  var place_name = "";
  var params = {
        type: ""+placeType,
        success: (function (data) {
            //consolelog("DATA: "+JSON.stringify(data));			
            place_name = data.name;
			 if(place_name!='' && selectedCombo == "fromUploadPlace")
               $('#fromUploadLabel').text(val+" : "+place_name);
        }),
        error: handleResponse
    };
    // calling the OSAPI with the params. final call.
    osapi.jive.corev3.places.requestPicker(params);
	return place_name;
}
//end upload

function handleResponse(data) {
    alert("Error in Application..!!");
    console.log(data);
}