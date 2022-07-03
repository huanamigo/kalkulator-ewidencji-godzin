function showTime() {
  let tdEl = [...this.getElementsByTagName("td")];
  let hrEl = [...this.getElementsByTagName("hr")];

  if (tdEl[1].innerHTML == "<hr>") {
    for (let el in hrEl) {
      hrEl[el].style.display = "none";
    }

    tdEl[3].innerHTML =
      '<div class="time-input"><input class="time-in" type="time" /><strong>-&nbsp;&nbsp;&nbsp;</strong><input type="time" class="time-out" /></div>';
  }
}

function showBoth() {
  let cellee = [...this.getElementsByTagName("input")];
  let timeIn = [...this.querySelectorAll(".time-in")];
  let timeOut = [...this.querySelectorAll(".time-out")];
  var hoursIn = Number(timeIn[0].value.split(":")[0]);
  var hoursOut = Number(timeOut[0].value.split(":")[0]);
  var hoursPassed = Number(0);
  hoursPassed = hoursOut - hoursIn;

  var minutesIn = 0;
  minutesIn = Number(timeIn[0].value.split(":")[1]);
  minutesIn = minutesIn || 0;
  var minutesOut = timeOut[0].value.split(":")[1];
  minutesOut = minutesOut || 0;
  var minutesPassed = Number(0);
  minutesPassed = minutesOut - minutesIn;

  if (minutesPassed < 0) {
    hoursPassed = hoursPassed - 1;
    minutesPassed = minutesPassed + 60;
  }

  let result = this.querySelectorAll(".result");
  var timePassed;

  if (minutesPassed == 0) {
    timePassed = Number(hoursPassed) + "h";
    result[0].innerText = timePassed;
  } else {
    timePassed = Number(hoursPassed) + "h " + Number(minutesPassed) + " min";
    result[0].innerText = timePassed;
  }

  let results = [...document.querySelectorAll(".result")];
  let resultCell = document.getElementById("end-result");

  var totalHours = Number("0");
  var totalMinutes = Number("0");
  var ifMinutes = " minut";

  for (let el in results) {
    hours = results[el].innerText.split("h")[0];
    hours1 = Number(hours);
    totalHours = totalHours + hours1;
    minutes = results[el].innerText.split("h ")[1];
    if (typeof minutes === "string") {
      minutesOnly = minutes.split(" ")[0];
      if (minutesOnly != undefined) {
        minutes1 = Number(minutesOnly);
        totalMinutes = totalMinutes + minutes1;
        if (totalMinutes >= 60) {
          totalHours++;
          totalMinutes = totalMinutes - 60;
          if (totalMinutes == 0) {
            totalMinutes = 0;
          } else {
            ifMinutes = " minut";
          }
        }
      }
    }
    if (totalMinutes == 0) {
      resultCell.innerText = totalHours + " h ";
    } else {
      resultCell.innerText = totalHours + " h " + totalMinutes + ifMinutes;
    }
  }
}

function printHide() {
  printBtn.style.visibility = "hidden";
}
