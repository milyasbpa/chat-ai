export default function Home() {
  return (
    <div className="flex h-full flex-col p-8">
      <h1 className="text-2xl font-bold text-neutral-900">
        Welcome to Chat AI
      </h1>
      <p className="mt-2 text-neutral-600">
        This is the main content area. The sidebar should be visible on the left
        for desktop view, and a navbar on top for mobile.
      </p>
    </div>
  );
}
