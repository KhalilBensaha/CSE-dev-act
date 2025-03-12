'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Wallet, CreditCard, LineChart, Clock, Settings } from 'lucide-react';

const routes = [
  {
    label: 'My Wallet',
    icon: Wallet,
    href: '/wallet',
    color: 'text-sky-500',
  },
  {
    label: 'My Card',
    icon: CreditCard,
    href: '/card',
    color: 'text-violet-500',
  },
  {
    label: 'Finance Chart',
    icon: LineChart,
    href: '/chart',
    color: 'text-pink-700',
  },
  {
    label: 'Recent Transactions',
    icon: Clock,
    href: '/transactions',
    color: 'text-orange-700',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
    color: 'text-neutral-500',
  }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-screen bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/wallet" className="flex items-center pl-3 mb-14">
          <h1 className="text-2xl font-bold">
            Tracker
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
                pathname === route.href ? 'text-white bg-white/10' : 'text-zinc-400'
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-3 py-2">
        <div className="flex items-center gap-3 p-3">
          <div className="w-10 h-10 rounded-full bg-neutral-500" />
          <div>
            <p className="text-sm font-medium">Adrian Tra</p>
            <p className="text-xs text-zinc-400">Premium User</p>
          </div>
        </div>
      </div>
    </div>
  );
}