import {
  Heart,
  Users,
  CheckCircle,
  Shield,
  Home,
  Sparkles,
} from "lucide-react";

export default function Mission() {
  return (
    <section id="mission" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-10">
            Our Mission
          </h2>

          {/* Stats Row with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">20 years</div>
              <div className="text-gray-600">helping pets in need</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">15K+</div>
              <div className="text-gray-600">shelter and rescue partners</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">223K+</div>
              <div className="text-gray-600">successful adoptions</div>
            </div>
          </div>
        </div>

        {/* Mission Statement Content */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                At CanineConnect, we believe every pet deserves a loving home,
                and every family deserves the joy of unconditional
                companionship. Our mission is to revolutionize pet adoption by
                creating meaningful connections between rescue animals and their
                perfect families.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                We understand that finding the right pet is more than just
                browsing photos—it's about compatibility, lifestyle, and
                creating lasting bonds. That's why we've built an intelligent
                platform that goes beyond traditional adoption websites, using
                advanced matching algorithms to connect pets with families based
                on personality, needs, and lifestyle compatibility.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Our comprehensive network spans thousands of shelters, rescue
                organizations, and foster families across the country. We're
                committed to transparency, providing detailed pet profiles,
                health records, and behavioral assessments to ensure every
                adoption is informed and successful. From senior dogs seeking
                quiet retirement homes to energetic puppies ready for adventure,
                we celebrate the unique story of every animal in our care.
              </p>

              {/* Mission Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Trust & Safety
                    </h3>
                    <p className="text-gray-600">
                      Rigorous vetting of all partners and comprehensive health
                      screenings for every pet.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Community Support
                    </h3>
                    <p className="text-gray-600">
                      Ongoing support from adoption to integration, building
                      lasting relationships.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <Home className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Perfect Matches
                    </h3>
                    <p className="text-gray-600">
                      Smart matching technology that considers lifestyle,
                      experience, and preferences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Second Chances
                    </h3>
                    <p className="text-gray-600">
                      Every pet deserves love, regardless of age, breed, or past
                      circumstances.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mt-10">
                <p className="text-lg text-gray-900 text-center font-semibold">
                  Together, we're not just finding homes for pets—we're creating
                  families, building communities, and proving that love knows no
                  boundaries. Join us in making every tail wag count.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
