"use client"

import {useState} from "react";
import tanyaImg from '@/images/image-tanya.jpg';
import johnImg from '@/images/image-john.jpg';
import patternQuotes from '@/images/pattern-quotes.svg';
import prevIcon from '@/images/icon-prev.svg';
import nextIcon from '@/images/icon-next.svg';
import patternBg from '@/images/pattern-bg.svg';
import Image from "next/image";


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);


  const handlePrev = () => {
    setCurrentSlide((prev) => prev === 0 ? prev : prev - 1);
  }

  const handleNext = () => {
    setCurrentSlide((prev) => prev === sliderContent.length -1 ? prev : prev + 1);
  }

  const sliderContent = [
    {
      name: "Tanya Sinclair",
      title: "UX Engineer",
      testimonial: "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
      image: tanyaImg
    },
    {
      name: "John Tarkpor",
      title: "Junior Front-end Developer",
      testimonial: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
      image: johnImg
    },

  ]

  return (
    <div className="max-w-[1400px] px-14  h-screen flex items-center justify-center overflow-x-hidden ">
      <div className={'relative flex items-center justify-center space-x-4 p-8   '}>
        <div className="absolute top-24 left-24 z-0">
          <Image src={patternQuotes} alt="pattern quotes" />
        </div>
        <div className="absolute -top-4 -right-48 z-0">
          <Image src={patternBg} className={'w-3/4'} alt="background pattern" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">
          <p className="text-3xl text-darkBlue">{`"${sliderContent[currentSlide].testimonial}"`}</p>
          <p className="font-bold text-darkBlue mt-4">
            {sliderContent[currentSlide].name}{" "}
            <span className="text-grayBlue font-normal">{sliderContent[currentSlide].title}</span>
          </p>
        </div>
        <div className="relative z-10 w-full h-3/4  ">
          <Image
              src={sliderContent[currentSlide].image}
              alt="reviewer img"
              className="shadow-2xl rounded-lg w-full h-3/4   "
          />
          <div className={"flex w-28 -top-6 relative  mx-10 justify-between  bg-white items-center rounded-full p-3"}>
            <button>
              <Image src={prevIcon} alt={""} onClick={handlePrev}/>
            </button>
            <button>
              <Image src={nextIcon} alt={""} onClick={handleNext}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
