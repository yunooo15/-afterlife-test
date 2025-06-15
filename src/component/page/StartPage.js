'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import titleImg from '@/../public/0.start/title.svg';
import circle1Img from '@/../public/0.start/blur-circle-1.png';

export default function StartPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        <div className='flex justify-center items-center flex-col gap-[60px]'>
          {/* <Image className=' absolute top-0 -translate-y-1/2 ' src={circle1Img} alt='circle1Img' /> */}
         <div className='flex justify-center text-rose-900 '> 輪迴轉世</div>
          <div className='text-blue-900 font-[500] text-center text-[14px]
           leading-loose tracking-wide '>
            其實人類的下輩子並沒有我們想像中那麼多選擇，<br/>
            我們只能是爬蟲、軟體動物或是蕨類。<br/>
            人的轉生取決於一個人此生對某些問題的信念
            來看看你來生將會是什麼生物吧！
          </div>
          <button 
            onClick={nextStep} 
            className='px-8 py-3 bg-[#90EE90] text-[#006400] rounded-full font-bold text-xl hover:bg-[#98FB98] transition-colors'
          >
            START
          </button>
          <Image className=' absolute bottom-0 translate-y-1/2 pointer-events-none ' src={circle1Img} alt='circle1Img' />
        </div>
      </MobileFrame>
    </>
  );
}
