
function timeToFloat(TimeString) {
  return (
    parseInt(TimeString.split(':')[0]) + parseInt(TimeString.split(':')[1]) / 60
  );
}

function timeToString(TimeFloat) {
  return (
    Math.trunc(TimeFloat) +
    ':' +
    ((TimeFloat - Math.trunc(TimeFloat)) * 60).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })
  );
}

export default function calculateIntersection(orderTime1, orderTime2) {
  if (arguments.length < 2) return null;
  if (
    Math.max(timeToFloat(orderTime2.start), timeToFloat(orderTime1.end)) >
      timeToFloat(orderTime2.start) &&
    Math.max(timeToFloat(orderTime1.start), timeToFloat(orderTime2.start)) <
      Math.min(timeToFloat(orderTime1.end), timeToFloat(orderTime2.end))
  ) {
    return {
      start: timeToString(
        Math.max(timeToFloat(orderTime1.start), timeToFloat(orderTime2.start))
      ),

      end: timeToString(
        Math.min(timeToFloat(orderTime1.end), timeToFloat(orderTime2.end))
      ),
    };
  } else {
    return 'No intersection';
  }
}
