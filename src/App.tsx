import Router from './router/Index';

export default () => {
  return (
    <>
      <nav class="bg-primary h-16 shadow px-8 flex items-center justify-between text-white">
        <div class="text-lg font-semibold">Solidwind</div>
        <a
          href="https://izzaalfiansyah.vercel.app"
          target="_blank"
          class="block px-5 p-2 bg-white rounded shadow text-gray-500"
        >
          Get Started
        </a>
      </nav>
      <Router />
    </>
  );
};
