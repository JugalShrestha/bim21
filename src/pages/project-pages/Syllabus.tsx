import { Link } from "react-router-dom";
import GoBackBtn from "../../components/GoBackBtn";
import rootBranch from "../../components/variables/rootBranch";

const Syllabus = () => {
  return (
    <section className="syllabus-page" id="page">
      <GoBackBtn />
      <div className="header">
        <div className="main-header">Syllabus</div>
        <div className="sub-header">Syllabus for 1-8 semesters</div>
      </div>
      <div className="syllabus-body">
        <ul className="semester-options">
          <li className="semester-option">
            <Link to={rootBranch + "/pdf/syllabus/2nd-sem.pdf"} target="_blank">
              2
            </Link>
          </li>
          <li className="semester-option">
            <Link to={rootBranch + "/pdf/syllabus/3rd-sem.pdf"} target="_blank">
              3
            </Link>
          </li>
          <li className="semester-option syllabus-1-8">
            <Link
              to={rootBranch + "/src/assets/pdf/syllabus/whole-syllabus.pdf"}
              target="_blank"
            >
              BIM-COURSE-STRUCTURE.pdf
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Syllabus;
