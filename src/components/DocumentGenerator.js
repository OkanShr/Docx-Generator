import React from "react";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";
import WordForm from "./WordForm";
// Load the template file
import templateFile from "./template.docx";

const DocumentGenerator = () => {
  const generateDocument = async (formData) => {
    try {
      // Fetch the template file
      const response = await fetch(templateFile);
      const arrayBuffer = await response.arrayBuffer();
      const zip = new PizZip(arrayBuffer);
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });

      // Replace placeholders with form data
      doc.setData(formData);

      // Render the document
      try {
        doc.render();
      } catch (error) {
        console.error("Error rendering document:", error);
        throw error;
      }

      // Generate the document blob
      const out = doc.getZip().generate({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });

      // Save the generated document
      saveAs(out, "generated_document.docx");
    } catch (error) {
      console.error("Error generating document:", error);
    }
  };

  return (
    <div>
      <h1>Generate Word Document</h1>
      <WordForm onGenerate={generateDocument} />
    </div>
  );
};

export default DocumentGenerator;
