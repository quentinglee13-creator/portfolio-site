import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <>
      <main className="min-h-screen bg-white text-gray-900 scroll-smooth">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-8 py-4 shadow-md sticky top-0 bg-white z-50">
        <div className="flex items-center mr-4 space-x-3">
          <a href="/" className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          </a>
          <a href="https://www.instagram.com/quentin_galileo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg className="h-6 w-6 text-gray-700 hover:text-pink-500 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect width="18" height="18" x="3" y="3" rx="5"/>
              <path d="M16.5 7.5h.01"/>
              <circle cx="12" cy="12" r="4"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/quentin-lee-133a64280/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg className="h-6 w-6 text-gray-700 hover:text-blue-600 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect width="18" height="18" x="3" y="3" rx="2"/>
              <path d="M8 11v5M8 8v.01M12 16v-5m0 0a2 2 0 1 1 4 0v5"/>
            </svg>
          </a>
        </div>
        <ul className="hidden sm:flex space-x-4 sm:space-x-6 text-base sm:text-lg font-medium">
          <li><a href="#about" className="hover:text-gray-500">About</a></li>
          <li><a href="#portfolio" className="hover:text-gray-500">Portfolio</a></li>
          <li><a href="#photos" className="hover:text-gray-500">Modeling &amp; Acting</a></li>
          <li><a href="#contact" className="hover:text-gray-500">Contact</a></li>
        </ul>
        {/* Mobile menu button */}
        <button
          className="sm:hidden ml-auto p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="Open menu"
          onClick={handleMenuToggle}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex flex-col" onClick={handleMenuClose}>
            <div className="bg-white shadow-lg rounded-b-xl mx-4 mt-4 p-6 flex flex-col space-y-6 text-lg font-medium" onClick={e => e.stopPropagation()}>
              <a href="#about" className="hover:text-gray-500" onClick={handleMenuClose}>About</a>
              <a href="#portfolio" className="hover:text-gray-500" onClick={handleMenuClose}>Portfolio</a>
              <a href="#photos" className="hover:text-gray-500" onClick={handleMenuClose}>Modeling &amp; Acting</a>
              <a href="#contact" className="hover:text-gray-500" onClick={handleMenuClose}>Contact</a>
            </div>
          </div>
        )}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto justify-center">
          <Link to="/graphic-design">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.97 }}
              className="bg-white shadow-md rounded-xl p-6 cursor-pointer hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              Graphic Design
            </motion.div>
          </Link>
          <Link to="/brand-marketing">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.97 }}
              className="bg-white shadow-md rounded-xl p-6 cursor-pointer hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              Brand Marketing
            </motion.div>
          </Link>
        </div>
      </motion.section>

      {/* Modeling & Acting Section */}
      <motion.section
        id="modeling-acting"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-24 px-8"
      >
        <h3 className="text-3xl font-semibold text-center mb-12">Modeling &amp; Acting</h3>
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
              <Link to="/modeling-acting/gallery">
                <img src="/photo1.jpg" alt="Photo 1" className="rounded-xl object-cover w-full h-[500px] cursor-pointer" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/modeling-acting/gallery">
                <img src="/photo2.jpg" alt="Photo 2" className="rounded-xl object-cover w-full h-[500px] cursor-pointer" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/modeling-acting/gallery">
                <img src="/photo3.jpg" alt="Photo 3" className="rounded-xl object-cover w-full h-[500px] cursor-pointer" />
              </Link>
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
        <p className="mb-8">Interested in working together or just want to connect? Fill out the form below:</p>
        <form
          className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-left"
          onSubmit={e => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const message = form.message.value;
            alert(`Thank you, ${name}! Your message has been sent.`);
            form.reset();
          }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-800 font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-xl font-semibold shadow-md hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </motion.section>
      </main>
      <footer className="w-full py-6 bg-gray-100 text-center text-gray-600 text-sm font-medium border-t flex flex-col items-center gap-2">
        <div className="flex items-center space-x-3 mb-1">
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg className="h-5 w-5 text-gray-700 hover:text-pink-500 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect width="18" height="18" x="3" y="3" rx="5"/>
              <path d="M16.5 7.5h.01"/>
              <circle cx="12" cy="12" r="4"/>
            </svg>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg className="h-5 w-5 text-gray-700 hover:text-blue-600 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect width="18" height="18" x="3" y="3" rx="2"/>
              <path d="M8 11v5M8 8v.01M12 16v-5m0 0a2 2 0 1 1 4 0v5"/>
            </svg>
          </a>
        </div>
        Quentin Galileo Lee
      </footer>
    </>
  );
}

export default App;

