import { useEffect } from "react";
import GoBackBtn from "../../components/GoBackBtn";

const Routine = () => {
  const date = new Date();
  const dayOfTheWeek = date.getDay();

  useEffect(() => {
    const routineRow = document.querySelectorAll(".routine-section-A tr");
    const routineRowB = document.querySelectorAll(".routine-section-B tr");

    if (dayOfTheWeek !== 6 && dayOfTheWeek >= 0) {
      routineRow.forEach((r) => {
        r.classList.remove("activeDay");
      });
      routineRowB.forEach((r) => {
        r.classList.remove("activeDay");
      });
      routineRow[dayOfTheWeek + 2].classList.add("activeDay");
      routineRowB[dayOfTheWeek + 2].classList.add("activeDay");
    }
  }, [dayOfTheWeek]);
  return (
    <section className="class-routine-page" id="page">
      <GoBackBtn />
      <div className="routine-whole">
        <div className="header">
          <div className="main-header">Class Routine</div>
          <div className="sub-header">
            Class routine for section A and section B
          </div>
        </div>
        <div className="class-routine-body">
          <table className="routine-section-A">
            <thead>
              <tr>
                <th className="section-cell" colSpan={5}>
                  Section A
                </th>
              </tr>
              <tr>
                <th>Days</th>
                <th>6:35 - 7:45</th>
                <th>7:55 - 8:30</th>
                <th>9:30 - 11:00</th>
                <th>11:10 - 12:40</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sun</td>
                <td>EB</td>
                <td>Web Tech II</td>
                <td>OS</td>
                <td>BDCCN</td>
              </tr>
              <tr>
                <td>Mon</td>
                <td>Web Tech II</td>
                <td>DBMS</td>
                <td>CMA</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Tue</td>
                <td>EB</td>
                <td>DBMS</td>
                <td>BDCCN</td>
                <td>CMA</td>
              </tr>
              <tr>
                <td>Wed</td>
                <td>EB</td>
                <td>OS</td>
                <td>CMA</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Thur</td>
                <td>Web Tech II</td>
                <td>OS</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Fri</td>
                <td>DBMS</td>
                <td>BDCCN</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
          <table className="routine-section-B">
            <thead>
              <tr>
                <th className="section-cell" colSpan={5}>
                  Section B
                </th>
              </tr>
              <tr>
                <th>Days</th>
                <th>6:35 - 7:45</th>
                <th>7:55 - 8:30</th>
                <th>9:30 - 11:00</th>
                <th>11:10 - 12:40</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sun</td>
                <td>Web Tech II</td>
                <td>EB</td>
                <td>CMA</td>
                <td>OS</td>
              </tr>
              <tr>
                <td>Mon</td>
                <td>DBMS</td>
                <td>Web Tech II</td>
                <td>BDCCN</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Tue</td>
                <td>EB</td>
                <td>OS</td>
                <td>CMA</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Wed</td>
                <td>OS</td>
                <td>DBMS</td>
                <td>BDCCN</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Thur</td>
                <td>CMA</td>
                <td>Web Tech II</td>
                <td>BDCCN</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Fri</td>
                <td>EB</td>
                <td>DBMS</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Routine;
