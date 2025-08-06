import { Link } from "react-router";
import ScoreCircle from "./ScoreCircle";

const ResumeCard = ({ resume }: { resume: any }) => {
  return (
    // <Link to={`/resume/${resume.id}`} className="resume-card animate-in fade-in duration-1000">
    //   <div className="flex flex-col gap-2">
    //     <h2 className="text-black font-bold break-words">{resume.companyName}</h2>
    //     <h3 className="text-lg break-words text-gray-500">{resume.jobTitle}</h3>
    //   </div>
    //   <div className="flex shrink-0">
    //     <ScoreCircle score={resume.feedback.overallScore} />
    //   </div>
    // </Link>
 
    <Link to={`/resume/${resume.id}`} className="resume-card animate-in fade-in duration-1000 bg-white p-5 rounded-xl shadow-md block">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <h2 className="text-black font-bold break-words">{resume.companyName}</h2>
          <h3 className="text-lg break-words text-gray-500">{resume.jobTitle}</h3>
        </div>
        <div className="flex shrink-0">
          <ScoreCircle score={resume.feedback.overallScore} />
        </div>
      </div>
    </Link>
  );
};


export default ResumeCard;