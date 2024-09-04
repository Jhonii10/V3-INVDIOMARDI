'use client'
import React, { useRef } from 'react'

export const MouseDown = () => {

        const handleScroll = ()=>{
            const element = document.getElementById("resources");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }

  return (
    <div className="absolute bottom-4 left-4 z-2 max-sm:hidden "
        onClick={handleScroll}
    >
        <div
            className="flex flex-row items-center justify-start select-none cursor-pointer text-md leading-2"
            role="button"
            tabIndex={0}
        >
        <svg
            width={30}
            height={30}
            viewBox="0 0 72 72"
            id="emoji"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="color">
            <polygon
            fill="#9B9B9A"
            stroke="none"
            points="32.171,21.3995 29.0215,18.1864 24.4881,18.3237 21.6806,21.6985 21.8794,24.875 23.1539,25.2106 30.0877,24.6125"
            />
            <path
            fill="#9B9B9A"
            stroke="none"
            d="M24.796,40.1904l-0.8333,2.375l-2.4718,3.3847l-0.1771,2.9668l0.9926,1.2707 c1.3077,0.3166,2.5337,0.235,3.6562-0.3501l3-2.1053l2.7996-4.4607l0.4921-3.4977l-5.4703,0.5595L24.796,40.1904z"
            />
            <polyline
            fill="#D0CFCE"
            stroke="none"
            points="33.6098,19.1802 29.9837,19.9593 27,22.3362 25.6106,24.8664 21.5017,25.3098 15.8125,26.875 12.7646,29 9.6142,33.6218 8.8111,36.5075 10.5401,38.6905 16.7544,40 25.4314,39.9375 27.3377,41.25 28.9942,42.5148 27.2761,46.0675 26.4458,49.2462 28.5044,50.836 33.6098,48.2911 36.0332,46.927 40.8377,47.5361 47.0044,49.2462 52.671,46.927 54.2544,45.9583 56.7236,41.9962 57.4429,40.1923 58.421,33.5 55.6836,28.4594 51.421,23.2165 44.921,21.9924 40.4754,22.75 38.0877,20.6928 33.6098,19.1802"
            />
            </g>
            <g id="hair" />
            <g id="skin" />
            <g id="skin-shadow" />
            <g id="line">
            <path
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M53.5925,45.3883c-0.888,0.8428-1.9637,1.5428-3.3211,2.1079c-2.2113,0.9206-4.6535,1.136-7.0265,0.8101l-8.9309-1.2267"
            />
            <path
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M40.0767,23.4917c2-1,5-2,10,0c3.8282,1.5313,10,8,7.0199,15.9501c-0.2141,0.5711-0.4314,1.1152-0.6588,1.633"
            />
            <path
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M36.6696,41.6175c-0.5145,1.8742-4.3697,6.5546-5.8144,8.322c-1.6076,1.9668-6.7002,0.5522-4.8585-3.1099 c0.7387-1.4689,1.9142-2.6962,2.1526-4.323c0.0514-0.3507,0.0819-0.6918,0.0967-1.018"
            />
            <path
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M22.3815,49.2187c-0.6896-0.7299-0.8252-1.9762,0.3992-3.6776c0.6175-0.858,2.1556-2.6643,2.2769-4.741 c0,0-2.9074-0.2291-4.2157-0.233C7.0032,40.5251,8.8004,35.4006,8.984,34.8764c0.2987-0.853,4.0154-6.5648,6.9052-8.0097 c4.3697-2.1849,9.6853-1.6357,9.6853-1.6357c1.5022-5.7393,10.5248-9.6715,14.2016-1.0924 c3.2773,7.647-4.6994,10.3531-7.6994,10.3531"
            />
            <path
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M56.4366,41.0744c2,0,3.6401,3.4173,2.6401,6.4173s-1.8218,3.9576-6.1915,6.1425c-8.7394,4.3697-19.6637,2.1849-29.6446,0.3599 c-6.311-1.154-9.2354,0.6406-10.1639,2.4977c-1.0924,2.1849,1.6796,5.8607,7.0357,4.7895"
            />
            <path
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M22.6508,21.6985c0.1574-0.8515,0.4634-1.624,0.8426-2.1859c2.2057-3.2685,6.8333-1.8141,7.6419,0"
            />
            </g>
        </svg>
        <span className='ml-2'>— Desplácese para descubrir</span>
        </div>
        </div>
  )
}
