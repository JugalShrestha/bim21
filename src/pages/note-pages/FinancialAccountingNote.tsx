import GoBackBtn from "../../components/GoBackBtn";

const FinancialAccountingNote = () => {
  const noteUrl =
    "https://docs.google.com/document/d/14Lc3CDdz3A4Vm2STgH0tW3XbNw9GNfJOzqh7b4UNd18/edit?usp=sharing";
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

export default FinancialAccountingNote;
