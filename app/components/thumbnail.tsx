import Image from 'next/image';
import { MdRemoveRedEye } from 'react-icons/md';

type thumbnailProps = {
  title: string;
  view?: boolean;
};

const Thumbnail = ({ title, view = true }: thumbnailProps) => {
  return (
    <div className="w-32 h-52  flex items-start flex-col relative">
      <div className="size-32">
        <Image
          src="/assets/Thumbnail.png"
          alt="Game Thumbnail"
          width={128}
          height={128}
          className="rounded-xl w-full h-full"
        />
      </div>
      <div className="flex items-center justify-between py-2 gap-5 px-2">
        <p className="text-sm">{title}</p>
        <Image
          src="/assets/2-liked-default.png"
          alt="Heart"
          width={15}
          height={15}
          className="w-4 h-4"
        />
      </div>

      {view && (
        <div className="flex items-center gap-2 px-2">
          <MdRemoveRedEye color="blue" />
          <span className="text-xs">1.3k</span>
        </div>
      )}
    </div>
  );
};

export default Thumbnail;
