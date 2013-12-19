
function fromPlace() {
 console.log($("#from_place").find('option:selected').val());
 var val = $("#from_place").find('option:selected').val();
 fromSpaceRequest();
}

function fromSpaceRequest() {
  
  var params = {
        type: "space",
        success: (function (data) {
            //consolelog("DATA: "+JSON.stringify(data));
			
            var from_place_name = data.name;
			alert(from_place_name);
        }),
        error: handleResponse
    };
    // calling the OSAPI with the params. final call.
    osapi.jive.corev3.places.requestPicker(params);
}

function handleResponse(data) {
    alert("Error in Application..!!");
    console.log(data);
}