import React from 'react';

const Footer = () => {
    return (
        <div  className=' bg-base-200'>
   <footer className="footer p-10 text-base-content container mx-auto">
  <aside data-aos="zoom-in-right">
    <img className='w-[70px]' src="/images/logo.png" alt="" />
    <p>MarriageMasters<br/>Providing reliable event managment service since 1992</p>
  </aside> 
  <nav data-aos="zoom-in-up">
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav data-aos="zoom-in-up">
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav data-aos="zoom-in-up">
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;