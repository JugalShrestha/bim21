const routineDayHeader = document.querySelectorAll('.routine-day')
const routineDayHeaderB = document.querySelectorAll('.routine-day-b')
const date = new Date()
const dayOfTheWeek = date.getDay()
//Sunday = 0 . Sat = 6
if(dayOfTheWeek!=6 && dayOfTheWeek>0)
{
    routineDayHeader[dayOfTheWeek-1].style.background ="var(--n2-color)"
    routineDayHeaderB[dayOfTheWeek-1].style.background ="var(--n2-color)"
}