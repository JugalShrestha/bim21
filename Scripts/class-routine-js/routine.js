const routineDayHeader = document.querySelectorAll('.routine-day')
const date = new Date()
const dayOfTheWeek = date.getDay()
//Sunday = 0 . Sat = 6
if(dayOfTheWeek>0 && dayOfTheWeek<6)
{
    routineDayHeader[dayOfTheWeek-1].style.background ="var(--n1-color)"
}