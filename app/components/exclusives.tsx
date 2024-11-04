import Image from 'next/image';

const Exclusives = () => {
  return (
    <div className="h-64 relative mt-5">
      <Image
        src="/assets/live2.png"
        alt="background"
        height={254}
        width={254}
        className="rounded-xl w-full h-[254px]"
      />

      <div className="absolute top-0 w-full p-5 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/Thumbnail.png"
              width={45}
              height={45}
              alt="thumbnail"
              className="rounded-xl"
            />
            <p className="text-white">Color Game</p>
          </div>
          <div>
            <Image src="/assets/live.png" height={25} width={120} alt="live" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 w-full px-5 ">
        <div className="flex justify-between items-center bg-[#4a4a4a] rounded-xl h-10">
          <Image
            src="/assets/jackpot.png"
            alt="Jackpot"
            width={194}
            height={97}
            className="absolute -top-14"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg absolute right-10 text-xs">
            ₱1 to PLAY
          </button>
        </div>
        <div className="relative bg-white flex  rounded-b-xl px-5 py-3 gap-10">
          <p className="text-black">Color Game</p>
          <p className="text-black">MegaPremyo</p>
        </div>
      </div>
    </div>
  );
};

export default Exclusives;
