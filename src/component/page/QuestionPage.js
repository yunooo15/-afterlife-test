'use client';

import MobileFrame from '@/component/layout/MobileFrame'
import Image from 'next/image';
import q1Up from '@/../public/1.question/q1-up.png';
import q1Down from '@/../public/1.question/q1-down.png';
import circle1Img from '@/../public/1.question/blur-circle-1.png';
import circle2Img from '@/../public/1.question/blur-circle-2.png';
import { usePsyStore, useQuestionStore } from '@/app/store/store'


export default function QuestionPage({questionIndex, nextStep}) {

  const questionData = useQuestionStore( (state)=> state );
  const psyData = usePsyStore( (state)=> state );


  const clickAnswer = function(option){
    nextStep();

    psyData.updateScore(psyData.score + option.value );

    console.log(option.title, option.value);
  }

  const getMainColor = function(prefix){
    
    let colorString = "";

    if(questionIndex == 0){
      colorString = prefix + "-[#90B62A]";
    }else if(questionIndex == 1){
      colorString = prefix + "-[#DD3E3E]";
    }else{
      colorString = prefix + "-[#1098EC]";
    }

    return colorString;

  }


  return (
    <>
      <MobileFrame>
        <div className="relative w-full h-full">
         

          <div className='flex flex-col items-center gap-[26px] h-full overflow-y-auto pb-[100px]'>
            

            <div className='text-[#90B62A]  w-[48px] h-[48px]
            flex justify-center items-center font-bold text-xl'>
              Q{questionIndex+1}
            </div>
            
            <div 
              className={`text-center font-bold text-3xl ${getMainColor('text')} mb-[30px]`}
            > {questionData.questions[questionIndex+1].title} </div>

            <div className="w-full space-y-3">
              {            
                questionData.questions[questionIndex+1].options.map( (option, index) => {
                  return (
                    <div key={option.title + index} className="w-full">
                      {
                        questionIndex == 0 && 
                        <div 
                          className={` bg-[#BEE351] w-full rounded-full text-white 
                            py-[16px] text-sm flex justify-center items-center font-medium 
                            shadow-[0px_4px_0px_1px_#90B62A] cursor-pointer hover:translate-y-0.5 transition`}
                          onClick={() => clickAnswer(option)}
                        > {option.title} </div>
                      }

                      {
                        questionIndex == 1 && 
                        <div 
                          className={` bg-[#DD3E3E] w-full rounded-full text-white 
                            py-[16px] text-sm flex justify-center items-center font-medium 
                            shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-0.5 transition`}
                          onClick={() => clickAnswer(option)}
                        > {option.title} </div>
                      }

                      {
                        questionIndex == 2 && 
                        <div 
                          className={` bg-[#89BCFF] w-full rounded-full text-white 
                            py-[16px] text-sm flex justify-center items-center font-medium 
                            shadow-[0px_4px_0px_1px_#1098EC] cursor-pointer hover:translate-y-0.5 transition`}
                          onClick={() => clickAnswer(option)}
                        > {option.title} </div>
                      }

                      {
                        questionIndex == 3 && 
                        <div 
                          className={` bg-[#FFB6C1] w-full rounded-full text-white 
                            py-[16px] text-sm flex justify-center items-center font-medium 
                            shadow-[0px_4px_0px_1px_#FF69B4] cursor-pointer hover:translate-y-0.5 transition`}
                          onClick={() => clickAnswer(option)}
                        > {option.title} </div>
                      }

                      {
                        questionIndex == 4 && 
                        <div 
                          className={` bg-[#DDA0DD] w-full rounded-full text-white 
                            py-[16px] text-sm flex justify-center items-center font-medium 
                            shadow-[0px_4px_0px_1px_#9932CC] cursor-pointer hover:translate-y-0.5 transition`}
                          onClick={() => clickAnswer(option)}
                        > {option.title} </div>
                      }
                    </div>
                  );
                })
              }
            </div>

            <button 
              onClick={() => {
                if (questionIndex === 0) {
                  // 如果是第一個問題，回到首頁
                  psyData.updateState(0);
                  psyData.updateQuestionState(0);
                  psyData.updateScore(0);
                } else {
                  // 否則回到上一個問題
                  psyData.updateQuestionState(questionIndex - 1);
                }
              }} 
              className='px-8 py-3 bg-[#90EE90] text-[#006400] rounded-full font-bold text-xl hover:bg-[#98FB98] transition-colors mt-10'
            >
              回前頁
            </button>
        
          </div>

         
        </div>
      </MobileFrame>
    </>
  );
}
