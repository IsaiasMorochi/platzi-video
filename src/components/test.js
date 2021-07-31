
function calculateDaysBetweenDates(startDate, endDate) {
  var startDate = new Date(startDate);
  var endDate = new Date(endDate);
  var days = [];
  var currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    days.push(currentDate);
    currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
  }

  return days;
}


function calculateDaysBetweenDates(startDate, endDate) {
  var startDate = new Date(startDate);
  var endDate = new Date(endDate);
  var days = [];
  var currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    days.push(currentDate);
    currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
  }

  return days;
}
