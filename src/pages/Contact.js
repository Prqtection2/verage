import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
    console.log('Contact form data:', formData);
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
          <h1 className="text-[#FF6F61] text-[min(10vh,8vw)] font-koulen mb-[2vh]">Contact Us</h1>
          <div className="flex items-center gap-4 justify-center">
            <div className="w-[8vw] h-[3px] bg-[#66A182] opacity-50"></div>
            <span className="text-[#CAFFB9] text-[min(2.5vh,2vw)] tracking-[0.3em] font-light">GET IN TOUCH</span>
            <div className="w-[8vw] h-[3px] bg-[#66A182] opacity-50"></div>
          </div>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-[8vw] max-w-[140vh] mx-auto">
          {/* Contact Info */}
          <div className="space-y-[6vh]">
            <div className="relative">
              <div className="absolute -left-[3vw] top-[5vh] w-[2px] h-[15vh] bg-[#66A182] opacity-30"></div>
              
              <h2 className="text-[#CAFFB9] text-[min(6vh,5vw)] font-koulen mb-[4vh]">Find Us</h2>
              
              <div className="space-y-[3vh]">
                {/* Location */}
                <div className="group">
                  <div className="flex items-center gap-[2vw]">
                    <FaMapMarkerAlt className="text-[#66A182] text-[min(3vh,2.5vw)]" />
                    <h3 className="text-[#CAFFB9] text-[min(3vh,2.5vw)] font-koulen">Location</h3>
                  </div>
                  <p className="text-[#CAFFB9]/90 text-[min(2.2vh,1.6vw)] pl-[4vw] hover:text-[#66A182] transition-colors duration-300">
                    123 Plant Street, Vancouver, BC V6B 1A1
                  </p>
                </div>

                {/* Phone */}
                <div className="group">
                  <div className="flex items-center gap-[2vw]">
                    <FaPhone className="text-[#66A182] text-[min(3vh,2.5vw)]" />
                    <h3 className="text-[#CAFFB9] text-[min(3vh,2.5vw)] font-koulen">Phone</h3>
                  </div>
                  <p className="text-[#CAFFB9]/90 text-[min(2.2vh,1.6vw)] pl-[4vw] hover:text-[#66A182] transition-colors duration-300">
                    (604) 123-4567
                  </p>
                </div>

                {/* Email */}
                <div className="group">
                  <div className="flex items-center gap-[2vw]">
                    <FaEnvelope className="text-[#66A182] text-[min(3vh,2.5vw)]" />
                    <h3 className="text-[#CAFFB9] text-[min(3vh,2.5vw)] font-koulen">Email</h3>
                  </div>
                  <p className="text-[#CAFFB9]/90 text-[min(2.2vh,1.6vw)] pl-[4vw] hover:text-[#66A182] transition-colors duration-300">
                    info@verage.com
                  </p>
                </div>

                {/* Hours */}
                <div className="group mt-[6vh]">
                  <div className="flex items-center gap-[2vw] mb-[2vh]">
                    <FaClock className="text-[#66A182] text-[min(3vh,2.5vw)]" />
                    <h3 className="text-[#CAFFB9] text-[min(3vh,2.5vw)] font-koulen">Hours</h3>
                  </div>
                  <ul className="space-y-[1vh] pl-[4vw]">
                    <li className="text-[#CAFFB9]/90 text-[min(2.2vh,1.6vw)]">
                      Monday - Friday: 4:00 PM - 10:00 PM
                    </li>
                    <li className="text-[#CAFFB9]/90 text-[min(2.2vh,1.6vw)]">
                      Saturday: 5:00 PM - 11:00 PM
                    </li>
                    <li className="text-[#CAFFB9]/90 text-[min(2.2vh,1.6vw)]">
                      Sunday: 5:00 PM - 10:00 PM
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -left-[3vw] top-[5vh] w-[2px] h-[15vh] bg-[#66A182] opacity-30"></div>
            
            <h2 className="text-[#CAFFB9] text-[min(6vh,5vw)] font-koulen mb-[4vh]">Message Us</h2>
            
            {isSubmitted ? (
              <div className="text-center bg-[#66A182]/10 rounded-lg p-[4vh] border border-[#66A182]/20">
                <h3 className="text-[#FF6F61] text-[min(3vh,2.5vw)] font-koulen mb-[2vh]">Thank You!</h3>
                <p className="text-[#CAFFB9]/90 text-[min(2.2vh,1.6vw)] leading-relaxed">
                  We've received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData(prev => ({
                      ...prev,
                      message: ''
                    }));
                  }}
                  className="mt-[4vh] px-[4vw] py-[2vh] bg-[#66A182] text-[#261C15] font-koulen 
                           text-[min(2.2vh,1.6vw)] rounded-lg hover:bg-[#66A182]/90 transition-all 
                           duration-300 hover:translate-y-[-2px]"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-[4vh]">
                {/* Name and Email */}
                <div className="grid grid-cols-2 gap-[2vw]">
                  {['name', 'email'].map((field) => (
                    <div key={field} className="group">
                      <label className="block text-[#CAFFB9] font-koulen text-[min(2.5vh,2vw)] mb-[1vh]">
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        value={formData[field]}
                        onChange={(e) => setFormData({...formData, [field]: e.target.value})}
                        className="w-full px-[2vw] py-[1.5vh] bg-[#66A182]/5 text-[#CAFFB9] rounded-lg 
                                 border border-[#66A182]/20 focus:outline-none focus:border-[#66A182] 
                                 transition-all duration-300 text-[min(2.2vh,1.6vw)]
                                 group-hover:bg-[#66A182]/10
                                 placeholder-[#CAFFB9]/50"
                        required
                      />
                    </div>
                  ))}
                </div>

                {/* Subject */}
                <div className="group">
                  <label className="block text-[#CAFFB9] font-koulen text-[min(2.5vh,2vw)] mb-[1vh]">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-[2vw] py-[1.5vh] bg-[#66A182]/5 text-[#CAFFB9] rounded-lg 
                             border border-[#66A182]/20 focus:outline-none focus:border-[#66A182] 
                             transition-all duration-300 text-[min(2.2vh,1.6vw)]
                             group-hover:bg-[#66A182]/10"
                    required
                  />
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-[#CAFFB9] font-koulen text-[min(2.5vh,2vw)] mb-[1vh]">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-[2vw] py-[1.5vh] bg-[#66A182]/5 text-[#CAFFB9] rounded-lg 
                             border border-[#66A182]/20 focus:outline-none focus:border-[#66A182] 
                             transition-all duration-300 text-[min(2.2vh,1.6vw)] h-[20vh]
                             group-hover:bg-[#66A182]/10"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-[2vh] bg-[#FF6F61] text-[#261C15] font-koulen text-[min(2.5vh,2vw)] 
                           rounded-lg hover:bg-[#FF6F61]/90 transition-all duration-300 
                           hover:translate-y-[-2px]"
                >
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 