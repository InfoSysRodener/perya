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
    </div>
  );
};

export default Exclusives;
