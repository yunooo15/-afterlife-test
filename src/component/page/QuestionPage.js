'use client';

import MobileFrame from '@/component/layout/MobileFrame'
import Image from 'next/image';
import q1Up from '@/../public/1.question/q1-up.png';
import q1Down from '@/../public/1.question/q1-down.png';
import circle1Img from '@/../public/1.question/blur-circle-1.png';
import circle2Img from '@/../public/1.question/blur-circle-2.png';


export default function QuestionPage({questionIndex, nextStep}) {

  return (
    <>
      <MobileFrame>

        <Image className=' absolute top-0 -translate-y-1/2 ' src={circle2Img} alt='circle2Img' />


        <div className='flex flex-col items-center gap-[26px]'>
          <Image src={q1Up} className='w-[88px]' alt='q1Up' />

          <div className='text-[#90B62A] border-2 border-[#90B62A] rounded-full w-[48px] h-[48px]
          flex justify-center items-center font-bold text-xl '>
            Q{questionIndex+1}
          </div>
          <div className='text-center font-bold text-3xl text-[#90B62A] mb-[60px]'> 麵包師傅要你「靜置 30 分鐘」，你會怎麼做？ </div>
          <div className=' bg-[#BEE351] w-full rounded-full text-white 
          py-[16px] text-sm flex justify-center items-center font-medium 
          shadow-[0px_4px_0px_1px_#90B62A] cursor-pointer hover:translate-y-0.5 transition'> 乖乖待著… 然後偷偷膨脹三倍大 </div>
          
          
          <div className=' bg-[#BEE351] w-full rounded-full text-white 
          py-[16px] text-sm flex justify-center items-center font-medium 
          shadow-[0px_4px_0px_1px_#90B62A] cursor-pointer hover:translate-y-0.5 transition'> 乖乖待著… 然後偷偷膨脹三倍大 </div>
          

          <div className=' bg-[#BEE351] w-full rounded-full text-white 
          py-[16px] text-sm flex justify-center items-center font-medium 
          shadow-[0px_4px_0px_1px_#90B62A] cursor-pointer hover:translate-y-0.5 transition'> 乖乖待著… 然後偷偷膨脹三倍大 </div>
          

          <Image src={q1Down} className='w-[88px]' alt='q1Down' />

        </div>

        <Image className=' absolute bottom-0 translate-y-1/2 ' src={circle2Img} alt='circle2Img' />
        
      </MobileFrame>
    </>
  );
}
