import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>;
      </div>
    );
  },
});
