import resumepdf from '../../assets/pdf/RESUME_Mr.HuiPan-ReactP.pdf';
// import "react-pdf/dist/esm/Page/TextLayer.css";
import { Document, Page } from 'react-pdf';


export default function Resume() {

  return (
    <section id="resume">
    <div className="media container d-flex justify-content-center main-content">
    <div className="media-body row resume-content">
      <div className="download d-flex justify-content-end mr-2 mb-2">
        <a href={resumepdf} download>Download My Resume</a>
      </div>
      <div className="carli-rez d-flex justify-content-center">
      <Document className="ch-res img-fluid" file={resumepdf}>
      <Page pageNumber={1} />
      </Document>
      </div>
    </div>
  </div>
  </section>
  );
}
