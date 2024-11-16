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
                <th>6:15 - 7:35</th>
                <th>7:45 - 9:05</th>
                <th>9:30 - 11:00</th>
                <th>11:10 - 12:40</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sun</td>
                <td>BIS</td>
                <td>ITEC</td>
                <td>BE</td>
                <td></td>
              </tr>
              <tr>
                <td>Mon</td>
                <td>ITEC</td>
                <td>BIS</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Tue</td>
                <td>ITEC</td>
                <td>BIS</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Wed</td>
                <td>BRS</td>
                <td>FIN</td>
                <td>BE</td>
                <td></td>
              </tr>
              <tr>
                <td>Thur</td>
                <td>BRS</td>
                <td>FIN</td>
                <td>BE</td>
                <td></td>
              </tr>
              <tr>
                <td>Fri</td>
                <td>BRS</td>
                <td>FIN</td>
                <td></td>
                <td></td>
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
                <th>6:15 - 7:35</th>
                <th>7:45 - 9:05</th>
                <th>9:30 - 11:00</th>
                <th>11:10 - 12:40</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sun</td>
                <td>BE</td>
                <td>BRS</td>
                <td>ITEC</td>
                <td></td>
              </tr>
              <tr>
                <td>Mon</td>
                <td>BRS</td>
                <td>ITEC</td>
                <td>BE</td>
                <td></td>
              </tr>
              <tr>
                <td>Tue</td>
                <td>BRS</td>
                <td>ITEC</td>
                <td>BE</td>
                <td></td>
              </tr>
              <tr>
                <td>Wed</td>
                <td>FIN</td>
                <td>BIS</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Thur</td>
                <td>FIN</td>
                <td>BIS</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Fri</td>
                <td>FIN</td>
                <td>BIS</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Routine;
