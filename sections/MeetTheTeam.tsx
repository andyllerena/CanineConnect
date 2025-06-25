import { User } from "lucide-react";
import { teamMembers } from "@/constants/teamMember";

import React from "react";

function MeetTheTeam() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Meet The Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The passionate people behind CanineConnect who are dedicated to
            making every pet adoption a success story.
          </p>
        </div>
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Avatar Placeholder */}
              <div className="flex justify-center mb-6">
                <div className={`${member.bgColor} p-6 rounded-full`}>
                  <User className={`${member.iconColor} w-12 h-12`} />
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div
                  className={`inline-block px-3 py-1 rounded-full mb-4 ${member.bgColor}`}
                >
                  <span className={`text-semibold text-sm ${member.iconColor}`}>
                    {member.role}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {member.description}
                </p>
              </div>
              <div className="bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg p-4 ">
                <p className="text-sm font-medium text-gray-500 mb-1">
                  Fun Fact:
                </p>
                <p className="text-gray-700 italic">{member.funFact}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-lg text-gray-900 font-semibold">
              Want to join our mission? We're always looking for passionate
              people who believe every pet deserves a loving home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetTheTeam;
