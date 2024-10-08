import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'; 

function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Vedant's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
            <Footer.Title title="ABOUT"/>
            <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/vedantmohol" target="_blank" rel='noopener noreferrer'>
                    MERN Projects
                </Footer.Link>
                <Footer.Link href="/about">
                    Vedant's Blog
                </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title="FOLLOW ME"/>
            <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/vedantmohol" target="_blank" rel='noopener noreferrer'>
                    Github
                </Footer.Link>
                <Footer.Link href="https://x.com/vedant_1314?t=uavg3rF6Isg0SiHHDd0o-Q&s=08" target="_blank" rel='noopener noreferrer'>
                    Twitter
                </Footer.Link>
            </Footer.LinkGroup>
            </div> 
            <div>
            <Footer.Title title="LEGAL"/>
            <Footer.LinkGroup col>
                <Footer.Link href="#">
                    Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">
                    Terms &amp; Conditions
                </Footer.Link>
            </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider/>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Vedant's Blog" year={new Date().getFullYear()}/>
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href='https://www.instagram.com/vedant.1314' target="_blank" rel='noopener noreferrer' icon={BsInstagram}/>
                <Footer.Icon href='https://x.com/vedant_1314?t=uavg3rF6Isg0SiHHDd0o-Q&s=08' target="_blank" rel='noopener noreferrer' icon={BsTwitter}/>
                <Footer.Icon href='https://github.com/vedantmohol' target="_blank" rel='noopener noreferrer' icon={BsGithub}/>
                <Footer.Icon href='https://www.linkedin.com/in/vedant-mohol-a79613271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" rel='noopener noreferrer' icon={BsLinkedin}/>
            </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterCom;
