import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <section className="flex justify-between m-6 px-8 pt-6">
        <div>
          <h2 className="logo text-3xl">MORENT</h2>
          <p>
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="flex space-x-20">
          <div className=" flex flex-col">
            <h4 className="font-bold text-lg">About Us</h4>
            <Link to="/">How it works</Link>
            <Link to="/">Featured</Link>
            <Link to="/">Partnership</Link>
            <Link to="/">Business Relation</Link>
          </div>
          <div className=" flex flex-col">
            <h4 className="font-bold text-lg">Community Us</h4>
            <Link to="/">Events</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Podcast</Link>
            <Link to="/">Invite a friend</Link>
          </div>
          <div className=" flex flex-col">
            <h4 className="font-bold text-lg">Socials</h4>
            <a href="https://discord.com/">
              <p>Discord</p>
            </a>
            <a href="www.instagram.com">
              <p>Instagram</p>
            </a>
            <a href="https://x.com/">
              <p>Twitter</p>
            </a>
            <a href="www.facebook.com">
              <p>Facebook</p>
            </a>
          </div>
        </div>
      </section>
      <div className="flex justify-between	 m-4 px-8 pt-4 border-t-2">
        <p className="pr-80 mr-72">©2024 MORENT. All rights reserved</p>
        <p>Privacy & Policy</p>
        <p>Terms & Condition</p>
      </div>
    </footer>
  );
}
