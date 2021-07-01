/* Date 객체 */
new Date();
new Date(value);
new Date(dateString);
new Date(year, monthIndex[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);


//프로그래머스 2016
function solution(a, b) {
    const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    return day[new Date(2016,a-1, b).getDay()];
}