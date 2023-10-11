import React, { useState } from "react";
import CoverpageGeneratorOutput from "./CoverpageGeneratorOutput";
import GoBackBtn from "../../../components/GoBackBtn";
import studentData from "../../../components/variables/studentData";
import subjectData from "../../../components/variables/subjectData";

const CoverpageGenerator = () => {
  const [rollNo, setRollNo] = useState("");
  const [subject, setSubject] = useState("");
  const [reportNo, setReportNo] = useState("");
  const [title, setTitle] = useState("");

  const handleRollNoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRollNo(e.target.value);
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubject(e.target.value);
  };

  const handleReportNoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReportNo(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  //to divide subject into group of semesters
  let semesterCounter = 1;

  return (
    <section className="cover-page-generator-page" id="page">
      <GoBackBtn />
      <div className="header">
        <div className="main-header">Coverpage Generator</div>
        <div className="sub-header">
          This is for the automation of coverpage for BIM2021 only!
        </div>
      </div>
      <div className="generator-whole">
        <div className="generator-body">
          <div className="input-field">
            <div className="roll-no">
              <div className="header">Roll-No:</div>
              <div className="selector-wraper">
                <select
                  onChange={handleRollNoChange}
                  name="roll-no-selector"
                  className="roll-no-selector"
                >
                  <option value="">Select a roll no.</option>
                  {studentData.map(
                    (data, index) =>
                      data.name !== "" && (
                        <option key={index} value={data.name}>
                          {index + 1} - {data.name}
                        </option>
                      )
                  )}
                </select>
              </div>
            </div>
            <div className="subject">
              <div className="header">Subject:</div>
              <select
                onChange={handleSubjectChange}
                name="subject-selector"
                className="subject-selector"
              >
                <option value="">Select a Subject</option>
                <optgroup
                  label={"semester " + semesterCounter.toString()}
                ></optgroup>
                {subjectData.map((data, index) => (
                  <React.Fragment key={index}>
                    {data.sem > semesterCounter && (
                      <>
                        {semesterCounter++}
                        <optgroup
                          key={index}
                          label={"semester " + semesterCounter.toString()}
                        ></optgroup>
                      </>
                    )}
                    <option key={index} value={data.name}>
                      {data.name}
                    </option>
                  </React.Fragment>
                ))}
              </select>
            </div>
            <div className="report-no-selector">
              <div className="header">lab-number:</div>
              <input
                value={reportNo}
                onChange={handleReportNoChange}
                autoComplete="off"
                placeholder="For eg: 12"
                type="text"
                name="report-no"
              />
            </div>
            <div className="title-selector">
              <div className="header">Title</div>
              <input
                value={title}
                onChange={handleTitleChange}
                autoComplete="off"
                name="report-title"
                placeholder="For eg: Report on..."
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sub-header">
        Convert .pdf to .docx
        <a
          href="https://pdf2docx.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          pdf2docx.com
        </a>
      </div>
      <CoverpageGeneratorOutput
        rollNoProp={rollNo}
        subjectProp={subject}
        titleProp={title}
        reportNoProp={reportNo}
      />
    </section>
  );
};

export default CoverpageGenerator;
