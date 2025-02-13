"use client"; // Ensure this runs on the client side

import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { Menu, X } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ Get current path
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleContactClick = () => {
    window.location.href = "/contactus"
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Allow scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Clean up on unmount
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white  md:rounded-b-[70px]   z-50 max-w-[1440px] h-[108px] flex items-center justify-between px-6 md:px-[80px] mx-auto">
      <Link href="/" >
        <div>
          <svg width="171" height="48" viewBox="0 0 171 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M51.0531 3.80074C27.902 10.0546 14.7209 22.5622 7.30381 27.3376C5.03859 22.7765 4.11414 18.7757 3.67334 16.7798C14.9229 10.027 26.3898 6.12106 35.4721 4.65479C44.484 3.06302 51.1112 3.914 51.0531 3.80074Z" fill="#006AFF" />
            <path d="M9.11902 30.5211C23.5399 19.7827 38.4291 15.5095 38.6923 15.6992C25.3551 24.4662 18.6666 33.6189 15.8657 37.9535C12.9056 35.627 10.7475 33.0465 9.11902 30.5211Z" fill="#00ACFF" />
            <path d="M36.519 28.8712C30.6631 33.6098 28.3183 36.4933 26.8887 39.0034C25.9459 40.6625 26.8918 42.8757 29.4509 44.3267C24.6848 43.3624 20.1084 40.8676 18.1462 39.582C27.2989 32.5537 36.4363 28.8436 36.519 28.8742V28.8712Z" fill="#94E5FF" />
            <path d="M54.9778 23.8025C54.8156 25.78 56.0798 27.4024 58.9021 27.4024C61.1398 27.4024 63.9285 26.2361 65.0305 25.6515L64.4795 28.9911C63.506 29.5421 61.2378 30.6135 58.2532 30.6135C53.4534 30.6135 51.0535 27.8585 51.0535 24.1944C51.0535 18.4548 54.7513 14.6958 60.099 14.6958C63.8917 14.6958 66.0314 17.2242 66.0314 20.2394C66.0314 21.6996 65.6427 23.0587 65.2845 23.8056H54.9747L54.9778 23.8025ZM62.3704 21.5343C62.9214 19.1038 61.7214 17.7079 59.8725 17.7079C57.5369 17.7079 55.7553 19.168 55.3329 21.5343H62.3704Z" fill="#303963" />
            <path d="M71.4802 23.8025C71.3179 25.78 72.5822 27.4024 75.4045 27.4024C77.6422 27.4024 80.4308 26.2361 81.5328 25.6515L80.9818 28.9911C80.0084 29.5421 77.7401 30.6135 74.7556 30.6135C69.9558 30.6135 67.5558 27.8585 67.5558 24.1944C67.5558 18.4548 71.2537 14.6958 76.6014 14.6958C80.3941 14.6958 82.5338 17.2242 82.5338 20.2394C82.5338 21.6996 82.1451 23.0587 81.7869 23.8056H71.4771L71.4802 23.8025ZM78.8758 21.5343C79.4268 19.1038 78.2269 17.7079 76.3779 17.7079C74.0423 17.7079 72.2608 19.168 71.8383 21.5343H78.8758Z" fill="#303963" />
            <path d="M97.2577 36.6439L93.2385 37.0663L94.665 29.1227C93.4008 30.1268 91.9406 30.6135 90.4162 30.6135C86.3969 30.6135 84.1256 27.5983 84.1256 24.1301C84.1256 18.617 87.5938 14.6958 92.8467 14.6958C94.6956 14.6958 96.1864 15.6355 96.8996 16.5753L97.1598 15.0202H101.05L97.2577 36.6469V36.6439ZM96.3823 19.3303C96.0578 18.7793 95.118 17.8059 93.3977 17.8059C89.9295 17.8059 88.1448 20.4323 88.1448 23.7719C88.1448 26.0096 89.4427 27.5004 91.711 27.5004C93.3334 27.5004 94.6619 26.7535 95.1486 26.3004L96.3792 19.3303H96.3823Z" fill="#303963" />
            <path d="M114.96 30.289H111.069L111.296 28.9605C109.903 29.9339 108.443 30.6135 106.692 30.6135C103.515 30.6135 101.862 28.8962 101.862 26.1382C101.862 25.6851 101.895 25.1984 101.99 24.678L103.707 15.0172H107.598L105.911 24.7117C105.587 26.5912 106.365 27.5004 108.376 27.5004C109.576 27.5004 110.776 27.0779 111.749 26.2025L113.726 15.0172H117.651L114.96 30.289Z" fill="#303963" />
            <path d="M132.73 30.289H128.839L129.164 28.3452C128.028 29.738 126.277 30.5492 124.431 30.5492C120.929 30.5492 118.434 27.9228 118.434 24.228C118.434 18.6201 121.74 14.6958 126.702 14.6958C129.004 14.6958 130.431 15.7978 131.208 16.8049L131.533 15.0202H135.424L132.733 30.2921L132.73 30.289ZM130.685 19.5568C130.33 18.8436 129.259 17.7722 127.572 17.7722C123.81 17.7722 122.448 20.7874 122.448 23.8025C122.448 26.0402 123.648 27.5646 125.885 27.5646C127.572 27.5646 128.934 26.5269 129.647 25.5872L130.685 19.5568Z" fill="#303963" />
            <path d="M137.288 17.9344L137.839 15.0172L138.261 12.4244L142.51 10.9337L141.763 15.0203H147.405L145.96 17.9375H141.246L140.012 25.0392C139.752 26.4657 140.11 27.4392 141.503 27.4392C142.605 27.4392 144.39 26.9218 145.394 26.4994L144.809 29.7748C143.933 30.0992 141.956 30.6166 140.529 30.6166C137.126 30.6166 135.341 29.0279 135.956 25.4617L137.285 17.9405L137.288 17.9344Z" fill="#303963" />
            <path d="M150.864 23.8025C150.701 25.78 151.966 27.4024 154.788 27.4024C157.026 27.4024 159.814 26.2361 160.916 25.6515L160.365 28.9911C159.392 29.5421 157.124 30.6135 154.139 30.6135C149.339 30.6135 146.939 27.8585 146.939 24.1944C146.939 18.4548 150.637 14.6958 155.985 14.6958C159.778 14.6958 161.917 17.2242 161.917 20.2394C161.917 21.6996 161.529 23.0587 161.17 23.8056H150.861L150.864 23.8025ZM158.256 21.5343C158.807 19.1038 157.607 17.7079 155.758 17.7079C153.423 17.7079 151.641 19.168 151.219 21.5343H158.256Z" fill="#303963" />
            <path d="M164.706 30.6135C163.779 30.6135 163.022 29.8666 163.022 28.936C163.022 28.0055 163.779 27.2585 164.706 27.2585C165.634 27.2585 166.38 28.0146 166.38 28.936C166.38 29.8574 165.631 30.6135 164.706 30.6135ZM164.7 27.4789C163.895 27.4789 163.264 28.134 163.264 28.933C163.264 29.7319 163.898 30.387 164.7 30.387C165.502 30.387 166.136 29.7289 166.136 28.933C166.136 28.1371 165.502 27.4789 164.7 27.4789ZM165.254 29.9095C165.196 29.8176 165.202 29.6584 165.196 29.5544C165.187 29.184 165.083 29.0983 164.703 29.0983H164.225V29.9125H163.984V27.9932H164.81C165.15 27.9932 165.468 28.1248 165.468 28.5167C165.468 28.7524 165.349 28.9238 165.113 28.9819V28.9911C165.376 29.0646 165.422 29.2207 165.435 29.4717C165.438 29.6003 165.432 29.8023 165.496 29.9156H165.254V29.9095ZM164.752 28.2136H164.225V28.8779H164.734C164.966 28.8779 165.226 28.8105 165.226 28.5258C165.226 28.2412 164.966 28.2136 164.752 28.2136Z" fill="#8193AA" />
          </svg>
        </div>
      </Link>

      <div className="flex items-center gap-6 md:flex-row flex-col">
        <div className="md:flex hidden">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-[33px] text-[14px] font-semibold text-[#020407]">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/aboutus", label: "About Us" },
              ].map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`hover:text-blue-500 ${pathname === item.href ? "text-[#006AFF] font-bold" : "text-[#020407] font-semibold"
                        }`}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
          )}
        </button>

      </div>

      <Button
        variant="outline"
        className={`md:flex hidden rounded-full px-[33px] py-[13px] text-[16px] font-bold border-[1px] border-[#020407] font-[Manrope] leading-[22.4px] ${pathname === "/contactus" ? "bg-[#005EFF] text-white border-[#005EFF] hover:bg-[#005EFF] hover:text-white" : "bg-transparent text-black"
          }`}
        onClick={handleContactClick}
      >
        Contact Us
      </Button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[108px] justify-center left-0 w-full h-full bg-white shadow-lg z-50 flex flex-col gap-20 items-center">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col space-y-4 text-[24px] font-semibold text-[#020407] p-6 justify-center items-center">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/aboutus", label: "About Us" },
              ].map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`hover:text-blue-500 ${pathname === item.href ? "text-[#006AFF] font-bold" : "text-[#020407] font-semibold"
                        }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="w-full flex justify-center p-10">
            <Button
              variant="outline"
              className={`rounded-full w-full px-[33px] cursor-pointer py-[23px] text-[16px] font-bold border-[1px]  font-[Manrope] leading-[22.4px] ${pathname === "/contactus" ? "bg-[#005EFF] text-white  hover:bg-[#005EFF] hover:text-white" : "bg-transparent text-black"
                }`}
              onClick={handleContactClick}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
