import type { QueryClient } from '@tanstack/react-query';
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
} from '@tanstack/react-router';

type RouteContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RouteContext>()({
  component: () => (
    <>
      <HeadContent />
      <Outlet />
    </>
  ),
});
