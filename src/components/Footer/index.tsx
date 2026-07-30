import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Logo } from "../Assets";
import { restaurantInfo } from "../../utils/menuData";

const Footer = () => {
  return (
    <footer className="mt-8 p-4 sm:p-6 w-full border-t border-orange-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4">
        <div className="flex flex-col gap-3">
          <Link to="/" className="flex items-center gap-3 w-fit">
            <img src={Logo} className="w-10 h-10 object-contain" alt="Chronicles" />
            <span className="text-xl font-semibold text-headingColor">THE PROMISE</span>
          </Link>
          <p className="text-sm text-textColor leading-relaxed max-w-xs">
            {restaurantInfo.tagline} — Nigerian meals from {restaurantInfo.city},{" "}
            {restaurantInfo.state}.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-headingColor uppercase tracking-wide">
            Explore
          </p>
          <nav className="flex flex-col gap-2 text-sm text-textColor">
            <Link to="/menu" className="hover:text-orange-600 w-fit">Menu</Link>
            <Link to="/about" className="hover:text-orange-600 w-fit">About</Link>
            <Link to="/services" className="hover:text-orange-600 w-fit">Services</Link>
            <a href="/#visit" className="hover:text-orange-600 w-fit">Visit</a>
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-headingColor uppercase tracking-wide">
            Contact
          </p>
          <p className="text-sm text-textColor">{restaurantInfo.address}</p>
          <a
            href={`tel:${restaurantInfo.phone.replace(/\s/g, "")}`}
            className="text-sm text-textColor hover:text-orange-600 w-fit"
          >
            {restaurantInfo.phone}
          </a>
          <div className="flex gap-4 mt-1 text-lg text-textColor">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-orange-600">
              <BsInstagram />
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-orange-600">
              <BsTwitter />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-orange-600">
              <BsFacebook />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-4 border-orange-100" />
      <p className="text-sm text-lightGray text-center md:text-left pb-2">
        © {new Date().getFullYear()} Chronicles. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
