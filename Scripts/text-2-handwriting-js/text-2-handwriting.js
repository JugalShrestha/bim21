const download = document.querySelector('.text-2-handwriting .text-2-handwriting-body .download');
const handwritingField = document.querySelector('.text-2-handwriting .text-2-handwriting-body .handwriting-selection .handwriting-selector');
const textField = document.querySelector('.text-2-handwriting .text-2-handwriting-body .text-selector');

const handwritings = [
    {
        name: "12 . Jugal Shrestha",
        id: "12",
        fontName: "handwriting-12",
        font: "handwriting-12.ttf",
    },
]
const handwritingID = handwritings[0].id;

var selectedHandwriting = handwritings[0].font;
const selectedHandwritingNameInitial = handwritings[0].fontName;            
textField.style.fontFamily = selectedHandwritingNameInitial;

handwritings.forEach(text=>{
    const handwritingOption = document.createElement('option');
    handwritingOption.textContent = text.name.trim();
    handwritingField.appendChild(handwritingOption);
})

handwritingField.addEventListener('change',()=>{
    const handwritingPartition = handwritingField.value.split('.');
    handwritingID = handwritingPartition[0].trim();
    handwritings.forEach(text=>{
        if(text.id == handwritingID)
        {
            selectedHandwriting = text.font;
            const selectedHandwritingNamePartition = selectedHandwriting.split('.');
            const selectedHandwritingName = selectedHandwritingNamePartition[0].trim();
            textField.style.fontFamily = selectedHandwritingName;
        }
    })
})



download.addEventListener('click',text2handwritingConvertion);

window.jsPDF = window.jspdf.jsPDF;

function text2handwritingConvertion(){
    var doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
    })

    // Set font size and font type
    const fontSize = 18;
    doc.setFontSize(fontSize);
    doc.addFont('./fonts/'+selectedHandwriting,'Handwriting','normal');
    doc.setFont("Handwriting");

    let text = textField.value;
    let margin = 25;

    // Set initial position
    let x = margin;
    let y = margin;

    // Calculate available width for text
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const availableHeight = pageHeight - (2 * margin);
    const availableWidth = pageWidth - (2 * margin) + margin; // Leave 15 units margin on each side
    
    // Split the text into multiple lines within the document's width
    var lines = doc.splitTextToSize(text, availableWidth-fontSize);

    // Loop through each line and add it to the PDF
    lines.forEach(line=>{
      if(y >= ( availableHeight + margin))
      {
        doc.addPage("a4","p");
        y = margin;
      }
      doc.text(x, y, line);
      y += 10;

    })
    window.open(doc.output('bloburl'), '_blank');
    doc.save(handwritingID+"-assignment.pdf");
}

