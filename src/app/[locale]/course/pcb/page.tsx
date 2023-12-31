import PageLayout from "@src/components/PageLayout";
import CoverImage from "@public/image/course/pcb/circuit.jpg";
import MainImage from "@public/image/course/pcb/pcb-board.jpg";
import CourseHeader from "@src/components/Course/CourseHeader";
import PcbDescription from "@src/components/Pcb/PcbDescription";
import PcbProcedure from "@src/components/Pcb/PcbProcedure";
import PcbLabDescription from "@src/components/Pcb/PcbLabDescription";
import PcbLabDevice from "@src/components/Pcb/PcbLabDevice";
import PcbEducationDescription from "@src/components/Pcb/PcbEducationDescription";
import PcbEducationVideo from "@src/components/Pcb/PcbEducationVideo";
import PcbCourses from "@src/components/Pcb/PcbCourses";

export default function PcbPage() {
  return (
    <PageLayout>
      <CourseHeader
        bgImage={CoverImage}
        mainImage={MainImage}
        title={"PCB"}
        subtitle={"Innovate. Apply. Discover."}
      />
      <PcbDescription />
      <PcbProcedure />
      <PcbLabDescription />
      <PcbLabDevice />
      <PcbEducationDescription />
      <PcbEducationVideo />
      <PcbCourses />
    </PageLayout>
  );
}
