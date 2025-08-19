import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {
  return (
    <>
      <main className="min-h-screen bg-white text-gray-900 scroll-smooth">
      {/* Navbar */}
      <nav className="flex justify-end items-center px-4 sm:px-8 py-4 shadow-md sticky top-0 bg-white z-50">
        <ul className="hidden sm:flex space-x-4 sm:space-x-6 text-base sm:text-lg font-medium">
          <li><a href="#about" className="hover:text-gray-500">About</a></li>
          <li><a href="#portfolio" className="hover:text-gray-500">Portfolio</a></li>
          <li><a href="#photos" className="hover:text-gray-500">Photos</a></li>
          <li><a href="#contact" className="hover:text-gray-500">Contact</a></li>
        </ul>
        {/* Mobile menu button (future: add menu functionality) */}
        <button className="sm:hidden ml-auto p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400" aria-label="Open menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center py-20 sm:py-32 px-4 sm:px-8 bg-gray-50"
      >
        <h2 className="text-3xl sm:text-6xl font-bold mb-4 sm:mb-6">
          Quentin Galileo Lee <br />
          <span className="text-lg sm:text-4xl font-semibold">Artist • Entrepreneur</span>
        </h2>
        <p className="max-w-xs sm:max-w-2xl text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
          Welcome to my personal website — a space where I share my work, passions, and projects. 
          Whether it’s art, modeling, acting, or business ventures, this is where it all comes together.
        </p>
        <a 
          href="#portfolio" 
          className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white rounded-2xl shadow-lg hover:bg-gray-800 transition text-base sm:text-lg"
        >
          View My Work
        </a>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about" 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-24 px-8 max-w-4xl mx-auto text-center"
      >
        <h3 className="text-3xl font-semibold mb-6">About Me</h3>
        <p className="text-gray-700 leading-relaxed">
          I’m Quentin, a multi-disciplinary creative based in Los Angeles. With a background in business, art, 
          and performance, I blend creativity with strategy to bring ideas to life. I’m passionate about 
          storytelling, design, and creating experiences that inspire.
        </p>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section 
        id="portfolio" 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 px-8 bg-gray-100"
      >
        <h3 className="text-3xl font-semibold text-center mb-12">Portfolio</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Link to="/graphic-design">
            <motion.div
              whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
              className="bg-white shadow-md rounded-xl p-6 cursor-pointer hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              Graphic Design
            </motion.div>
          </Link>
          <Link to="/brand-marketing">
            <motion.div
              whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
              className="bg-white shadow-md rounded-xl p-6 cursor-pointer hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              Brand Marketing
            </motion.div>
          </Link>
          <Link to="/acting-modeling">
            <motion.div
              whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
              className="bg-white shadow-md rounded-xl p-6 cursor-pointer hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              Acting/Modeling
            </motion.div>
          </Link>
        </div>
      </motion.section>

      {/* Photo Carousel */}
      <motion.section 
        id="photos" 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-24 px-8"
      >
        <h3 className="text-3xl font-semibold text-center mb-12">Photos</h3>
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation={true}
            loop={true}
            className="rounded-xl shadow-lg"
          >
            {/* Replace with your own photos in /public */}
            <SwiperSlide>
              <img src="/photo1.jpg" alt="Photo 1" className="rounded-xl object-cover w-full h-[500px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/photo2.jpg" alt="Photo 2" className="rounded-xl object-cover w-full h-[500px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/photo3.jpg" alt="Photo 3" className="rounded-xl object-cover w-full h-[500px]" />
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 px-8 bg-gray-900 text-white text-center"
      >
        <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
        <p className="mb-8">Interested in working together or just want to connect? Reach out below:</p>
        <a 
          href="mailto:quentinglee13@gmail.com" 
          className="px-6 py-3 bg-white text-black rounded-2xl shadow-lg hover:bg-gray-200 transition"
        >
          Email Me
        </a>
      </motion.section>
      </main>
      <footer className="w-full py-6 bg-gray-100 text-center text-gray-600 text-sm font-medium border-t">
        Quentin Galileo Lee
      </footer>
    </>
  );
}

export default App;

