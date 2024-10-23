'use client';

import Image from 'next/image';
import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent side="left" className="border-none bg-white">
          {/* Logo and App Name */}
          <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2 px-4">
            <Image src="/icons/logo.svg" width={34} height={34} alt="FinTrust logo" />
            <h1 className="text-[26px] font-bold text-black-1">FinTrust</h1>
          </Link>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16">
                {/* Sidebar Links */}
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        className={cn(
                          'flex items-center gap-4 px-4 py-3 rounded-md transition-colors',
                          { 'bg-bank-gradient text-white': isActive, 'text-black-2': !isActive }
                        )}
                      >
                        {/* Icon */}
                        <div className="relative w-6 h-6">
                          <Image
                            src={item.imgURL}
                            alt={item.label}
                            width={20}
                            height={20}
                            className={cn({ 'brightness-[3] invert-0': isActive })}
                          />
                        </div>
                        {/* Label */}
                        <p className={cn('text-[16px] font-semibold', { 'text-white': isActive })}>
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
