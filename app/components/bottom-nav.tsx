'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BottomNav = () => {
  const pathname = usePathname();

  return (
    <div className="sm:hidden">
      <nav className="fixed bottom-0 w-full border-t bg-zinc-100 pb-safe dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto flex h-16 max-w-md items-center justify-around px-2 gap-2">
          {links.map(({ href, label, icon }: { href: string; label: string; icon: string }) => (
            <Link
              key={label}
              href={href}
              className={`flex h-full w-full flex-col items-center justify-center space-y-1 ${
                pathname === href
                  ? 'text-indigo-500 dark:text-indigo-400'
                  : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
              }`}
            >
              <Image src={icon ? icon : ''} alt={`${pathname} icon`} width={22} height={22} />
              <span className="text-xs text-zinc-600 dark:text-zinc-400">{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default BottomNav;

const links = [
  {
    label: 'Lobby',
    href: '/',
    icon: '/assets/lobby.png',
  },
  {
    label: 'Wallet',
    href: '/',
    icon: '/assets/wallet.png',
  },
  {
    label: 'Promos',
    href: '/',
    icon: '/assets/promo.png',
  },
  {
    label: 'Support',
    href: '/',
    icon: '/assets/support.png',
  },
  {
    label: 'Profile',
    href: '/',
    icon: '/assets/profile.png',
  },
];
