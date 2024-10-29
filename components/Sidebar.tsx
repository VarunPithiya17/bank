'use client';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Footer from './Footer';

interface SidebarProps {
  user: string;
}

const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        
        {/* Logo and App Name */}
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image 
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="FinTrust logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">FinTrust</h1>
        </Link>

        {/* Sidebar Links */}
        {sidebarLinks.map((item) => {
          // Check if the current route matches or starts with the link's route
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link 
              href={item.route} 
              key={item.label} 
              className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
            >
              {/* Sidebar Icon */}
              <div className="relative size-6">
                <Image 
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({'brightness-[3] invert-0': isActive})}
                />
              </div>

              {/* Sidebar Label */}
              <p className={cn("sidebar-label", {"text-white": isActive})}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>

      {/* Footer Component */}
      <Footer user={user} />
    </section>
  );
};

export default Sidebar;
