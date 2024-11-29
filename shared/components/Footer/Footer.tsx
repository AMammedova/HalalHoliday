import * as React from "react";

interface FooterProps {
  name?: string;
}

const Footer = ({ name }: FooterProps) => {
  return (
    <footer className="bg-secondary-11 text-secondary-02 p-10 mt-10">
      <div className="footer xl:max-w-7xl mx-auto grid grid-cols-2  lg:grid-cols-3 ">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link no-underline">Branding</a>
          <a className="link no-underline">Design</a>
          <a className="link no-underline">Marketing</a>
          <a className="link no-underline">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link no-underline">About us</a>
          <a className="link no-underline">Contact</a>
          <a className="link no-underline">Jobs</a>
          <a className="link no-underline">Press kit</a>
        </nav>
        <nav className="col-span-2">
          <h6 className="footer-title">Legal</h6>
          <a className="link no-underline">Terms of use</a>
          <a className="link no-underline">Privacy policy</a>
          <a className="link no-underline">Cookie policy</a>
        </nav>
        <form className="max-w-xs">
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-full">
            <label className="label">
              <span className="label-text text-secondary-02">
                Enter your email address
              </span>
            </label>
            <div className="join max-w-xs">
              <input
                type="text"
                placeholder="username@site.com"
                className="w-[200px] lg:w-[300px] input input-bordered join-item text-secondary-11 focus:outline-none focus:shadow-outline focus:ring-0 focus:ring-offset-0 focus:ring-border-none"
              />
              <button className="bg-secondary-06 px-2 py-2 text-secondary-02 join-item ">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
