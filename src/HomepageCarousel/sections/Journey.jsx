import { educationData } from "../data/education";
import { accreditationData } from "../data/accreditations";
import { careerData } from "../data/career";
import { GraduationCap, Medal, Briefcase } from "lucide-react";

const Journey = () => (
  <div className="w-full h-full p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left overflow-y-auto">

    {/* Career Section */}
    <div>
      <h2 className="text-2xl font-bold mb-4">Career</h2>
      <div className="relative pl-8 border-l border-gray-300">
        {careerData.map((company, index) => (
          <div key={index} className="relative mb-16">
            <div className="absolute left-[-48px] w-8 h-8 border-2 border-black rounded-full flex items-center justify-center top-0 bg-white z-10">
              <Briefcase className="w-5 h-5 text-black" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{company.company}</h3>
            {company.roles.map((role, i) => (
              <div key={i} className="pl-4 mb-6">
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

    {/* Education Section */}
    <div>
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="relative pl-8 border-l border-gray-300">
        {educationData.map((school, index) => (
          <div key={index} className="relative mb-16">
            <div className="absolute -left-[48px] top-0 z-10 w-8 h-8 border-2 border-blue-500 rounded-full bg-white flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-6">{school.school}</h3>
            {school.courses.map((course, courseIndex) => (
              <div key={courseIndex}>
                <h4 className="text-md font-semibold mb-2">{course.title}</h4>
                <p className="text-sm mb-2 whitespace-pre-line">{course.description}</p>
                {course.degrees.map((degree, degreeIndex) => (
                  <div key={degreeIndex} className="pl-4 mb-2">
                    <h4 className="text-md font-semibold">{degree.title}</h4>
                    <p className="text-xs text-gray-400 italic mb-1">{degree.date}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Accreditation Section */}
      <h2 className="text-2xl font-bold mb-4">Certifications</h2>
      <div className="relative pl-8 border-l border-gray-300">
        <div className="relative mb-16">
          <div className="absolute left-[-48px] w-8 h-8 border-2 border-green-500 rounded-full flex items-center justify-center top-0 bg-white z-10">
            <Medal className="w-5 h-5 text-green-500" />
          </div>
          {accreditationData.map((certification, index) => (
            <div key={index} className="relative mb-16">
              <h3 className="text-md font-semibold">{certification.title}</h3>
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
      </div>
    </div>

  </div>
);

export default Journey;
