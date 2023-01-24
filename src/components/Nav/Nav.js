import React from "react";
import logo from "../../images/logo.png";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="Nav_logo">
        <a href=" " className="image"><img src={logo} alt="logo" /></a>
        <ul>
          <li><a href=" ">Home</a></li>
          <li><a href=" ">Products</a></li>
          <li><a href=" ">Contact us</a></li>
        </ul>
      </div>
      <div className="Nav_buttons">
        <div className="Nav_theme">
          <span className="sun">
            <svg
              width="53"
              height="27"
              viewBox="0 0 53 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                width="52"
                height="24"
                rx="12"
                fill="url(#paint0_linear_656_575)"
              />
              <g filter="url(#filter0_d_656_575)">
                <circle cx="13" cy="12" r="9" fill="#FFFEF7" />
              </g>
              <mask
                id="mask0_656_575"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="1"
                y="0"
                width="52"
                height="24"
              >
                <rect
                  x="1"
                  width="52"
                  height="24"
                  rx="12"
                  fill="url(#paint1_linear_656_575)"
                />
              </mask>
              <g mask="url(#mask0_656_575)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M44.9502 14H40.0002H34.2002C32.5433 14 31.2002 12.6569 31.2002 11V10.4C31.2002 8.74314 32.5433 7.4 34.2002 7.4H34.6102C35.1198 4.88954 37.3393 3 40.0002 3C42.256 3 44.1946 4.35802 45.043 6.3011C47.1264 6.3504 48.8002 8.05473 48.8002 10.15C48.8002 10.1944 48.7994 10.2387 48.7979 10.2828C48.7994 10.3217 48.8002 10.3608 48.8002 10.4V11C48.8002 12.6569 47.4571 14 45.8002 14H44.9502Z"
                  fill="url(#paint2_linear_656_575)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M38.9174 26.9437C37.239 28.3084 35.0734 29.0871 32.7424 28.9853C31.2422 28.9197 29.8422 28.4969 28.6208 27.8024C27.3602 29.1621 25.533 29.98 23.5355 29.8927C19.926 29.735 17.1276 26.681 17.2853 23.0714C17.443 19.4618 20.497 16.6635 24.1066 16.8212C24.2326 16.8267 24.3576 16.8358 24.4816 16.8482C25.7684 13.1122 29.393 10.504 33.5418 10.6852C37.6917 10.8665 41.0756 13.7822 42.0308 17.6176C42.155 17.6142 42.2802 17.6152 42.4062 17.6207C45.2939 17.7469 47.5325 20.1901 47.4064 23.0777C47.2802 25.9654 44.837 28.2041 41.9494 28.0779C40.7998 28.0277 39.753 27.6102 38.9174 26.9437Z"
                  fill="url(#paint3_linear_656_575)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_656_575"
                  x="0"
                  y="1"
                  width="26"
                  height="26"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_656_575"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_656_575"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_656_575"
                  x1="1"
                  y1="11.5"
                  x2="53"
                  y2="12"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.106006" stopColor="#5ED3D0" />
                  <stop offset="0.544473" stopColor="#89A2FB" />
                  <stop offset="0.988128" stopColor="#8750F3" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_656_575"
                  x1="1"
                  y1="11.5"
                  x2="53"
                  y2="12"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.00673288" stopColor="#CD792B" />
                  <stop offset="0.52832" stopColor="#A689FB" />
                  <stop offset="1" stopColor="#89A2FB" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_656_575"
                  x1="40.0002"
                  y1="3"
                  x2="40.0002"
                  y2="14"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_656_575"
                  x1="32.8884"
                  y1="10.6567"
                  x2="32.0319"
                  y2="30.2639"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>

          <span className="moon">
            <svg
              width="53"
              height="27"
              viewBox="0 0 53 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="52"
                height="24"
                rx="12"
                fill="url(#paint0_linear_656_589)"
              />
              <g filter="url(#filter0_d_656_589)">
                <path
                  d="M36.5734 20.3221C37.942 20.8856 39.4284 21.1029 40.9011 20.9548C42.3737 20.8066 43.7871 20.2976 45.016 19.4727C46.2449 18.6479 47.2514 17.5327 47.9463 16.2259C48.6413 14.9192 49.0033 13.4612 49.0002 11.9811C48.9971 10.5011 48.629 9.04464 47.9286 7.74081C47.2281 6.43697 46.217 5.326 44.9846 4.50631C43.7523 3.68661 42.3368 3.18348 40.8636 3.04149C39.3903 2.8995 37.9048 3.12304 36.5386 3.69229C42.1803 7.79157 42.1969 16.1978 36.5734 20.3221Z"
                  fill="#FFFEF7"
                />
              </g>
              <mask
                id="mask0_656_589"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="52"
                height="24"
              >
                <rect
                  width="52"
                  height="24"
                  rx="12"
                  fill="url(#paint1_linear_656_589)"
                />
              </mask>
              <g mask="url(#mask0_656_589)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.75 14H12.8H7C5.34315 14 4 12.6569 4 11V10.4C4 8.74314 5.34315 7.4 7 7.4H7.41002C7.91962 4.88954 10.1391 3 12.8 3C15.0558 3 16.9944 4.35802 17.8428 6.3011C19.9262 6.3504 21.6 8.05473 21.6 10.15C21.6 10.1944 21.5992 10.2387 21.5978 10.2828C21.5992 10.3217 21.6 10.3608 21.6 10.4V11C21.6 12.6569 20.2569 14 18.6 14H17.75Z"
                  fill="url(#paint2_linear_656_589)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.9175 26.9438C23.2391 28.3084 21.0735 29.0871 18.7424 28.9853C17.2423 28.9198 15.8423 28.4969 14.6208 27.8025C13.3603 29.1621 11.533 29.98 9.53562 29.8927C5.92603 29.735 3.12771 26.6811 3.2854 23.0715C3.44309 19.4619 6.49707 16.6636 10.1067 16.8213C10.2327 16.8268 10.3577 16.8358 10.4817 16.8483C11.7685 13.1122 15.393 10.504 19.5419 10.6852C23.6918 10.8665 27.0757 13.7822 28.0309 17.6176C28.1551 17.6143 28.2802 17.6153 28.4063 17.6208C31.2939 17.7469 33.5326 20.1901 33.4064 23.0778C33.2803 25.9654 30.8371 28.2041 27.9494 28.0779C26.7998 28.0277 25.7531 27.6103 24.9175 26.9438Z"
                  fill="url(#paint3_linear_656_589)"
                />
              </g>
              <path
                d="M35 15L35.1105 15.2987C35.2118 15.5724 35.4276 15.7882 35.7013 15.8895L36 16L35.7013 16.1105C35.4276 16.2118 35.2118 16.4276 35.1105 16.7013L35 17L34.8895 16.7013C34.7882 16.4276 34.5724 16.2118 34.2987 16.1105L34 16L34.2987 15.8895C34.5724 15.7882 34.7882 15.5724 34.8895 15.2987L35 15Z"
                fill="#FFFEF6"
                fillOpacity="0.9"
              />
              <path
                d="M27.5 10L27.7456 10.6636C27.8468 10.9373 28.0627 11.1532 28.3364 11.2544L29 11.5L28.3364 11.7456C28.0627 11.8468 27.8468 12.0627 27.7456 12.3364L27.5 13L27.2544 12.3364C27.1532 12.0627 26.9373 11.8468 26.6636 11.7456L26 11.5L26.6636 11.2544C26.9373 11.1532 27.1532 10.9373 27.2544 10.6636L27.5 10Z"
                fill="#FFFEF6"
              />
              <path
                d="M18 5L18.1105 5.29867C18.2118 5.57239 18.4276 5.7882 18.7013 5.88948L19 6L18.7013 6.11052C18.4276 6.2118 18.2118 6.42761 18.1105 6.70133L18 7L17.8895 6.70133C17.7882 6.42761 17.5724 6.2118 17.2987 6.11052L17 6L17.2987 5.88948C17.5724 5.7882 17.7882 5.57239 17.8895 5.29867L18 5Z"
                fill="#FFFEF6"
              />
              <path
                d="M31.5 3L31.7456 3.66362C31.8468 3.93734 32.0627 4.15315 32.3364 4.25444L33 4.5L32.3364 4.74556C32.0627 4.84685 31.8468 5.06266 31.7456 5.33638L31.5 6L31.2544 5.33638C31.1532 5.06266 30.9373 4.84685 30.6636 4.74556L30 4.5L30.6636 4.25444C30.9373 4.15315 31.1532 3.93734 31.2544 3.66362L31.5 3Z"
                fill="#FFFEF6"
                fillOpacity="0.8"
              />
              <defs>
                <filter
                  id="filter0_d_656_589"
                  x="32.5391"
                  y="1"
                  width="20.4609"
                  height="26"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_656_589"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_656_589"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_656_589"
                  x1="3.28408e-07"
                  y1="11.5"
                  x2="52"
                  y2="12"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.106006" stopColor="#3C58C7" />
                  <stop offset="0.544473" stopColor="#615096" />
                  <stop offset="0.988128" stopColor="#8750F3" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_656_589"
                  x1="3.28408e-07"
                  y1="11.5"
                  x2="52"
                  y2="12"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.00673288" stopColor="#CD792B" />
                  <stop offset="0.52832" stopColor="#A689FB" />
                  <stop offset="1" stopColor="#89A2FB" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_656_589"
                  x1="12.8"
                  y1="3"
                  x2="12.8"
                  y2="14"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_656_589"
                  x1="18.8884"
                  y1="10.6567"
                  x2="18.0319"
                  y2="30.2639"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        <button type="button" className="dark">
          Sign In
        </button>
        <button type="button" className="light">
          Start for free
        </button>
      </div>
    </div>
  );
};

export default Nav;
