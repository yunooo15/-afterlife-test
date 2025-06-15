'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import { usePsyStore } from '@/app/store/store';
import Image from 'next/image';
import result1 from '@/../public/4.result/result-1.png';
import result2 from '@/../public/4.result/result-2.png';
import result3 from '@/../public/4.result/result-3.png';
import result4 from '@/../public/4.result/result-4.png';
import result5 from '@/../public/4.result/result-5.png';
import result6 from '@/../public/4.result/result-6.png';
import result7 from '@/../public/4.result/result-7.png';
import result8 from '@/../public/4.result/result-8.png';
import result9 from '@/../public/4.result/result-9.png';

const resultData = [
  { image: result1, text: "鳥巢蕨" },
  { image: result2, text: "狗脊蕨" },
  { image: result3, text: "巴西龜" },
  { image: result4, text: "非洲大蝸牛" },
  { image: result5, text: "蚯蚓" },
  { image: result6, text: "壁虎" },
  { image: result7, text: "福壽螺" },
  { image: result8, text: "綠鬣蜥" },
  { image: result9, text: "筆筒樹" },
];

export default function ResultPage() {
  const psyState = usePsyStore((state) => state);

  const playAgain = function() {
    window.location.reload();
  }

  const getResultData = () => {
    const score = psyState.score;
    if (score <= 7) return resultData[0];
    if (score <= 9) return resultData[1];
    if (score <= 11) return resultData[2];
    if (score <= 13) return resultData[3];
    if (score <= 15) return resultData[4];
    if (score <= 17) return resultData[5];
    if (score <= 19) return resultData[6];
    if (score <= 21) return resultData[7];
    return resultData[8];
  }

  const result = getResultData();

  return (
    <>
      <MobileFrame>
        <div>
          <div className="relative">
            <Image 
              src={result.image} 
              alt='result' 
              className="w-[300px] h-auto mx-auto"
              style={{ objectFit: 'contain' }}
            />
            <div className="absolute bottom-0 left-0 right-0 text-blue-700 text-5xl p-4 text-center">
              {result.text}
            </div>
          </div>
          <div 
            className={` bg-[#89BCFF] w-full rounded-full text-white 
              py-[16px] text-sm flex justify-center items-center font-medium 
              shadow-[0px_4px_0px_1px_#1098EC] cursor-pointer hover:translate-y-0.5 transition mt-6`}
            onClick={playAgain}
          > 再玩一次 </div>
        </div>
      </MobileFrame>
    </>
  );
}
