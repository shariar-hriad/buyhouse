import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { GiRotaryPhone } from 'react-icons/gi';
import logo from '/public/logoc.png';

export default function Header() {
  const [fixed, setFixed] = useState(false);
  const [toggle, setToggle] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    let height = headerRef.current.getBoundingClientRect().height;
    window.addEventListener('scroll', () => {
      if (window.scrollY > height) {
        setFixed(true);
      } else setFixed(false);
    });
    return () => {
      window.removeEventListener('scroll', null);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`${
          fixed ? 'bg-white' : ''
        } fixed z-50 px-8 w-full flex items-center transition-all font-asap`}
      >
        <div className="flex w-full justify-between">
          <div className="cursor-pointer w-24 md:w-52">
            <Link href="/">
              <a>
                <Image
                  src={logo}
                  className={`w-auto ${fixed ? '' : 'invert-1 brightness-0'} `}
                  alt="logo"
                />
              </a>
            </Link>
          </div>
          <nav className="hidden xl:block flex-1 w-full mr-5">
            <ul
              className={`${
                fixed ? 'text-black pt-10' : 'text-white pt-9'
              } flex justify-end gap-x-6 font-semibold capitalize transition-all`}
            >
              <li className="border-b-2 py-3 border-transparent hover:border-b-aqua transition-all">
                <Link href="/">
                  <a>sell your house</a>
                </Link>
              </li>
              <li className="border-b-2 py-3 border-transparent hover:border-b-aqua transition-all">
                <Link href="/blogs">
                  <a>how it works</a>
                </Link>
              </li>
              <li className="border-b-2 py-3 border-transparent hover:border-b-aqua transition-all">
                <Link href="/blogs">
                  <a>compare</a>
                </Link>
              </li>
              <li className="border-b-2 py-3 border-transparent hover:border-b-aqua transition-all">
                <Link href="/blogs">
                  <a>about us</a>
                </Link>
              </li>
              <li className="border-b-2 py-3 border-transparent hover:border-b-aqua transition-all">
                <Link href="/blogs">
                  <a>services</a>
                </Link>
              </li>
              <li className="border-b-2 py-3 border-transparent hover:border-b-aqua transition-all">
                <Link href="/blogs">
                  <a>blog</a>
                </Link>
              </li>
              <li className="border-b-2 py-3 border-transparent hover:border-b-aqua transition-all">
                <Link href="/blogs">
                  <a>contact us</a>
                </Link>
              </li>
              <Link href="tel:(503) 610-8828">
                <a className="flex items-center hover:underline font-asap flex-nowrap bg-aqua text-white font-semibold rounded-full px-5 py-3 cursor-pointer">
                  <GiRotaryPhone />
                  (503) 610-8828
                </a>
              </Link>
            </ul>
          </nav>
          <div className={`flex-1 pt-3 md:pt-10 flex justify-end  xl:hidden`}>
            <div
              className="cursor-pointer text-2xl text-aqua"
              onClick={() => setToggle(!toggle)}
            >
              <FaBars />
            </div>
          </div>
        </div>
      </header>
      {/* mobile menu */}
      <aside
        className={`fixed z-50 bg-black bg-opacity-70 top-0  bottom-0 ${
          toggle ? 'right-0' : '-right-full '
        } w-full transition-all`}
      >
        <div className="bg-white w-4/5 h-full absolute right-0 flex flex-col items-center justify-center">
          <ul className="font-bold flex flex-col gap-y-5 capitalize text-center">
            <li className="border-b-2 py-3 border-transparent hover:border-b-aqua transition-all">
              <Link href="/">
                <a>sell your house</a>
              </Link>
            </li>
            <li className="border-b-2 py-3 border-transparent hover:border-b-aqua transition-all">
              <Link href="/blogs">
                <a>how it works</a>
              </Link>
            </li>
            <li className="border-b-2 py-3 border-transparent hover:border-b-aqua transition-all">
              <Link href="/blogs">
                <a>compare</a>
              </Link>
            </li>
            <li className="border-b-2 py-3 border-transparent hover:border-b-aqua transition-all">
              <Link href="/blogs">
                <a>about us</a>
              </Link>
            </li>
            <li className="border-b-2 py-3 border-transparent hover:border-b-aqua transition-all">
              <Link href="/blogs">
                <a>services</a>
              </Link>
            </li>
            <li className="border-b-2 py-3 border-transparent hover:border-b-aqua transition-all">
              <Link href="/blogs">
                <a>blog</a>
              </Link>
            </li>
            <li className="border-b-2 py-3 border-transparent hover:border-b-aqua transition-all">
              <Link href="/blogs">
                <a>contact us</a>
              </Link>
            </li>
            <Link href="tel:(503) 610-8828">
              <a className="flex items-center hover:underline flex-nowrap bg-aqua text-white font-medium rounded-full px-5 py-3 cursor-pointer">
                <GiRotaryPhone />
                (503) 610-8828
              </a>
            </Link>
          </ul>
        </div>
        {/* close menu */}
        <div className="absolute z-50 left-4 top-8">
          <button
            className="text-white text-3xl cursor-pointer bg-aqua p-1.5 rounded-md"
            onClick={() => setToggle(!toggle)}
          >
            <FaTimes />
          </button>
        </div>
      </aside>
    </>
  );
}
