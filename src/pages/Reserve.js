import { FaFacebookF, FaInstagram, FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Reserve() {
  const today = new Date().toISOString().split('T')[0];
  
  // Calculate max date (3 months from today)
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateString = maxDate.toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const weekdayTimes = [
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  const weekendTimes = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', 
    '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'
  ];

  // Function to get available times based on selected date
  const getAvailableTimes = (date) => {
    if (!date) return [];
    const selectedDate = new Date(date);
    const day = selectedDate.getDay();
    // 0 is Sunday, 6 is Saturday
    if (day === 0 || day === 6) {
      return weekendTimes;
    }
    return weekdayTimes;
  };

  // Update the time options when date changes
  useEffect(() => {
    setFormData(prev => ({...prev, time: ''})); // Reset time when date changes
  }, [formData.date]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
    console.log('Reservation details:', formData);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#261C15] flex items-center justify-center">
        <div className="text-center px-[4vw] max-w-[80vw] mb-[8vh]">
          <h2 className="text-[#FF6F61] text-[min(8vh,6vw)] font-koulen mb-[4vh]">Reservation Confirmed!</h2>
          <div className="text-[#CAFFB9]/90 space-y-[2vh] text-[min(2.5vh,2vw)]">
            <p>Thank you for choosing Verage, {formData.name}!</p>
            <p>Your table for {formData.guests} is confirmed for {formData.date} at {formData.time}.</p>
            <p>We've sent a confirmation email to {formData.email}.</p>
            <p className="text-[min(2vh,1.5vw)] italic opacity-80">Please contact us if you need to modify your reservation.</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="mt-[6vh] px-[4vw] py-[2vh] bg-[#66A182] text-[#261C15] font-koulen 
                     text-[min(2.5vh,2vw)] rounded-lg hover:bg-[#66A182]/90 transition-all 
                     duration-300 hover:translate-y-[-2px]"
          >
            RETURN HOME
          </button>
        </div>
      </div>
    );
  }

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

      {/* Reservation Content */}
      <div className="pt-[15vh] px-[8vw] pb-[10vh] relative max-w-[120vh] mx-auto">
        {/* Main Title */}
        <div className="text-center mb-[8vh] relative">
          <h1 className="text-[#FF6F61] text-[min(10vh,8vw)] font-koulen mb-[2vh]">Reserve a Table</h1>
          <div className="flex items-center gap-4 justify-center">
            <div className="w-[8vw] h-[3px] bg-[#66A182] opacity-50"></div>
            <span className="text-[#CAFFB9] text-[min(2.5vh,2vw)] tracking-[0.3em] font-light">JOIN US</span>
            <div className="w-[8vw] h-[3px] bg-[#66A182] opacity-50"></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-[4vh] relative">
          {/* Decorative Line */}
          <div className="absolute -left-[3vw] top-[15vh] w-[2px] h-[15vh] bg-[#66A182] opacity-30"></div>

          {/* Date and Time Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[3vh] md:gap-[4vw]">
            <div className="group">
              <label className="block text-[#CAFFB9] font-koulen text-[min(2.5vh,2vw)] mb-[1vh]">Date</label>
              <input
                type="date"
                value={formData.date}
                min={today}
                max={maxDateString}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full px-[2vw] py-[1.5vh] bg-[#66A182]/5 text-[#CAFFB9] rounded-lg 
                         border border-[#66A182]/20 focus:outline-none focus:border-[#66A182] 
                         transition-all duration-300 text-[min(2.2vh,1.8vw)]
                         group-hover:bg-[#66A182]/10
                         [&::-webkit-calendar-picker-indicator]:invert
                         [&::-webkit-datetime-edit-fields-wrapper]:text-[#CAFFB9]
                         [&::-webkit-datetime-edit-text]:text-[#CAFFB9]"
                required
              />
              <p className="text-[#CAFFB9]/60 text-[min(1.8vh,1.4vw)] mt-[1vh]">
                Reservations available from today up to 3 months in advance
              </p>
            </div>
            <div className="group">
              <label className="block text-[#CAFFB9] font-koulen text-[min(2.5vh,2vw)] mb-[1vh]">Time</label>
              <select
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                className="w-full px-[2vw] py-[1.5vh] bg-[#66A182]/5 text-[#CAFFB9] rounded-lg 
                         border border-[#66A182]/20 focus:outline-none focus:border-[#66A182] 
                         transition-all duration-300 text-[min(2.2vh,1.8vw)]
                         group-hover:bg-[#66A182]/10"
                required
                disabled={!formData.date}
              >
                <option value="" className="bg-[#261C15] text-[#CAFFB9]">
                  {formData.date ? 'Select a time' : 'Please select a date first'}
                </option>
                {getAvailableTimes(formData.date).map(time => (
                  <option key={time} value={time} className="bg-[#261C15] text-[#CAFFB9]">{time}</option>
                ))}
              </select>
              {!formData.date && (
                <p className="text-[#CAFFB9]/60 text-[min(1.8vh,1.4vw)] mt-[1vh]">
                  Please select a date to view available times
                </p>
              )}
            </div>
          </div>

          {/* Number of Guests */}
          <div className="group">
            <label className="block text-[#CAFFB9] font-koulen text-[min(2.5vh,2vw)] mb-[1vh]">Number of Guests</label>
            <select
              value={formData.guests}
              onChange={(e) => setFormData({...formData, guests: e.target.value})}
              className="w-full px-[2vw] py-[1.5vh] bg-[#66A182]/5 text-[#CAFFB9] rounded-lg 
                       border border-[#66A182]/20 focus:outline-none focus:border-[#66A182] 
                       transition-all duration-300 text-[min(2.2vh,1.8vw)]
                       group-hover:bg-[#66A182]/10"
              required
            >
              {[1,2,3,4,5,6,7,8].map(num => (
                <option key={num} value={num} className="bg-[#261C15] text-[#CAFFB9]">
                  {num === 8 ? '8+ Guests' : `${num} ${num === 1 ? 'Guest' : 'Guests'}`}
                </option>
              ))}
            </select>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[3vh] md:gap-[4vw]">
            {['name', 'email', 'phone'].map((field) => (
              <div key={field} className="group">
                <label className="block text-[#CAFFB9] font-koulen text-[min(2.5vh,2vw)] mb-[1vh]">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                  value={formData[field]}
                  onChange={(e) => setFormData({...formData, [field]: e.target.value})}
                  className="w-full px-[2vw] py-[1.5vh] bg-[#66A182]/5 text-[#CAFFB9] rounded-lg 
                           border border-[#66A182]/20 focus:outline-none focus:border-[#66A182] 
                           transition-all duration-300 text-[min(2.2vh,1.8vw)]
                           group-hover:bg-[#66A182]/10"
                  required
                />
              </div>
            ))}
          </div>

          {/* Special Requests */}
          <div className="group">
            <label className="block text-[#CAFFB9] font-koulen text-[min(2.5vh,2vw)] mb-[1vh]">Special Requests</label>
            <textarea
              value={formData.specialRequests}
              onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
              className="w-full px-[2vw] py-[1.5vh] bg-[#66A182]/5 text-[#CAFFB9] rounded-lg 
                       border border-[#66A182]/20 focus:outline-none focus:border-[#66A182] 
                       transition-all duration-300 text-[min(2.2vh,1.8vw)] h-[20vh]
                       group-hover:bg-[#66A182]/10 resize-none"
              placeholder="Any dietary restrictions or special occasions?"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-[2vh] bg-[#FF6F61] text-[#261C15] font-koulen text-[min(2.5vh,2vw)] 
                     rounded-lg hover:bg-[#FF6F61]/90 transition-all duration-300 
                     hover:translate-y-[-2px] mt-[4vh]"
          >
            CONFIRM RESERVATION
          </button>
        </form>
      </div>
    </div>

  );
}


export default Reserve; 