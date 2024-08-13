export default function Header() {
  return (
    <div className="flex flex-col gap-6 w-80 text-white text-center md:text-start md:m-6 xl:w-[500px]">
      <h1 className="font-bold text-3xl md:text-4xl xl:text-5xl">
        Learn to code by watching others
      </h1>
      <p className="mx-2 md:mx-0">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </div>
  );
}
