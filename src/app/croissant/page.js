'use client';

import StartPage from '@/component/page/StartPage';
import QuestionPage from '@/component/page/QuestionPage';
import DisplayResultPage from '@/component/page/DisplayResultPage';
import ResultPage from '@/component/page/ResultPage';

export default function Croissant() {


  return (
    <>
      <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
        <StartPage/>
        <QuestionPage/>
        <DisplayResultPage/>
        <ResultPage/>
      </div>
    </>
  );
}
