import { Button } from './ui/button';
import { MdMailOutline, MdSearch } from 'react-icons/md';
import Image from 'next/image';

const Category = ({ name }: { name: string }) => (
  <div className="flex flex-col items-center">
    <Button className="bg-gray-300 size-9 rounded-full"></Button>
    <span className="text-xs">{name}</span>
  </div>
);

const Header = () => {
  return (
    <nav className="px-5 py-3 fixed w-full z-20 bg-white">
      <div className="flex items-center py-1">
        <Button className="bg-green-600 rounded-full font-semibold" size="lg">
          LOG IN
        </Button>
        <div className="flex gap-1 absolute right-5">
          <MdMailOutline size={26} color="#8090aa" />
          <MdSearch size={26} color="#8090aa" />
        </div>
      </div>
      <div className="mt-1 flex item-center gap-10">
        <Image src="/Logo.png" alt="Logo" width={70} height={50} className="w-[70px] h-[50px]" />
        <div className="flex flex-row gap-5">
          <Category name="Premyo" />
          <Category name="Casino" />
          <Category name="Slots" />
          <Category name="Crash" />
          <Category name="Fishing" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
