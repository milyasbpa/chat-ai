'use client';

import * as React from 'react';
import { Sidebar } from '@/core/components/sidebar/sidebar';
import { Navbar } from '@/core/components/navbar/navbar';
import { ApiKeyModal } from '@/features/auth/components/api-key-modal';

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isApiKeyOpen, setIsApiKeyOpen] = React.useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white">
      {/* Desktop Sidebar (hidden on mobile) */}
      <div className="hidden lg:block">
        <Sidebar
          authState="guest"
          onSignInClick={() => setIsApiKeyOpen(true)}
        />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay background */}
          <div
            className="fixed inset-0 bg-neutral-900/80 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          {/* Sidebar Panel */}
          <div className="fixed inset-y-0 left-0 z-50 flex w-[320px]">
            <Sidebar
              authState="guest"
              onSignInClick={() => setIsApiKeyOpen(true)}
            />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Mobile/Tablet Navbar (hidden on desktop) */}
        <Navbar onMenuClick={() => setIsMobileMenuOpen(true)} />

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-white">{children}</main>
      </div>

      <ApiKeyModal open={isApiKeyOpen} onOpenChange={setIsApiKeyOpen} />
    </div>
  );
}
