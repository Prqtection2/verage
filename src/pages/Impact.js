import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Impact() {
  const impactData = {
    localSourcing: {
      title: "Local Sourcing",
      description: "We partner with over 20 local farms within a 50-mile radius, ensuring the freshest ingredients while supporting our community's agricultural heritage.",
      stats: ["85% locally sourced ingredients", "20+ farm partnerships", "50-mile radius"]
    },
    sustainability: {
      title: "Sustainability",
      description: "Our commitment to the environment extends from our kitchen to our dining room, with comprehensive recycling and composting programs.",
      stats: ["Zero food waste policy", "100% renewable energy", "Plastic-free packaging"]

    },
    community: {
      title: "Community Impact",
      description: "Through our community programs, we're creating a more sustainable food system, offering education and support to aspiring plant-based chefs.",
      stats: ["Monthly cooking workshops", "Youth education program", "Community garden support"]
    }
  };

  return (
    <div className="min-h-screen bg-[#261C15] overflow-x-hidden">
      {/* Abstract Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20vh] right-[-10vw] w-[60vw] h-[60vh] bg-[#66A182] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-[-20vh] left-[-15vw] w-[50vw] h-[50vh] bg-[#AEF78E] rounded-full opacity-5 blur-3xl"></div>
      </div>

      {/* Navigation Bar - Floating Style */}
      <div className="fixed top-[3vh] left-0 right-0 z-50">
        <nav className="max-w-[90vw] mx-auto bg-[#66A182]/10 backdrop-blur-md rounded-full py-[2vh] px-[4vw]">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="text-[#FF6F61] font-koulen text-[min(3.5vh,2.5vw)]">
              THE VERAGE
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-[4vw]">
              {['MENU', 'RESERVE', 'OUR IMPACT', 'CONTACT', 'REFERENCES'].map((item) => (
                <Link 
                  key={item}
                  to={`/${item.toLowerCase().replace(' ', '') === 'ourimpact' ? 'impact' : item.toLowerCase()}`}
                  className="text-[#CAFFB9] text-[min(2.2vh,1.6vw)] font-koulen tracking-wider relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#CAFFB9] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-[1vw]">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-[4vh] h-[4vh] rounded-full bg-[#66A182]/10 flex items-center justify-center
                         hover:bg-[#66A182] transition-all duration-300 group"
              >
                <FaFacebookF className="text-[#CAFFB9] group-hover:text-[#261C15]" size={16} />
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-[4vh] h-[4vh] rounded-full bg-[#66A182]/10 flex items-center justify-center
                         hover:bg-[#66A182] transition-all duration-300 group"
              >
                <FaInstagram className="text-[#CAFFB9] group-hover:text-[#261C15]" size={16} />
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="pt-[15vh] px-[8vw] pb-[10vh] relative">
        {/* Main Title */}
        <div className="text-center mb-[8vh] relative">
          <h1 className="text-[#FF6F61] text-[min(10vh,8vw)] font-koulen mb-[2vh]">Our Impact</h1>
          <div className="flex items-center gap-4 justify-center">
            <div className="w-[8vw] h-[3px] bg-[#66A182] opacity-50"></div>
            <span className="text-[#CAFFB9] text-[min(2.5vh,2vw)] tracking-[0.3em] font-light">MAKING A DIFFERENCE</span>
            <div className="w-[8vw] h-[3px] bg-[#66A182] opacity-50"></div>
          </div>
        </div>

        {/* Impact Sections */}
        <div className="grid gap-[10vh]">
          {Object.entries(impactData).map(([key, section], index) => (
            <div key={key} className="relative">
              {/* Decorative Line */}
              <div className="absolute -left-[3vw] top-[5vh] w-[2px] h-[15vh] bg-[#66A182] opacity-30"></div>
              
              <div className={`grid md:grid-cols-2 gap-[4vw] items-center ${index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                {/* Text Content */}
                <div className="space-y-[4vh]">
                  <h2 className="text-[#CAFFB9] text-[min(6vh,5vw)] font-koulen">{section.title}</h2>
                  <p className="text-[#CAFFB9]/80 text-[min(2.2vh,1.6vw)] leading-relaxed">
                    {section.description}
                  </p>
                  <div className="grid grid-cols-1 gap-[2vh]">
                    {section.stats.map((stat, i) => (
                      <div 
                        key={i} 
                        className="group flex items-center gap-[2vw]"
                      >
                        <div className="w-[4vw] h-[3px] bg-[#AEF78E] opacity-60 group-hover:w-[6vw] transition-all duration-500"></div>
                        <span className="text-[#CAFFB9] text-[min(2.2vh,1.6vw)] font-koulen">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Element */}
                <div className="relative group">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img 
                      src={`${process.env.PUBLIC_URL}/impact-${index + 1}.jpg`}
                      alt={section.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#261C15]/80 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-[15vh]">
          <h2 className="text-[#FF6F61] text-[min(6vh,5vw)] font-koulen mb-[4vh]">Join Our Mission</h2>
          <p className="text-[#CAFFB9]/90 text-[min(2.5vh,2vw)] max-w-[60vw] mx-auto mb-[6vh]">
            Experience sustainable dining while making a positive impact on our community and environment.
          </p>
          <Link 
            to="/reserve"
            className="inline-block px-[4vw] py-[2vh] bg-[#66A182] text-[#261C15] font-koulen 
                     text-[min(2.5vh,2vw)] rounded-lg hover:bg-[#66A182]/90 transition-all 
                     duration-300 hover:translate-y-[-2px]"
          >
            RESERVE A TABLE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Impact; 