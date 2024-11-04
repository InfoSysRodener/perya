import Ads from './components/ads';
import BottomNav from './components/bottom-nav';
import Exclusives from './components/exclusives';
import Games from './components/games';
import Header from './components/header';
import Thumbnail from './components/thumbnail';
// import Verification from './components/verification';
import { MdArrowRight } from 'react-icons/md';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="pt-36 px-2">
        <Ads />
      </div>
      <div className="px-2 my-5">
        <p className="font-bold text-base">Mega Perya Exclusives</p>

        <Exclusives />
        <Games />
        <section>
          <div className="flex justify-between items-center pb-2">
            <p className="text-xl font-bold">Popular Games</p>
            <button className="bg-green-500 text-white rounded-xl text-xs px-2  flex items-center">
              <span>More</span>
              <MdArrowRight color="white" size={22} />
            </button>
          </div>
          <div className="flex gap-2 overflow-auto">
            <Thumbnail title="ColorGame" />
            <Thumbnail title="MegaRaffle" />
            <Thumbnail title="MegaPick3" />
          </div>
        </section>
        <section>
          <div className="flex justify-between items-center pb-2">
            <p className="text-xl font-bold">Featured Games</p>
            <button className="bg-green-500 text-white rounded-xl text-xs px-2  flex items-center">
              <span>More</span>
              <MdArrowRight color="white" size={22} />
            </button>
          </div>
          <div className="flex gap-2 overflow-auto">
            <Thumbnail title="ColorGame" />
            <Thumbnail title="MegaRaffle" />
            <Thumbnail title="MegaPick3" />
          </div>
        </section>
        <section>
          <div className="flex justify-between items-center pb-2">
            <p className="text-xl font-bold">Providers</p>
            <button className="bg-green-500 text-white rounded-xl text-xs px-2  flex items-center">
              <span>More</span>
              <MdArrowRight color="white" size={22} />
            </button>
          </div>
          <div className="flex gap-2 overflow-auto">
            <Thumbnail title="ColorGame" />
            <Thumbnail title="MegaRaffle" />
            <Thumbnail title="MegaPick3" />
          </div>
        </section>
        <section>
          <div className="flex justify-between items-center pb-2">
            <p className="text-xl font-bold">More Games</p>
          </div>
          <div className="flex gap-2 overflow-auto flex-wrap">
            <Thumbnail title="ColorGame" view={false} />
            <Thumbnail title="MegaRaffle" view={false} />
            <Thumbnail title="MegaPick3" view={false} />
            <Thumbnail title="ColorGame" view={false} />
            <Thumbnail title="MegaRaffle" view={false} />
            <Thumbnail title="MegaPick3" view={false} />
            <Thumbnail title="ColorGame" view={false} />
            <Thumbnail title="MegaRaffle" view={false} />
            <Thumbnail title="MegaPick3" view={false} />
          </div>
        </section>
      </div>
      {/* <Verification /> */}
      <div className="relative w-full flex justify-center">
        <button className="bg-green-600 text-white flex items-center justify-center p-2 text-sm rounded-xl ">
          Load More
        </button>
      </div>
      <div className="w-full flex justify-center gap-5 mt-10">
        <Image src="/assets/pagcorlogo.png" alt="PAGCOR LOGO" width={130} height={130} />
        <Image src="/assets/pagcorrule.png" alt="PAGCOR LOGO" width={130} height={130} />
      </div>
      <div className="mb-40"></div>
      <BottomNav />
    </div>
  );
}
