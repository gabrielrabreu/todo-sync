import { createFileRoute, Outlet } from '@tanstack/react-router';

import { ThemeToggle } from '@/components/theme';

export const Route = createFileRoute('/_app')({
  component: () => (
    <div className="flex min-h-screen flex-col">
      <ThemeToggle />
      <Outlet />
    </div>
  ),
});
