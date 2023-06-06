const routineDayHeader = document.querySelectorAll('.routine-day')
const routineDayHeaderB = document.querySelectorAll('.routine-day-b')
const date = new Date()
const dayOfTheWeek = date.getDay()
//Sunday = 0 . Sat = 6
if(dayOfTheWeek!=6)
{
    routineDayHeader[dayOfTheWeek].style.background ="var(--n2-color)"
    routineDayHeaderB[dayOfTheWeek].style.background ="var(--n2-color)"
}