import GoBackBtn from "../../components/GoBackBtn";

const MicroprocessorAndCANote = () => {
  const noteUrl =
    "https://docs.google.com/document/d/1klAT3rWaDuxUmZ4UVYeAOYxg7ub4bS-NI9GevtIVYvk/edit?usp=sharing";
  return (
    <section className="note-page" id="page">
      <GoBackBtn />
      <a
        className="note-link"
        href={noteUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Link to the note!
      </a>
      <iframe className="note-output" src={noteUrl}></iframe>
    </section>
  );
};

export default MicroprocessorAndCANote;
