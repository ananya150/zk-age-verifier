import { Default } from 'components/layouts/Default';
import type { NextPage } from 'next';


const HomePage: NextPage = () => {

  return (
    <Default className='bg-black' pageName="Home">
      <div className='font-satoshi text-[40px] md:text-[80px] hover:text-red-500 duration-100'>Zero-Knowledge</div>
      <div className='text-center ml-32 text-[40px] md:text-[80px] font-satoshi hover:text-red-500 duration-100'>Age Verifier</div>
    </Default>
  );
};

export default HomePage;

