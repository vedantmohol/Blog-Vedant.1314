import React from "react";
import { Link } from "react-router-dom";
import {
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

function FooterCom() {
  return (
    <footer className="border-t-8 border-teal-500 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:flex sm:justify-between gap-6">
          {/* Logo */}
          <div className="mt-2">
            <Link
              to="/"
              className="text-lg sm:text-xl font-semibold whitespace-nowrap dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                V
              </span>{" "}
              Blog
            </Link>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            {/* ABOUT */}
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase">About</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/vedantmohol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    MERN Projects
                  </a>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    V Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase">Follow Me</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/vedantmohol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/vedant_1314?t=uavg3rF6Isg0SiHHDd0o-Q&s=08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase">Legal</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300 dark:border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <span className="text-sm">
            © {new Date().getFullYear()}{" "}
            <a href="#" className="hover:underline">
              V Blog
            </a>
            . All rights reserved.
          </span>
          <div className="flex mt-4 sm:mt-0 gap-6">
            <a
              href="https://www.instagram.com/vedant.1314"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl"
            >
              <BsInstagram />
            </a>
            <a
              href="https://x.com/vedant_1314?t=uavg3rF6Isg0SiHHDd0o-Q&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl"
            >
              <BsTwitter />
            </a>
            <a
              href="https://github.com/vedantmohol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vedant-mohol-a79613271"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterCom;