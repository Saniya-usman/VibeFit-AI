// Footer.jsx
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-[#1b8ab3] to-[#0a1b24] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b border-pink-400 inline-block">
            Contact Info
          </h2>
          <p className="mb-2">📍 Virtual Clothing HQ, Bengaluru, India</p>
          <p className="mb-2">📞 +91 6362257907  </p>
          <p className="mb-2">✉️ saniyabammanalli@gmail.com  </p>
          
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b border-pink-400 inline-block">
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-pink-300 transition">Home</a></li>
            <li><a href="/about" className="hover:text-pink-300 transition">About</a></li>
            <li><a href="/products" className="hover:text-pink-300 transition">Products</a></li>
            <li><a href="/tryon" className="hover:text-pink-300 transition">Virtual Try-On</a></li>
            <li><a href="/contact" className="hover:text-pink-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b border-pink-400 inline-block">
            Follow Us
          </h2>
          <div className="flex space-x-6 text-2xl">
            <a href="https://www.facebook.com/profile.php?id=61580293367226" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><FaFacebook /></a>
            <a href="https://www.instagram.com/sw.eetie5391/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition"><FaYoutube /></a>
            <a href="https://www.linkedin.com/in/saniya-bammanalli-ab6b78334/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Virtual Clothing Assistant. Designed & developed by   
        <a
          href="https://github.com/Saniya-usman"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 ml-2 font-semibold hover:underline">
            Saniya</a> 🌟
          
      </div>
    </footer>
  );
}
