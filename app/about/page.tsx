import Header from "@/components/header/header";
import SummaryContent from "./components/summaryContent/summaryContent";
import WorkExperience from "./components/workExperience/workExperience";
import Courses from "./components/courses/courses";
import Footer from "@/components/footer/footer";
import Resume from "./components/resume/resume";
import Cover from "@/components/coverSection/cover";

const About = () => {
  return (
    <>
      <Header
        title={"Halyna Harasymovych"}
        subtitle={"Let's get acquainted, shall we?"}
      />
      <Cover />
      <SummaryContent />
      <WorkExperience />
      <Courses />
      <Resume />
      <Footer />
    </>
  );
};

export default About;
