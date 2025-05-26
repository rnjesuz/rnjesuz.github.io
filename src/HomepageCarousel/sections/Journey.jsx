import { educationData } from "../data/education";
import { accreditationData } from "../data/accreditations";
import { careerData } from "../data/career";
import { GraduationCap, Medal, Briefcase } from "lucide-react";

const Journey = () => (
  <div className="w-full h-full p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left overflow-y-auto">
    <div>
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="mt-12">
        {educationData.map((school, index) => (
          <div key={index} className="relative pl-8 pb-8 border-l border-gray-300">
            <h3 className="text-lg font-semibold mb-2">{school.school}</h3>
            {school.degrees.map((degree, i) => (
              <div key={i} className="relative pl-8 pb-8">
                <div className="absolute left-[-12px] top-0 bg-white z-10">
                  <GraduationCap className="w-5 h-5 text-blue-500" />
                </div>
                <h4 className="text-md font-semibold">{degree.title}</h4>
                <h5 className="text-sm font-semibold">{degree.subtittle}</h5>
                <p className="text-xs text-gray-400 italic mb-1">{degree.date}</p>
                <p className="text-sm mb-2 whitespace-pre-line">{degree.description}</p>
                <div className="flex flex-wrap gap-2">
                  {degree.keywords.map((kw, idx) => (
                    <span key={idx} className="bg-gray-200 text-xs px-2 py-1 rounded-full">{kw}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-12">
        {accreditationData.map((accreditation, index) => (
          <div key={index} className="relative pl-8 pb-8 border-l border-gray-300">
            <h3 className="text-lg font-semibold mb-2">{accreditation.accreditation}</h3>
            {accreditation.certifications.map((certification, i) => (
              <div key={i} className="relative pl-8 pb-8">
                <div className="absolute left-[-12px] top-0 bg-white z-10">
                  <Medal className="w-5 h-5 text-green-500" />
                </div>
                <h4 className="text-md font-semibold">{certification.title}</h4>
                <p className="text-sm text-gray-500">{certification.issuer}</p>
                <p className="text-xs text-gray-400 italic mb-1">{certification.date}</p>
                <div className="flex flex-wrap gap-2">
                  {certification.keywords.map((kw, idx) => (
                    <span key={idx} className="bg-gray-200 text-xs px-2 py-1 rounded-full">{kw}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>

    <div>
      <h2 className="text-2xl font-bold mb-4">Career</h2>
      <div className="relative pl-8 border-l border-gray-300">
        {careerData.map((company, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-lg font-semibold mb-2">{company.company}</h3>
            {company.roles.map((role, i) => (
              <div key={i} className="relative pl-8 pb-8">
                <div className="absolute left-[-12px] top-0 bg-white z-10">
                  <Briefcase className="w-5 h-5 text-black" />
                </div>
                <h4 className="text-md font-semibold">{role.title}</h4>
                <p className="text-xs text-gray-400 italic mb-1">{role.date}</p>
                <p className="text-sm mb-2 whitespace-pre-line">{role.description}</p>
                <div className="flex flex-wrap gap-2">
                  {role.keywords.map((kw, idx) => (
                    <span key={idx} className="bg-gray-200 text-xs px-2 py-1 rounded-full">{kw}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Journey;
