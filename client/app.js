function getBathValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for (var i = 0; i < uiBathrooms.length; i++) {
        if (uiBathrooms[i].checked) {
            return parseInt(uiBathrooms[i].value);
        }
    }
    return -1;
}

function getBHKValue() {
    var uiBHK = document.getElementsByName("uiBHK");
    for (var i = 0; i < uiBHK.length; i++) {
        if (uiBHK[i].checked) {
            return parseInt(uiBHK[i].value);
        }
    }
    return -1;
}

function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");

    var sqft = document.getElementById("uiSqft").value;
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("uiLocation").value;
    var estPrice = document.getElementById("result");

    // var url = "http://127.0.0.1:3000/predict_home_price";
    var url = "/api/predict_home_price";


    $.post(url, {
        total_sqft: parseFloat(sqft),
        bhk: bhk,
        bath: bathrooms,
        location: location
    }, function (data, status) {
        console.log(data.estimated_price);
        estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
        console.log(status);
    });
}

function onPageLoad() {
    console.log("document loaded");

    // var url = "http://127.0.0.1:3000/get_location_names"; // ✅ use correct port
    var url = "/api/get_location_names"; // ✅ use correct port


    var url

    $.get(url, function (data, status) {
        console.log("got response for get_location_names request");

        if (data) {
            var locations = data.locations;
            var uiLocation = document.getElementById("uiLocation");
            $('#uiLocation').empty();
            $('#uiLocation').append(new Option("Choose a location", ""));

            for (var i in locations) {
                var opt = new Option(locations[i], locations[i]);
                $('#uiLocation').append(opt);
            }
        }
    });
}

window.onload = onPageLoad;
