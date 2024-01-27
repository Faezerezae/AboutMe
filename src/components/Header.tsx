import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(isSticky)
  return (
    <header className="bg-gradient-to-r from-[#766EFF] to-[#87F1FF] w-full h-[80px] ">
      <nav className={isSticky ? "sticky top-0 bg-black" : ""} aria-label="Top">
        <div className="container mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-white hover:text-indigo-50">
              MEETME
            </a>
          </div>
          <section className="MOBILE-MENU flex sm:hidden">
            <div
              className="HAMBURGER-ICON space-y-2 cursor-pointer"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="CROSS-ICON absolute top-0 right-0 p-5 px-7 flex items-center justify-between"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-10 w-10 text-gray-600 cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>

              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex gap-5 items-center text-sm justify-start h-auto">
                <li className="border-b border-gray-400 uppercase">
                  <Link to='/AboutMe/'>About</Link>
                </li>
                <li className="border-b border-gray-400 uppercase">
                  <Link to='/WorkSample'>Work samples</Link>
                </li>
                <li className="border-b border-gray-400 uppercase">
                  <Link to='/PastAndSkill'>WorkHistory and Skills</Link>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden ml-10  sm:flex gap-4">
            <li className="text-base font-medium text-white hover:text-indigo-50 uppercase">
            <Link to='/AboutMe/'>About</Link>
            </li>
            <li className="text-base font-medium text-white hover:text-indigo-50 uppercase">
              <Link to='/WorkSample'>Work samples</Link>
            </li>
            <li className="text-base font-medium text-white hover:text-indigo-50 uppercase">
              <Link to='/PastAndSkill'>WorkHistory and Skills</Link>
            </li>
            <li>
              <div className="relative inline-block group">
                <Link to='/Partners' className="ext-base font-medium text-white hover:text-indigo-50 uppercase lg:py-10">Partners</Link>
                <div
                  className="hidden absolute rounded-md shadow-2xl group-hover:block bg-white w-52 p-4 -left-44 m-6">
                  <Link
                    to="/Partners/one"
                    className="flex items-center justify-start h-10"
                  >one</Link>
                  <Link
                    to="/Partners/two"
                    className="flex items-center justify-start h-10"
                  >two</Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
