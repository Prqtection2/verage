import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function References() {
  const references = {
    copyrightForm: {
      title: "Student Copyright Checklist",
      image: "/copyrightform.jpg"
    },
    school: [
      {
        title: "Shadow Creek High School",
        author: "Alvin ISD TSA",
        link: "https://alvinisd.net",
      },
    ],
    design: [
      {
        title: "Icons",
        author: "Font Awesome",
        source: "React Icons",
        link: "https://github.com/react-icons/react-icons",
        license: "CC BY 4.0 LICENSE"
      },
      {
        title: "Koulen Font",

        author: "Danh Hong",
        source: "online-fonts.com",
        link: "https://github.com/danhhong/Koulen",
        license: "SIL Open Font License 1.1"
      }
    ],

    tools: [
      {
        title: "React",
        author: "Meta",
        source: "React",
        link: "https://reactjs.org/",
        license: "MIT License"
      },
      {
        title: "Tailwind CSS",
        author: "Tailwind Labs",
        source: "Tailwind CSS",
        link: "https://tailwindcss.com/",
        license: "MIT License"
      }
    ]
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
          <h1 className="text-[#FF6F61] text-[min(10vh,8vw)] font-koulen mb-[2vh]">References</h1>
          <div className="flex items-center gap-4 justify-center">
            <div className="w-[8vw] h-[3px] bg-[#66A182] opacity-50"></div>
            <span className="text-[#CAFFB9] text-[min(2.5vh,2vw)] tracking-[0.3em] font-light">ACKNOWLEDGMENTS</span>
            <div className="w-[8vw] h-[3px] bg-[#66A182] opacity-50"></div>
          </div>
        </div>

        {/* References Content */}
        <div className="max-w-[140vh] mx-auto space-y-[10vh]">
          {/* Copyright Form Section */}
          <div className="relative bg-[#66A182]/5 rounded-lg p-[4vh] border border-[#66A182]/10 mb-[8vh]">
            <div className="flex justify-between items-center gap-[4vw]">
              {/* Text Content */}
              <div className="flex-1">
                <h2 className="text-[#CAFFB9] text-[min(6vh,5vw)] font-koulen mb-[4vh]">
                  Student Copyright Checklist
                </h2>
                <p className="text-[#CAFFB9]/90 text-[min(2.2vh,1.6vw)] mb-[2vh]">
                  This copyright checklist ensures compliance with TSA guidelines and proper attribution of all resources used in this project.
                </p>
                <a 
                  href={`${process.env.PUBLIC_URL}${references.copyrightForm.image}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF6F61] text-[min(2vh,1.4vw)] hover:text-[#FF6F61]/80 
                           transition-colors duration-300 inline-flex items-center gap-2"
                >
                  See full image here
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>

              {/* Image Preview */}
              <div className="rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={`${process.env.PUBLIC_URL}${references.copyrightForm.image}`}
                  alt="Student Copyright Checklist Form"
                  className="w-[25vw] h-[40vh] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Rest of the references sections */}
          {Object.entries(references).map(([category, items]) => (
            category !== 'copyrightForm' && (
              <div key={category} className="relative">
                {/* Decorative Line */}
                <div className="absolute -left-[3vw] top-[5vh] w-[2px] h-[15vh] bg-[#66A182] opacity-30"></div>
                
                <h2 className="text-[#CAFFB9] text-[min(6vh,5vw)] font-koulen mb-[4vh] capitalize">
                  {category}
                </h2>
                
                <div className="grid gap-[4vh]">
                  {items.map((item, index) => (
                    <div 
                      key={index}
                      className="group relative bg-[#66A182]/5 rounded-lg p-[3vh] hover:bg-[#66A182]/10 
                               transition-all duration-300 border border-[#66A182]/10"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-[2vh] md:gap-[4vw]">
                        <div>
                          <h3 className="text-[#FF6F61] text-[min(3vh,2.5vw)] font-koulen mb-[1vh]">{item.title}</h3>
                          <p className="text-[#CAFFB9]/80 text-[min(2.2vh,1.6vw)]">
                            By {item.author} • {item.source}
                          </p>
                        </div>
                        <div className="flex items-center gap-[2vw]">
                          <span className="text-[#CAFFB9]/60 text-[min(2vh,1.4vw)]">{item.license}</span>
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-[2vw] py-[1vh] bg-[#66A182]/10 text-[#CAFFB9] rounded-lg
                                     hover:bg-[#66A182] hover:text-[#261C15] transition-all duration-300
                                     text-[min(2vh,1.4vw)] font-koulen"
                          >
                            VIEW SOURCE
                          </a>
                        </div>
                      </div>
                      
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-[#66A182] 
                                    group-hover:h-[80%] transition-all duration-500"></div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        {/* Additional Note */}
        <div className="text-center mt-[15vh]">
          <p className="text-[#CAFFB9]/60 text-[min(2vh,1.4vw)] max-w-[60vw] mx-auto">
            This website was created for educational purposes as part of the TSA Webmaster competition. 
            All content is fictional and for demonstration only.
          </p>
        </div>
      </div>
    </div>
  );
}

export default References; 