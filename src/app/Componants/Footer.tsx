// components/Footer.js
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm mb-4">
          &copy; {new Date().getFullYear()} Muhammad Akram. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <Link href="https://github.com/Akrammallah" 
            
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            
          </Link>
          <Link href="https://x.com/Akramtech351779?t=BtKxKKdsqreH25lrImop7g&s=09" 
            
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer">
            
              Twitter
            
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-akram-mallah-7b179a1b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer">
            
              LinkedIn
            
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
