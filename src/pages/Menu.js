import { FaFacebookF, FaInstagram, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Menu() {
  const menuItems = {
    starters: [
      { 
        name: "Golden Glow", 
        description: "Silky butternut squash velouté with coconut cream and spiced ginger oil. Served with smoked paprika flatbread crisps.", 
        price: "$ 14" 
      },
      { 
        name: "Roots of Renewal", 
        description: "Delicate tart filled with roasted beetroot purée and chestnut mousse, garnished with microgreens and balsamic drizzle.", 
        price: "$ 16" 
      },
      { 
        name: "Crisp Tempest", 
        description: "Tempura-fried Brussels sprouts with tamarind-soy glaze, sesame seeds, and chili-maple dipping sauce.", 
        price: "$ 13" 
      },
    ],
    mainCourses: [
      { 
        name: "Meadow's Heart", 
        description: "Chargrilled cauliflower steak marinated in za'atar spices, served over smoked eggplant purée with pomegranate-molasses drizzle.", 
        price: "$ 26" 
      },
      { 
        name: "Earth's Essence", 
        description: "Harvest vegetable risotto with roasted root vegetables, wild mushrooms, parsley-lemon gremolata, and cashew parmesan crumble.", 
        price: "$ 28" 
      },
      { 
        name: "Golden Harvest Pockets", 
        description: "Handmade carrot and ginger ravioli in a light miso-broth reduction, garnished with scallions and a drizzle of truffle oil.", 
        price: "$ 27" 
      },
      { 
        name: "The Garden Tart", 
        description: "Savory tart filled with caramelized onions, roasted zucchini, cherry tomatoes, and cashew ricotta, served with seasonal greens and basil oil.", 
        price: "$ 25" 
      },
    ],
    desserts: [
      { 
        name: "Frosted Roots", 
        description: "Turnip and beetroot sorbet with chestnut praline crumble and orange-cardamom syrup.", 
        price: "$ 12" 
      },
      { 
        name: "Crimson Hearth", 
        description: "Spiced pumpkin and nut terrine with cranberry-port reduction and crispy sage leaves.", 
        price: "$ 14" 
      },
      { 
        name: "Verage Treats", 
        description: "Trio of mini desserts: dark chocolate truffle, candied citrus peel, and almond-date financier.", 
        price: "$ 15" 
      },
    ]
  };

  // Custom arrow components
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-[-5vw] top-1/2 transform -translate-y-1/2 z-10
                 w-[5vh] h-[5vh] rounded-full bg-[#66A182]/10 flex items-center justify-center
                 hover:bg-[#66A182] transition-all duration-300 group"
    >
      <FaChevronLeft className="text-[#CAFFB9] group-hover:text-[#261C15]" size={20} />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-[-5vw] top-1/2 transform -translate-y-1/2 z-10
                 w-[5vh] h-[5vh] rounded-full bg-[#66A182]/10 flex items-center justify-center
                 hover:bg-[#66A182] transition-all duration-300 group"
    >
      <FaChevronRight className="text-[#CAFFB9] group-hover:text-[#261C15]" size={20} />
    </button>
  );

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slick-dots custom-dots",
    appendDots: dots => (
      <div style={{ bottom: "-50px" }}>
        <ul className="flex justify-center gap-[2vw]"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <button className="w-[1vh] h-[1vh] rounded-full bg-[#CAFFB9]/30 hover:bg-[#CAFFB9] transition-all duration-300" />
    )
  };

  // Add this after your existing menuData
  const carouselImages = [
    {
      src: "/dish1.jpg",
      alt: "Featured dish 1",
      caption: "Seasonal Plant-Based Delights"
    },
    {
      src: "/dish2.jpg",
      alt: "Featured dish 2",
      caption: "Fresh Local Ingredients"
    },
    {
      src: "/dish3.jpg",
      alt: "Featured dish 3",
      caption: "Artfully Crafted Dishes"
    }
  ];

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

      {/* Menu Content */}
      <div className="pt-[15vh] px-[8vw] pb-[10vh] relative">
        {/* Main Title */}
        <div className="text-center mb-[8vh] relative">
          <h1 className="text-[#FF6F61] text-[min(10vh,8vw)] font-koulen mb-[2vh]">Menu</h1>
          <div className="flex items-center gap-4 justify-center">
            <div className="w-[8vw] h-[3px] bg-[#66A182] opacity-50"></div>
            <span className="text-[#CAFFB9] text-[min(2.5vh,2vw)] tracking-[0.3em] font-light">SEASONAL OFFERINGS</span>
            <div className="w-[8vw] h-[3px] bg-[#66A182] opacity-50"></div>
          </div>
        </div>

        {/* Add this before your menu sections */}
        <div className="relative max-w-[140vh] mx-auto mb-[15vh]">
          <Slider {...settings}>
            {carouselImages.map((image, index) => (
              <div key={index} className="outline-none">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                  <img
                    src={`${process.env.PUBLIC_URL}${image.src}`}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#261C15]/80 to-transparent"></div>
                  <div className="absolute bottom-[4vh] left-[4vw] text-[#CAFFB9]">
                    <h3 className="font-koulen text-[min(4vh,3vw)]">{image.caption}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Menu Sections */}
        {Object.entries({ 'Starters': menuItems.starters, 'Main Courses': menuItems.mainCourses, 'Desserts': menuItems.desserts }).map(([section, items], sectionIndex) => (
          <div key={section} className="mb-[10vh] relative">
            <div className="absolute -left-[3vw] top-[5vh] w-[2px] h-[15vh] bg-[#66A182] opacity-30"></div>
            
            <h2 className="text-[#CAFFB9] text-[min(6vh,5vw)] font-koulen mb-[4vh]">{section}</h2>
            
            <div className="grid gap-[4vh]">
              {items.map((item, index) => (
                <div 
                  key={index}
                  className="group relative bg-[#66A182]/5 rounded-lg p-[3vh] hover:bg-[#66A182]/10 
                           transition-all duration-300 border border-[#66A182]/10"
                >
                  <div className="flex justify-between items-baseline mb-[2vh]">
                    <h3 className="text-[#FF6F61] text-[min(3.5vh,2.5vw)] font-koulen">{item.name}</h3>
                    <span className="text-[#CAFFB9] font-koulen text-[min(3vh,2vw)]">{item.price}</span>
                  </div>
                  <p className="text-[#CAFFB9]/80 text-[min(2.2vh,1.6vw)] leading-relaxed">{item.description}</p>
                  
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-[#66A182] 
                                group-hover:h-[80%] transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;