import type { NextPage } from 'next';
import {  Header } from 'components/modules';
import { useRouter } from 'next/router';
import MagneticButton from 'components/MagneticButton';


const HomePage: NextPage = () => {

  const router= useRouter();

  return (
    <div className="bg-black h-screen bg-[url('/bg.png')] bg-no-repeat flex flex-col justify-between">
      <Header />
        <div className='h-1/3 flex flex-col justify-center'>
          <div className='flex'>
            <div className='md:w-2/3 w-1/6'></div>
            <div className='mb-32 md:mb-0'>
              <span className='font-satoshi text-gray-300 text-[25px] md:text-[60px]'>Prove your age without</span><br/>
              <span className='font-satoshi text-gray-300 text-[25px] md:text-[60px]'>revealing your age!</span>
            </div>
          </div>
        </div>
        <div className='h-1/3 flex justify-center ml-10 md:ml-0'>
          <span className='font-satoshi text-white md:text-[120px] text-[40px] font-[500]'>Zero knowledge age verifier</span>
        </div>
        <div className='z-10 absolute top-[40vh] left-[50vw]'>
          <MagneticButton onClick={() => {router.push('/proof')}}  className="bg-[#6b1c22] md:h-40 md:w-40 w-28 h-28 ">
            <span className='font-satoshi text-[18px] font-[400]'>Try it out ➚</span>
          </MagneticButton>
        </div>
    </div>
  );
};

export default HomePage;

