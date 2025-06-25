import { Calendar } from "lucide-react";
import { milestones, values } from "@/constants/aboutUsData";

export default function AboutUs() {
  return (
    <section id="about-us" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About CanineConnect
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            For over 20 years, we've been dedicated to one simple belief: every
            pet deserves a loving home, and every family deserves the perfect
            companion. Here's our story.
          </p>
        </div>

        {/* Origin Story */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-blue-100 p-4 rounded-full mr-4">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
              <p className="text-gray-600">How CanineConnect came to life</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              CanineConnect was born in 2004 from a simple observation: amazing
              pets were waiting in shelters while loving families searched
              endlessly for their perfect companion. Our founder, Sarah Chen,
              spent countless weekends volunteering at local animal shelters in
              California, witnessing heartbreaking scenes of wonderful animals
              being overlooked simply because the right families couldn't find
              them.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The turning point came when Sarah met Max, a gentle three-year-old
              golden retriever who had been returned to the shelter twice
              through no fault of his own. The families just weren't the right
              fit. That's when Sarah realized that pet adoption needed more than
              just photos and basic descriptions—it needed intelligent matching
              based on lifestyle, personality, and compatibility.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              What started as a small website connecting Bay Area families with
              local shelters has grown into the nation's most trusted pet
              adoption platform. Today, we're proud to serve families across all
              50 states, but our mission remains the same: creating perfect
              matches that last a lifetime.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className={`${milestone.bgColor} p-3 rounded-lg mr-4`}>
                      <IconComponent
                        className={`w-6 h-6 ${milestone.iconColor}`}
                      />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {milestone.year}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {milestone.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className={`${value.bgColor} border-2 ${value.borderColor} rounded-xl p-6`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <IconComponent className="w-8 h-8 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        {value.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Impact Today
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">223K+</div>
              <div className="text-gray-700">Successful Adoptions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">15K+</div>
              <div className="text-gray-700">Partner Organizations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50</div>
              <div className="text-gray-700">States Served</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 font-medium">
              Every number represents a life changed, a family completed, and a
              future filled with love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
