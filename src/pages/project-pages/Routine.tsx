import { useEffect } from "react";
import GoBackBtn from "../../components/GoBackBtn";

const Routine = () => {
  const date = new Date();
  const dayOfTheWeek = date.getDay();

  useEffect(() => {
    const routineDayHeaders = document.querySelectorAll(".routine-day");
    const routineDayHeadersB = document.querySelectorAll(".routine-day-b");

    if (dayOfTheWeek !== 6 && dayOfTheWeek > 0) {
      const routineDayHeader = routineDayHeaders[
        dayOfTheWeek - 1
      ] as HTMLElement;
      const routineDayHeaderB = routineDayHeadersB[
        dayOfTheWeek - 1
      ] as HTMLElement;

      routineDayHeader.style.background = "var(--n2-color)";
      routineDayHeaderB.style.background = "var(--n2-color)";
    }
  }, [dayOfTheWeek]);

  return (
    <section className="class-routine-page" id="page">
      <GoBackBtn />
      <div className="routine-whole">
        <div className="header">
          <div className="main-header">Class Routine</div>
          <div className="sub-header">
            Class routine for BIM 3rd Sem section A
          </div>
        </div>
        <div className="class-routine-body">
          <table className="routine">
            <thead>
              <tr className="routine-row">
                <td className="routine-cell routine-base" colSpan={2}>
                  Time
                </td>
                <td className="routine-cell routine-header routine-day">Mon</td>
                <td className="routine-cell routine-header routine-day">Tue</td>
                <td className="routine-cell routine-header routine-day">Wed</td>
                <td className="routine-cell routine-header routine-day">Thu</td>
                <td className="routine-cell routine-header routine-day">Fri</td>
              </tr>
            </thead>
            <tbody>
              <tr className="routine-row">
                <td rowSpan={2} className="routine-cell routine-time">
                  6:15
                </td>
                <td className="routine-cell routine-header">Sub</td>
                <td className="routine-cell">FA</td>
                <td className="routine-cell">FA</td>
                <td className="routine-cell">WTI</td>
                <td className="routine-cell">MPCA</td>
                <td className="routine-cell">WTI</td>
              </tr>
              <tr className="routine-row">
                <td className="routine-cell routine-header">Room</td>
                <td className="routine-cell room-no">424</td>
                <td className="routine-cell room-no">424</td>
                <td className="routine-cell room-no">Lab-B</td>
                <td className="routine-cell room-no">Lab-B</td>
                <td className="routine-cell room-no">424</td>
              </tr>
              <tr className="routine-row">
                <td rowSpan={2} className="routine-cell routine-time">
                  7:45
                </td>
                <td className="routine-cell routine-header">Sub</td>
                <td className="routine-cell">DSA</td>
                <td className="routine-cell">DSA</td>
                <td className="routine-cell">DSA</td>
                <td className="routine-cell">WTI</td>
                <td className="routine-cell">B.Stat</td>
              </tr>
              <tr className="routine-row">
                <td className="routine-cell routine-header">Room</td>
                <td className="routine-cell room-no">424</td>
                <td className="routine-cell room-no">Lab-D</td>
                <td className="routine-cell room-no">424</td>
                <td className="routine-cell room-no">424</td>
                <td className="routine-cell room-no">424</td>
              </tr>
              <tr className="routine-row">
                <td rowSpan={2} className="routine-cell routine-time">
                  9:30
                </td>
                <td className="routine-cell routine-header">Sub</td>
                <td className="routine-cell">B.Stat</td>
                <td className="routine-cell">B.Stat</td>
                <td className="routine-cell">MPCA</td>
                <td className="routine-cell">FA</td>
                <td className="routine-cell">MPCA</td>
              </tr>
              <tr className="routine-row">
                <td className="routine-cell routine-header">Room</td>
                <td className="routine-cell room-no">Lab-D</td>
                <td className="routine-cell room-no">424</td>
                <td className="routine-cell room-no">424</td>
                <td className="routine-cell room-no">424</td>
                <td className="routine-cell room-no">424</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="routine-whole">
        <div className="header">
          <div className="sub-header">
            Class routine for BIM 3rd Sem section B
          </div>
        </div>
        <div className="class-routine-body">
          <table className="routine">
            <thead>
              <tr className="routine-row">
                <td className="routine-cell routine-base" colSpan={2}>
                  Time
                </td>
                <td className="routine-cell routine-header routine-day-b">
                  Mon
                </td>
                <td className="routine-cell routine-header routine-day-b">
                  Tue
                </td>
                <td className="routine-cell routine-header routine-day-b">
                  Wed
                </td>
                <td className="routine-cell routine-header routine-day-b">
                  Thu
                </td>
                <td className="routine-cell routine-header routine-day-b">
                  Fri
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className="routine-row">
                <td className="routine-cell routine-time" rowSpan={2}>
                  6:15
                </td>
                <td className="routine-cell routine-header">Sub</td>
                <td className="routine-cell">B.Stat</td>
                <td className="routine-cell">MPCA</td>
                <td className="routine-cell">FA</td>
                <td className="routine-cell">FA</td>
                <td className="routine-cell">DSA</td>
              </tr>
              <tr className="routine-row">
                <td className="routine-cell routine-header">Room</td>
                <td className="routine-cell room-no">425</td>
                <td className="routine-cell room-no">425</td>
                <td className="routine-cell room-no">425</td>
                <td className="routine-cell room-no">425</td>
                <td className="routine-cell room-no">425</td>
              </tr>
              <tr className="routine-row">
                <td className="routine-cell routine-time" rowSpan={2}>
                  7:45
                </td>
                <td className="routine-cell routine-header">Sub</td>
                <td className="routine-cell">WTI</td>
                <td className="routine-cell">WTI</td>
                <td className="routine-cell">WTI</td>
                <td className="routine-cell">DSA</td>
                <td className="routine-cell">FA</td>
              </tr>
              <tr className="routine-row">
                <td className="routine-cell routine-header">Room</td>
                <td className="routine-cell room-no">425</td>
                <td className="routine-cell room-no">Lab-B</td>
                <td className="routine-cell room-no">425</td>
                <td className="routine-cell room-no">Lab-D</td>
                <td className="routine-cell room-no">425</td>
              </tr>
              <tr className="routine-row">
                <td className="routine-cell routine-time" rowSpan={2}>
                  9:30
                </td>
                <td className="routine-cell routine-header">Sub</td>
                <td className="routine-cell">MPCA</td>
                <td className="routine-cell">DSA</td>
                <td className="routine-cell">B.Stat</td>
                <td className="routine-cell">MPCA</td>
                <td className="routine-cell">B.Stat</td>
              </tr>
              <tr className="routine-row">
                <td className="routine-cell routine-header">Room</td>
                <td className="routine-cell room-no">Lab-B</td>
                <td className="routine-cell room-no">425</td>
                <td className="routine-cell room-no">Lab-D</td>
                <td className="routine-cell room-no">425</td>
                <td className="routine-cell room-no">425</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Routine;
