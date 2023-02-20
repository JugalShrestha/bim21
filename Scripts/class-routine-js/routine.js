const routineDayHeader = document.querySelectorAll('.routine-day')
const date = new Date()
const dayOfTheWeek = date.getDay()
//Sunday = 0 . Sat = 6
if(dayOfTheWeek!=6)
{
    routineDayHeader[dayOfTheWeek].style.background ="var(--n2-color)"
}