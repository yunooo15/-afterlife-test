'use client';

export default function MobileFrame({children}) {

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="fixed inset-0 w-full h-full bg-[url('/background.jpg')] bg-cover bg-center blur-xs" />
      <div className="w-[33%] min-w-[380px] max-w-[420px] h-[85%] p-[52px] bg-white opacity-80
        flex justify-center items-center text-6xl font-bold
        relative overflow-hidden
      ">
        {children}
      </div>
    </div>
  );
  
}
