import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/')({
  component: () => (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4">
        <div className="aspect-video rounded-xl bg-muted" />
      </div>
    </div>
  ),
});
