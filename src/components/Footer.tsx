import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <section className="flex">
        <div>
          <h2 className="logo">MORENT</h2>
          <p>
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div>
          <div>
            <h4>About Us</h4>
            <Link to="/">How it works</Link>
            <Link to="/">Featured</Link>
            <Link to="/">Partnership</Link>
            <Link to="/">Business Relation</Link>
          </div>
          <div>
            <h4>Community Us</h4>
            <Link to="/">Events</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Podcast</Link>
            <Link to="/">Invite a friend</Link>
          </div>
          <div>
            <h4>Socials</h4>
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
      <hr />
      <div className="flex">
        <p>©2024 MORENT. All rights reserved</p>
        <p>Privacy & Policy</p>
        <p>Terms & Condition</p>
      </div>
    </footer>
  );
}
