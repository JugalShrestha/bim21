import { useLocation } from "react-router-dom";
import GoBackBtn from "../components/GoBackBtn";
import noteData from "../components/variables/noteData";
import rootBranch from "../components/variables/rootBranch";
import { useState } from "react";

interface Props {
  noteId: string;
}

const NotePage: React.FC<Props> = ({ noteId }) => {
  const location = useLocation();
  const note = new URLSearchParams(location.search);
  const result = note.get("query") || "";
  if (result !== "") {
    noteId = result;
  }
  let link = "";
  let name = "";
  let lab = "";
  noteData.forEach((data) => {
    if (data.id == noteId) {
      link = data.link;
      name = data.subject;
      data.lab?lab = data.lab:lab="";
    }
  });

  const [fullscreen, setFullscreen] = useState(false);

  const HandleFullScreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <section className="note-page" id="page">
      <GoBackBtn />
      {name ? (
        <div className="header">
          <div className="main-header">{name}</div>
          <div className="sub-header">
            this is all the relevant content to " {name} "
          </div>
        </div>
      ) : (
        (window.location.href = rootBranch + "/na")
      )}
      {link && (
        <>
          <div
            className={fullscreen ? "note-output fullscreen" : "note-output"}
          >
            <div className="iframe-controllers">
              <div onClick={HandleFullScreen} className="iframe-controller">
                {fullscreen ? "Minimize Screen" : "Fullscreen"}
              </div>
              <a
                href={link}
                className="iframe-controller"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Docs
              </a>
              {
                lab?
                <a
                  href={lab}
                  className="iframe-controller"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lab Reports
                </a>:
                ""
              } 
            </div>
            <iframe src={link}></iframe>
          </div>
        </>
      )}
    </section>
  );
};

export default NotePage;
