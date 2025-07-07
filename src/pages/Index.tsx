import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ArrowUp } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-sky-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
              Bali Beach Sports & Surf Arena
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection("vision")} className="text-gray-700 hover:text-sky-600 transition-colors">Vision</button>
              <button onClick={() => scrollToSection("facilities")} className="text-gray-700 hover:text-sky-600 transition-colors">Facilities</button>
              <button onClick={() => scrollToSection("bali")} className="text-gray-700 hover:text-sky-600 transition-colors">Bali</button>
              <button onClick={() => scrollToSection("impact")} className="text-gray-700 hover:text-sky-600 transition-colors">Impact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/355adb54-9001-4bdc-a082-c58ed6bd656c.png" 
            alt="Bali Beach Sports Arena Master Plan" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/40 to-emerald-400/40"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <Badge className="mb-6 bg-sky-100 text-sky-800 hover:bg-sky-200 px-4 py-2 text-sm font-medium">
            World's First Integrated Beach Sports Destination
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-600 via-emerald-600 to-sky-800 bg-clip-text text-transparent leading-tight">
            Bali Beach Sports
            <br />
            & Surf Arena
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            A Global Destination for Beach, Water, and Action Sports – Integrated with Wellness, 
            Eco-Luxury, and World-Class Events. Experience Elite Sports, Perfect Waves, 
            Family Fun & Holistic Wellness in the Heart of Paradise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-700 hover:to-emerald-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection("vision")}
            >
              Explore the Vision
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-sky-600" />
        </div>
      </section>

      {/* The Vision Section */}
      <section id="vision" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">The Vision & What We're Creating</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The world's first fully integrated beach sports, surf circuit, and wellness destination anchored by a volcanic water park experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Masterplan Layout</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-sky-600 rounded-full"></div>
                  <span className="text-gray-700"><strong>Main Indoor Arena:</strong> Central hub for indoor court-based sports</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700"><strong>Water Park with Volcano:</strong> Core adventure zone with 16 attractions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700"><strong>Surfing & Wakeboarding Circuits:</strong> URBNSURF wave technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700"><strong>Accommodation Pods:</strong> 300 unique eco-luxury rooms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700"><strong>Training Academies:</strong> Professional coaching programs</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/8f514cf2-fb7d-466f-ad33-69324b98400e.png" 
                alt="Wellness and spa facilities" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Unrivaled Facilities Section */}
      <section id="facilities" className="py-20 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Unrivaled Facilities: A Visual Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the most comprehensive beach sports and wellness destination ever created
            </p>
          </div>

          {/* Main Indoor Arena */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">🏛️ Main Indoor Sports Arena</h3>
                <p className="text-lg text-gray-700 mb-6">
                  The project centerpiece featuring convertible courts for maximum versatility and year-round play.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-sky-50 p-3 rounded-lg">
                    <strong>6 Beach Tennis Courts</strong><br/>
                    <span className="text-gray-600">Convertible to Beach Volleyball & Badminton</span>
                  </div>
                  <div className="bg-emerald-50 p-3 rounded-lg">
                    <strong>6 Paddle Courts</strong><br/>
                    <span className="text-gray-600">Professional glass-walled courts</span>
                  </div>
                  <div className="bg-sky-50 p-3 rounded-lg">
                    <strong>6 Pickleball Courts</strong><br/>
                    <span className="text-gray-600">Fast-growing sport facilities</span>
                  </div>
                  <div className="bg-emerald-50 p-3 rounded-lg">
                    <strong>4 Tennis Courts</strong><br/>
                    <span className="text-gray-600">Professional-grade surfaces</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/fa0f0e70-1ba2-445c-94d0-9078430b323a.png" 
                  alt="Training facilities and indoor arena" 
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Outdoor Sports Fields */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative">
                <img 
                  src="/lovable-uploads/d13ea391-095d-4c3c-8fe3-eb3b8ee12b15.png" 
                  alt="Beach cricket tournament" 
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">🌴 Outdoor Sports Fields</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Diverse outdoor facilities for beach sports, traditional games, and unique experiences under the Bali sun.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-sky-50 rounded">
                    <span><strong>Beach Tennis, Paddle, Pickleball</strong></span>
                    <span className="text-sky-600 font-semibold">2 courts each</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-emerald-50 rounded">
                    <span><strong>Outdoor Tennis Courts</strong></span>
                    <span className="text-emerald-600 font-semibold">4 courts</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-sky-50 rounded">
                    <span><strong>Beach Soccer Field</strong></span>
                    <span className="text-sky-600 font-semibold">1 field</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-emerald-50 rounded">
                    <span><strong>Beach Cricket & Handball</strong></span>
                    <span className="text-emerald-600 font-semibold">Dedicated fields</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Volcano Water Park */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="relative inline-block mb-8">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 relative z-10">
                  🌋 Water Park
                </h3>
                <div className="absolute -inset-4 bg-gradient-to-r from-red-100 via-orange-100 to-red-100 rounded-2xl -z-10 opacity-60"></div>
              </div>
              <div className="max-w-4xl mx-auto mb-12">
                <h4 className="text-2xl md:text-3xl font-bold text-red-700 mb-4">Volcano-Centered Adventure Zone</h4>
                <p className="text-xl text-gray-700 leading-relaxed">
                  A massive volcano serves as the spectacular centerpiece, featuring <span className="font-bold text-red-600">16 world-class attractions</span> from extreme thrill rides to family-friendly zones, creating the ultimate aquatic adventure destination.
                </p>
              </div>
            </div>

            {/* Attraction Categories */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Extreme Rides */}
              <div className="relative group">
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-red-50 to-orange-50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-orange-500"></div>
                  <CardContent className="p-8 relative">
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <div className="text-6xl">🔥</div>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl">🔥</span>
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-center text-red-800">Extreme Rides</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="font-semibold text-red-900">Climax</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="font-semibold text-red-900">Smashdown 2.0</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="font-semibold text-red-900">Boomerang</span>
                      </div>
                      <div className="text-center mt-4 p-3 bg-gradient-to-r from-red-100 to-orange-100 rounded-lg">
                        <span className="text-red-800 font-bold">+ 7 more extreme attractions</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Moderate Rides */}
              <div className="relative group">
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-teal-50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-teal-500"></div>
                  <CardContent className="p-8 relative">
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <div className="text-6xl">🌊</div>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl">🌊</span>
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-center text-blue-800">Moderate Rides</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="font-semibold text-blue-900">Constrictor</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="font-semibold text-blue-900">Python</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors">
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="font-semibold text-blue-900">FlowRider</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Family Zone */}
              <div className="relative group">
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                  <CardContent className="p-8 relative">
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <div className="text-6xl">👨‍👩‍👧‍👦</div>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl">👨‍👩‍👧‍👦</span>
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-center text-green-800">Family Zone</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="font-semibold text-green-900">Lazy River</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="font-semibold text-green-900">Aqua Play</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="font-semibold text-green-900">Kids' Attractions</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/e209f56d-3633-4c30-a6cf-2288a2b53e76.png" 
                alt="Volcano water park with exciting slides and attractions" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Experience the Volcanic Adventure</h3>
                  <p className="text-xl opacity-90 max-w-2xl">Where ancient volcanic energy meets modern water park thrills in an unforgettable aquatic journey</p>
                </div>
              </div>
            </div>
          </div>

          {/* Surf & Wake Circuits */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">🏄 Surf Circuit & Wake Park</h3>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">URBNSURF Wave Machine</h4>
                    <p className="text-blue-800 text-sm">Large-scale wave technology with beginner-to-pro surf lanes, viewing terraces, and café lounges</p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-bold text-teal-900 mb-2">Cable Wakeboard Lagoon</h4>
                    <p className="text-teal-800 text-sm">Full-size facility with pro & beginner loops, wake school, and eco-integrated freshwater system</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/c6b09de2-177a-419a-a60e-9c3dad0defb4.png" 
                  alt="Wakeboarding and water sports facilities" 
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Accommodation Zones */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-6 text-gray-900">🏡 Eco-Luxury Accommodation (300 Rooms)</h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Five unique accommodation experiences blended throughout the landscape with elevated views and immersive design.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold mb-3 text-sky-900">🏄 Two-Level Surf Villas</h4>
                  <p className="text-sm text-gray-600">Modern architecture with large balconies and premium views of surf zones and main arena. Perfect for families and athletes.</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold mb-3 text-emerald-900">🎋 Bamboo Bungalow Villas</h4>
                  <p className="text-sm text-gray-600">Ground-level and elevated options with private gardens and open-air showers, integrated near wellness areas.</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold mb-3 text-green-900">🌳 Tree Cocoons</h4>
                  <p className="text-sm text-gray-600">Elevated spherical rooms built into trees with direct surf action views and private walkways.</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold mb-3 text-red-900">🌋 Volcano Cocoon Pods</h4>
                  <p className="text-sm text-gray-600">Egg-shaped bamboo pods connected to the volcano with ultimate panoramic immersion for luxury travelers.</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold mb-3 text-blue-900">🏃 Athlete Dormitories</h4>
                  <p className="text-sm text-gray-600">Shared accommodation blocks for training groups and youth camps, located near competition facilities.</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold mb-3 text-purple-900">🧘 Wellness Retreats</h4>
                  <p className="text-sm text-gray-600">Open-air yoga platforms, detox suites, massage therapy, and hydrotherapy facilities for holistic recovery.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Training Academies */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/7c29aea2-4c5c-4a88-9f88-69c30de2a253.png" 
                  alt="Beach volleyball courts and training facilities" 
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">🧠 Training & Coaching Academies</h3>
                <p className="text-lg text-gray-700 mb-6">
                  World-class coaching programs and youth development initiatives with international partnerships.
                </p>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-sky-50 to-emerald-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">🏆 Pro Coaching Programs</h4>
                    <p className="text-gray-700 text-sm">Elite training for professional athletes across all beach sports disciplines</p>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-50 to-sky-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">👨‍🎓 Youth Camps & Sport Residencies</h4>
                    <p className="text-gray-700 text-sm">Comprehensive youth development programs with accommodation and mentorship</p>
                  </div>
                  <div className="bg-gradient-to-r from-sky-50 to-emerald-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">🌐 International Partnerships</h4>
                    <p className="text-gray-700 text-sm">Collaborations with global sports federations and training institutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bali Advantage */}
      <section id="bali" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/899483fa-2001-43bd-96d4-5adb5f9c7785.png" 
                alt="Beach volleyball facilities in tropical Bali setting" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Bali: Our Home, Our Inspiration</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Bali offers the perfect combination of natural beauty, cultural richness, 
                and strategic location that makes it the ideal home for this revolutionary project.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Perfect Climate</h4>
                    <p className="text-gray-700">Year-round tropical weather ideal for beach sports and outdoor activities, enabling 365-day operation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Strategic Location</h4>
                    <p className="text-gray-700">Central Asia-Pacific hub with excellent international connectivity and established tourism infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Cultural Heritage</h4>
                    <p className="text-gray-700">Rich Balinese culture enhances the wellness and hospitality experience, creating authentic integrated experiences</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Global Tourism Appeal</h4>
                    <p className="text-gray-700">Established destination with millions of annual visitors seeking unique experiences and adventure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Sustainability */}
      <section id="impact" className="py-20 bg-gradient-to-b from-emerald-50 to-sky-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Impact for Bali & Its People</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating profound positive change for Bali's community, environment, and economy through sustainable development
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="grid grid-cols-1 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-3xl">🌱</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Environmental Stewardship</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sustainable design principles, renewable energy integration, water recycling systems, 
                    and marine conservation initiatives protecting Bali's natural beauty for future generations.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-sky-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-3xl">👥</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Community Empowerment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Creating 1,000+ local employment opportunities, comprehensive skills development programs, 
                    youth empowerment initiatives, and meaningful partnerships with Balinese communities and businesses.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/81f9721d-24af-4c23-b7d3-d3c6820d637a.png" 
                alt="Family-friendly water park attractions showcasing community impact" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-sky-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-3xl">📈</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Economic Impact</h3>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Significant economic contribution to Bali through job creation, local sourcing, skills development, 
              and establishing the region as a premier global sports destination that attracts international visitors year-round.
            </p>
          </div>
        </div>
      </section>

      {/* Events & Competitions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">🏆 Events & Competitions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Purpose-built for world-class sporting events and international competitions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl">🏟️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">World-Class Venues</h3>
                <p className="text-gray-700 leading-relaxed">
                  Grandstand seating, VIP lounges, and broadcast studios designed to host 
                  international federations and major sporting events.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Federation Support</h3>
                <p className="text-gray-700 leading-relaxed">
                  Comprehensive athlete services and facilities meeting international 
                  standards for professional competitions and training camps.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl">📺</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Media Ready</h3>
                <p className="text-gray-700 leading-relaxed">
                  State-of-the-art broadcast facilities and media centers capable of 
                  delivering global coverage of major sporting events.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Showcase */}
      <section className="py-20 bg-gradient-to-b from-sky-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="relative">
            <img 
              src="/lovable-uploads/355adb54-9001-4bdc-a082-c58ed6bd656c.png" 
              alt="Complete master plan aerial view of the entire complex" 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">Experience the Future of Beach Sports</h3>
                <p className="text-xl opacity-90">Where innovation meets paradise in Bali, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
              Bali Beach Sports & Surf Arena
            </div>
            <p className="text-gray-400 mb-8">A Global Destination for Beach, Water, and Action Sports</p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2024 Bali Beach Sports & Surf Arena. All rights reserved. | Bali, Indonesia
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-sky-600 to-emerald-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Index;
