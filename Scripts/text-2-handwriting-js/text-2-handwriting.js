const download = document.querySelector('.text-2-handwriting .text-2-handwriting-body .download');
const handwritingField = document.querySelector('.text-2-handwriting .text-2-handwriting-body .handwriting-selection .handwriting-selector');
const textField = document.querySelector('.text-2-handwriting .text-2-handwriting-body .text-selector');

const text2HwOutput = document.querySelector('.text-2-handwriting-output');

const lineSpacingSelector = document.querySelector('#line-space-text2handwriting');
const fontSizeSelector = document.querySelector('#font-size-text2handwriting');
const pageMarginSelector = document.querySelector('#page-margin-text2handwriting');

var lineSpacing = lineSpacingSelector.value || 9;
var pageMargin = pageMarginSelector.value || 25;
var fontSize = fontSizeSelector.value || 20;

const handwritings = [
    {
        name: "12 . Jugal Shrestha",
        id: "12",
        fontName: "handwriting-12",
        font: "handwriting-12.ttf",
    },
]

//determines what roll no id is it
const handwritingID = handwritings[0].id;

//determine the selected font
var selectedHandwriting = handwritings[0].font;
//determine the selected font name
const selectedHandwritingNameInitial = handwritings[0].fontName;            
//used in the textarea font
textField.style.fontFamily = selectedHandwritingNameInitial;

handwritings.forEach(text=>{
    const handwritingOption = document.createElement('option');
    handwritingOption.textContent = text.name.trim();
    handwritingField.appendChild(handwritingOption);
})

//selection of handwriting
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

//selection of customization
lineSpacingSelector.addEventListener('input',()=>{
    if(lineSpacingSelector.value<5)
    {
        lineSpacing = 5
    }
    else if(lineSpacingSelector.value>10)
    {
        lineSpacing = 10
    }
    else{
        lineSpacing = lineSpacingSelector.value;
    }
    text2handwritingConvertionOutput();
})
pageMarginSelector.addEventListener('input',()=>{
    if(pageMarginSelector.value<10)
    {
        pageMargin = 10
    }
    else if(pageMarginSelector.value>35)
    {
        pageMargin = 35
    }
    else{
        pageMargin = pageMarginSelector.value;
    }
    text2handwritingConvertionOutput();
})
fontSizeSelector.addEventListener('input',()=>{
    if(fontSizeSelector.value<14)
    {
        fontSize = 14
    }
    else if(fontSizeSelector.value>24)
    {
        fontSize = 24
    }
    else{
        fontSize = fontSizeSelector.value;
    }
    text2handwritingConvertionOutput();
})


//downloading and showing of output
download.addEventListener('click',text2handwritingConvertionDownload);
const deviceWidth = window.innerWidth;
if(deviceWidth>980)
{
    text2handwritingConvertionOutput();
    textField.addEventListener('input',text2handwritingConvertionOutput);
}

window.jsPDF = window.jspdf.jsPDF;

//Downloads  the pdf plus opens the pdf in a new window
function text2handwritingConvertionDownload(){
    var doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
    })

    // Set font size and font type
    doc.setFontSize(fontSize);
    doc.addFont('./fonts/'+selectedHandwriting,'Handwriting','normal');
    doc.setFont("Handwriting");
    let text = textField.value;
    let margin = parseInt(pageMargin);

    // Set initial position
    let x = margin;
    let y = margin;

    // Calculate available width for text
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const availableHeight = pageHeight - (2 * margin);
    const availableWidth = pageWidth - margin; // Leave 15 units margin on each side
    
    // Split the text into multiple lines within the document's width
    var lines = doc.splitTextToSize(text, availableWidth - margin);

    // Loop through each line and add it to the PDF
    lines.forEach(line=>{
      if(y > ( availableHeight + margin + lineSpacing))
      {
        doc.addPage("a4","p");
        y = margin;
      }
      doc.text(line,x,y);
      y = y + parseInt(lineSpacing);

    })
    doc.save(handwritingID+'-assignment.pdf');
}

//Shows the output of the pdf only no download
function text2handwritingConvertionOutput(){
    var doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
    })

    doc.setFontSize(fontSize);
    doc.addFont('./fonts/'+selectedHandwriting,'Handwriting','normal');
    doc.setFont("Handwriting");

    let text = textField.value;
    let margin = parseInt(pageMargin);

    // Set initial position
    let x = margin;
    let y = margin;

    // Calculate available width for text
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const availableHeight = pageHeight - (2 * margin);
    const availableWidth = pageWidth - margin; // Leave 15 units margin on each side
    
    // Split the text into multiple lines within the document's width
    var lines = doc.splitTextToSize(text, availableWidth - margin);

    // Loop through each line and add it to the PDF
    lines.forEach(line=>{
      if(y > ( availableHeight + margin + lineSpacing))
      {
        doc.addPage("a4","p");
        y = margin;
      }
      doc.text(line,x,y);
      y = y + parseInt(lineSpacing);

    })
    const output = doc.output('datauristring');
    text2HwOutput.src = output;
}