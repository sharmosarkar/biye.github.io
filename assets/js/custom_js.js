
function radio_on_change() {
    var radios = document.getElementsByName('rsvp_attendance_mode');
    console.log(radios);
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            // alert(radios[i].value);
            // var x = document.getElementById("attend_in_person_msg");
            if (radios[i].value === "attend_in_person") {
                document.getElementById("attend_in_person_msg").style.display = "block";
                document.getElementById("attend_virtually_msg").style.display = "none";
            } else if (radios[i].value === "attend_in_virtually") {
                document.getElementById("attend_in_person_msg").style.display = "none";
                document.getElementById("attend_virtually_msg").style.display = "block";
            } else{
                document.getElementById("attend_in_person_msg").style.display = "none";
                document.getElementById("attend_virtually_msg").style.display = "block";
            }
            // x = document.getElementById("attend_virtually_msg");
            // if (radios[i].value === "attend_in_virtually") {
            //     x.style.display = "block";
            // } else{
            //     x.style.display = "none";
            // }
            // // only one radio can be logically checked, don't check the rest
            break;
        }
    }
}

// function onRSVP_radio_change(){
//     alert("ff");
//     if(document.getElementById('attend_in_person').checked) {
//         document.getElementById('attend_in_person').style.display = "block";
//     }else{
//         document.getElementById('attend_in_person').style.display = "none";
//     }
// }
//
// function myFunction() {
//     // var x = document.getElementById("myDIV");
//     // if (x.style.display === "none") {
//     //     x.style.display = "block";
//     // } else {
//     //     x.style.display = "none";
//     // }
//
//
// }
//
// myFunction();