import { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { PiPlant } from 'react-icons/pi';
import { Link } from 'react-router-dom';

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuScroll, setMenuScroll] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const SECTION_HEIGHT = 937; // or whatever height your sections are
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let isTransitioning = false;
    let lastScrollPosition = 0;

    const smoothScrollTo = (startPosition, endPosition) => {
      isTransitioning = true;
      const duration = 1500;
      const startTime = performance.now();

      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smoother acceleration/deceleration
        const easeInOutCubic = progress => progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        const currentPosition = startPosition + (endPosition - startPosition) * easeInOutCubic(progress);
        window.scrollTo(0, currentPosition);
        
        // Update scroll position for sidebar animations
        setScrollPosition(currentPosition);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          isTransitioning = false;
        }
      };

      requestAnimationFrame(animateScroll);
    };

    const handleScroll = () => {
      const position = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollingDown = position > lastScrollPosition;
      
      // Scroll to section 2 (much wider detection window)
      // * * change the number here to change the detection window
      if (!isTransitioning && scrollingDown && position >= windowHeight * 0.1 && position < windowHeight) {
        smoothScrollTo(position, windowHeight);
      }
      
      // Scroll to section 3 (much wider detection window)
      // * * change the number here to change the detection window
      if (!isTransitioning && scrollingDown && position >= windowHeight * 1.1 && position < windowHeight * 2) {
        smoothScrollTo(position, windowHeight * 2);
      }

      lastScrollPosition = position;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate various animation states based on scroll position
  const windowHeight = window.innerHeight;
  const progress = Math.min(scrollPosition / windowHeight, 1);
  
  // Viewport-based calculations
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // Update vh on resize
  useEffect(() => {
    const updateVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', updateVh);
    return () => window.removeEventListener('resize', updateVh);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // Here you would typically send the email to your backend
      console.log('Subscribed email:', email);
    }
  };

  return (
    <div 
      className="min-h-[300vh] snap-y snap-mandatory overflow-y-scroll"
      style={{ 
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}
    >
      {/* First Section */}
      <section className="h-screen relative overflow-hidden snap-start bg-[#261C15]">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10vh] left-[-10vw] w-[50vw] h-[50vh] bg-[#CAFFB9] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-[-20vh] right-[-5vw] w-[60vw] h-[60vh] bg-[#AEF78E] rounded-full opacity-10 blur-3xl"></div>
        </div>

        {/* Navigation Bar - Floating Style */}
        <div className="absolute top-[5vh] left-0 right-0">
          <nav className="max-w-[90vw] mx-auto bg-[#66A182]/10 backdrop-blur-md rounded-full py-[2vh] px-[4vw]">
            <div className="flex justify-center items-center gap-[8vw]">
              {['MENU', 'RESERVE', 'OUR IMPACT', 'CONTACT', 'REFERENCES'].map((item) => (
                <Link 
                  key={item}
                  to={`/${item.toLowerCase().replace(' ', '') === 'ourimpact' ? 'impact' : item.toLowerCase()}`}
                  className="text-[#CAFFB9] text-[min(2.8vh,2vw)] font-koulen tracking-wider relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#CAFFB9] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="absolute top-1/2 left-[10vw] -translate-y-1/2 z-10">
          <div className="relative">
            {/* Decorative Element */}
            <div className="absolute -left-[5vw] top-1/2 -translate-y-1/2 w-[2px] h-[15vh] bg-[#CAFFB9]"></div>
            
            {/* Main Title with Animation */}
            <h1 className="font-koulen">
              <span className="block text-[#FF6F61] text-[min(20vh,15vw)] leading-[0.9] opacity-90">
                THE
              </span>
              <div className="flex items-center gap-4 my-[2vh]">
                <div className="w-[15vw] h-[3px] bg-[#66A182]"></div>
                <span className="text-[#CAFFB9] text-[min(3vh,2vw)] tracking-[0.5em] font-light">
                  PLANT BASED
                </span>
              </div>
              <span className="block text-[#FF6F61] text-[min(20vh,15vw)] leading-[0.9] opacity-90">
                VERAGE
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#CAFFB9] text-[min(2.5vh,1.8vw)] mt-[4vh] max-w-[40vw] leading-relaxed">
              Experience the future of dining where nature meets innovation
            </p>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute bottom-[10vh] left-[5vw] flex gap-[2vw]">
          <div className="w-[1vw] h-[1vw] rounded-full bg-[#CAFFB9]"></div>
          <div className="w-[1vw] h-[1vw] rounded-full bg-[#AEF78E]"></div>
          <div className="w-[1vw] h-[1vw] rounded-full bg-[#FF6F61]"></div>
        </div>
      </section>

      
      {/* Second Section */}
      <section 
        className="h-[100vh] bg-[#261C15] relative snap-start"
        style={{ height: 'calc(var(--vh) * 100)' }}
      >
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20vh] left-[10vw] w-[40vw] h-[40vh] bg-[#66A182] rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-[10vh] right-[20vw] w-[30vw] h-[30vh] bg-[#AEF78E] rounded-full opacity-5 blur-3xl"></div>
        </div>

        {/* Menu Preview - Left Side */}
        <div className="absolute left-0 top-0 h-full w-[45vw] flex flex-col justify-center px-[4vw]">
          <div className="space-y-[4vh]">
            {/* Section Title */}
            <div className="mb-[6vh]">
              <h2 className="text-[#FF6F61] text-[min(6vh,5vw)] font-koulen mb-[2vh]">Featured Dishes</h2>
              <div className="w-[12vw] h-[3px] bg-[#66A182]"></div>
            </div>

            {/* Food Items */}
            <div className="space-y-[4vh]">
              <div className="group relative">
                <div className="h-[22vh] overflow-hidden rounded-2xl">
                  <img 
                    src={`${process.env.PUBLIC_URL}/dish1.jpg`}
                    alt="Roots of Renewal" 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    style={{ objectPosition: '50% 25%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#261C15]/80 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-[2vh] transform transition-all duration-500">
                  <h3 className="text-[#CAFFB9] font-koulen text-[min(3vh,2.5vw)] mb-2">Roots of Renewal</h3>
                  <p className="text-[#CAFFB9]/80 text-[min(2vh,1.5vw)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Seasonal root vegetables, herb-infused soil, micro greens
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="h-[22vh] overflow-hidden rounded-2xl">
                  <img 
                    src={`${process.env.PUBLIC_URL}/dish2.jpg`}
                    alt="Golden Harvest" 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    style={{ objectPosition: '50% 50%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#261C15]/80 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-[2vh] transform transition-all duration-500">
                  <h3 className="text-[#CAFFB9] font-koulen text-[min(3vh,2.5vw)] mb-2">Golden Harvest</h3>
                  <p className="text-[#CAFFB9]/80 text-[min(2vh,1.5vw)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Saffron-infused quinoa, roasted squash, crispy herbs
                  </p>
                </div>
              </div>
            </div>

            {/* Menu Button */}
            <Link 
              to="/menu"
              className="inline-block mt-[4vh] px-[3vw] py-[2vh] bg-[#66A182] text-[#261C15] font-koulen text-[min(2.2vh,1.8vw)] 
                       rounded-lg hover:bg-[#66A182]/90 transition-all duration-300 hover:translate-x-2"
            >
              EXPLORE FULL MENU
              <span className="inline-block ml-4 transform transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </div>
        </div>

        {/* Welcome Text - Right Side */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-[55vw] flex items-center justify-center px-[6vw]"
          style={{ opacity: 100 }}
        >
          <div className="relative">
            <div className="absolute -left-[3vw] top-1/2 -translate-y-1/2 w-[2px] h-[15vh] bg-[#66A182] opacity-30"></div>
            <h2 className="text-[#CAFFB9] text-[min(8vh,7vw)] font-koulen mb-[4vh]">
              Welcome to Verage
            </h2>
            <p className="text-[#CAFFB9]/90 text-[min(2.5vh,1.8vw)] leading-relaxed">
              Welcome to The Verage, where nature takes the center stage in every dish. Rooted in a farm-to-table philosophy, we craft innovative, plant-based cuisine that celebrates the vibrant flavors and textures of our seasonal and locally-sourced ingredients.  
            </p>
          </div>
        </div>
      </section>

      {/* Third Section - Our Story */}
      <section className="h-screen bg-[#261C15] snap-start relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-20vh] right-[-10vw] w-[60vw] h-[60vh] bg-[#66A182] rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-[-10vh] left-[-5vw] w-[40vw] h-[40vh] bg-[#AEF78E] rounded-full opacity-5 blur-3xl"></div>
        </div>

        {/* Content Container */}
        <div className="relative h-full flex">
          {/* Left Side - Title and First Paragraph */}
          <div className="w-1/2 h-full flex flex-col justify-center px-[6vw]">
            <div className="relative">
              <div className="absolute -left-[3vw] top-1/2 -translate-y-1/2 w-[2px] h-[15vh] bg-[#66A182] opacity-30"></div>
              <h2 className="text-[#FF6F61] text-[min(8vh,7vw)] font-koulen mb-[4vh]">
                Our Story
              </h2>
              <p className="text-[#CAFFB9]/90 text-[min(2.5vh,1.8vw)] leading-relaxed">
                The Verage was born out of a passion for celebrating the beauty and simplicity 
                of plant-based ingredients while honoring the land that nurtures them.
              </p>
              <div className="mt-[4vh] flex gap-[1vw]">
                <div className="w-[3vw] h-[3px] bg-[#66A182] opacity-50"></div>
                <div className="w-[3vw] h-[3px] bg-[#66A182] opacity-30"></div>
                <div className="w-[3vw] h-[3px] bg-[#66A182] opacity-10"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Story Points */}
          <div className="w-1/2 h-full flex items-center px-[6vw]">
            <div className="space-y-[6vh]">
              <div className="group">
                <div className="flex items-center gap-[2vw] mb-[2vh]">
                  <div className="w-[4vw] h-[3px] bg-[#AEF78E] opacity-60 group-hover:w-[6vw] transition-all duration-500"></div>
                  <h3 className="text-[#CAFFB9] text-[min(3.5vh,2.5vw)] font-koulen">Farm to Table</h3>
                </div>
                <p className="text-[#CAFFB9]/80 text-[min(2.2vh,1.6vw)] leading-relaxed pl-[6vw]">
                  Inspired by the farm-to-table philosophy, we emphasize sustainability, 
                  seasonality, and the purity of nature's bounty.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-[2vw] mb-[2vh]">
                  <div className="w-[4vw] h-[3px] bg-[#AEF78E] opacity-60 group-hover:w-[6vw] transition-all duration-500"></div>
                  <h3 className="text-[#CAFFB9] text-[min(3.5vh,2.5vw)] font-koulen">Local Connection</h3>
                </div>
                <p className="text-[#CAFFB9]/80 text-[min(2.2vh,1.6vw)] leading-relaxed pl-[6vw]">
                  Each dish reflects our deep respect for local farmers and their dedication 
                  to cultivating vibrant produce.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-[2vw] mb-[2vh]">
                  <div className="w-[4vw] h-[3px] bg-[#AEF78E] opacity-60 group-hover:w-[6vw] transition-all duration-500"></div>
                  <h3 className="text-[#CAFFB9] text-[min(3.5vh,2.5vw)] font-koulen">Culinary Innovation</h3>
                </div>
                <p className="text-[#CAFFB9]/80 text-[min(2.2vh,1.6vw)] leading-relaxed pl-[6vw]">
                  We elevate vegetables into works of art, blending innovative techniques 
                  with timeless flavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - Call to Action & Footer */}
      <section className="min-h-screen bg-[#261C15] snap-start relative overflow-y-auto">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-30vh] left-[-10vw] w-[70vw] h-[70vh] bg-[#66A182] rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-[-20vh] right-[-15vw] w-[50vw] h-[50vh] bg-[#AEF78E] rounded-full opacity-5 blur-3xl"></div>
        </div>

        {/* Main Content - Reduce vertical padding */}
        <div className="py-[8vh] flex items-center justify-center">
          <div className="relative px-[4vw]">
            {/* Decorative Line */}
            <div className="absolute -left-[3vw] top-1/2 -translate-y-1/2 w-[2px] h-[15vh] bg-[#66A182] opacity-30"></div>
            
            {/* Content */}
            <div className="text-center max-w-[70vw] mx-auto">
              <h2 className="text-[#FF6F61] text-[min(10vh,8vw)] font-koulen mb-[3vh]">Experience Verage</h2>
              <div className="flex items-center gap-4 justify-center mb-[4vh]">
                <div className="w-[8vw] h-[3px] bg-[#66A182] opacity-50"></div>
                <span className="text-[#CAFFB9] text-[min(2.5vh,2vw)] tracking-[0.3em] font-light">RESERVATIONS</span>
                <div className="w-[8vw] h-[3px] bg-[#66A182] opacity-50"></div>
              </div>
              <p className="text-[#CAFFB9]/90 text-[min(2.8vh,2vw)] mb-[5vh] max-w-[50vw] mx-auto leading-relaxed">
                Join us for an unforgettable dining experience where every dish tells a story 
                of sustainability and passion.
              </p>
              <div className="flex gap-[3vw] justify-center items-center">
                <Link 
                  to="/reserve"
                  className="group px-[3vw] py-[2vh] bg-[#66A182] text-[#261C15] font-koulen text-[min(2.5vh,2vw)] 
                           rounded-lg hover:bg-[#66A182]/90 transition-all duration-300 flex items-center gap-3"
                >
                  RESERVE A TABLE
                  <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">→</span>
                </Link>
                <Link 
                  to="/contact"
                  className="group px-[3vw] py-[2vh] border-2 border-[#CAFFB9] text-[#CAFFB9] font-koulen 
                           text-[min(2.5vh,2vw)] rounded-lg hover:bg-[#CAFFB9]/10 transition-all duration-300 
                           flex items-center gap-3"
                >
                  CONTACT US
                  <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Make more compact */}
        <footer className="bg-[#261C15]/90 backdrop-blur-lg border-t border-[#66A182]/10 py-[4vh]">
          <div className="max-w-7xl mx-auto px-[4vw]">
            {/* Single Row Layout */}
            <div className="flex justify-between items-start gap-[4vw]">
              {/* Logo and Social */}
              <div className="flex-shrink-0">
                <h2 className="font-koulen">
                  <span className="block text-[#FF6F61] text-[min(4vh,3vw)] leading-none">THE</span>
                  <span className="block text-[#FF6F61] text-[min(4vh,3vw)] leading-none mt-2">VERAGE</span>
                </h2>
                <div className="flex gap-[1vw] mt-[2vh]">
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

              {/* Quick Links */}
              <div>
                <h4 className="text-[#FF6F61] font-koulen text-[min(2.5vh,2vw)] mb-[2vh]">Quick Links</h4>
                <ul className="space-y-[1vh]">
                  {['Menu', 'Reserve', 'Impact', 'Contact', 'References'].map((item) => (
                    <li key={item}>
                      <Link 
                        to={`/${item.toLowerCase().replace(' ', '') === 'ourimpact' ? 'impact' : item.toLowerCase()}`}
                        className="text-[#CAFFB9]/90 hover:text-[#66A182] transition-colors duration-300 
                                 inline-flex items-center gap-2 group text-[min(2vh,1.6vw)]"
                      >
                        {item}
                        <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 
                                     transform group-hover:translate-x-1">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hours */}
              <div>
                <h4 className="text-[#FF6F61] font-koulen text-[min(2.5vh,2vw)] mb-[2vh]">Hours</h4>
                <ul className="space-y-[1vh] text-[#CAFFB9]/90 text-[min(2vh,1.6vw)]">
                  <li className="flex justify-between items-center gap-[2vw]">
                    <span>Monday - Friday</span>
                    <span>4:00 PM - 10:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center gap-[2vw]">
                    <span>Saturday</span>
                    <span>5:00 PM - 11:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center gap-[2vw]">
                    <span>Sunday</span>
                    <span>5:00 PM - 10:00 PM</span>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-[#FF6F61] font-koulen text-[min(2.5vh,2vw)] mb-[2vh]">Visit Us</h4>
                <address className="not-italic space-y-[1vh] text-[#CAFFB9]/90 text-[min(2vh,1.6vw)]">
                  <p>123 Plant Street</p>
                  <p>Vancouver, BC V6B 1A1</p>
                  <p className="hover:text-[#66A182] transition-colors duration-300 cursor-pointer">
                    Tel: (604) 123-4567
                  </p>
                  <p className="hover:text-[#66A182] transition-colors duration-300 cursor-pointer">
                    info@verage.com
                  </p>
                </address>
              </div>
            </div>
          </div>
        </footer>
      </section>

    </div>

    
  );
}
 
export default Home;