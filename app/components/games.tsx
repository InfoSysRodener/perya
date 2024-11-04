import Image from 'next/image';

const Category = ({ src, name }: { src: string; name: string }) => (
  <div className="p-2 flex flex-col items-center gap-2">
    <Image src={src} alt="Category Icon" width={25} height={25} />
    <span className="text-xs">{name}</span>
  </div>
);

const Games = () => {
  return (
    <div className="my-5">
      <p className="font-bold text-base">Discovery Games</p>
      <div className="flex justify-between items-center">
        {SortBy.map(({ label, icon }: { href: string; label: string; icon: string }, index) => (
          <Category key={index} src={icon} name={label} />
        ))}
      </div>
    </div>
  );
};

export default Games;

const SortBy = [
  {
    label: 'ALL',
    href: '/',
    icon: '/assets/1-all-default.png',
  },
  {
    label: 'LIKED',
    href: '/',
    icon: '/assets/2-liked-default.png',
  },
  {
    label: 'RECENT',
    href: '/',
    icon: '/assets/3-recent-default.png',
  },
  {
    label: 'TOP',
    href: '/',
    icon: '/assets/4-top-default.png',
  },
  {
    label: 'LUCKY',
    href: '/',
    icon: '/assets/5-lucky-default.png',
  },
  {
    label: 'EARN',
    href: '/',
    icon: '/assets/6-earn-default.png',
  },
];
