import type { NextPage } from 'next';
import {  Header } from 'components/modules';
import { useRouter } from 'next/router';
import MagneticButton from 'components/MagneticButton';


const HomePage: NextPage = () => {

  const router= useRouter();

  return (
    <div className="bg-black h-screen bg-[url('/bg.png')] bg-no-repeat flex flex-col justify-between">
      <Header />
        <div className='h=1/3'></div>
        <div className='h-1/3 flex flex-col justify-center'>
          <div className='flex'>
            <div className='w-2/3'></div>
            <div>
              <span className='font-satoshi text-gray-300 text-[60px]'>Prove your age without</span><br/>
              <span className='font-satoshi text-gray-300 text-[60px]'>revealing your age!</span>
            </div>
          </div>
        </div>
        <div className='h-1/3 flex justify-center'>
          <span className='font-satoshi text-white text-[120px] font-[500]'>Zero knowledge age verifier</span>
        </div>
        <div className='z-10 absolute top-[40vh] left-[50vw]'>
          <MagneticButton onClick={() => {router.push('/proof')}}  className="bg-[#6b1c22] h-40 w-40 ">
            <span className='font-satoshi text-[18px] font-[400]'>Try it out ➚</span>
          </MagneticButton>
        </div>
    </div>
  );
};

export default HomePage;

