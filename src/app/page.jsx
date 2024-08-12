export default function Home() {
  return (
    <main
      className="
      flex flex-col items-center justify-center gap-14 
      bg-mobile bg-cover bg-no-repeat bg-center bg-Red
      pt-20 pb-5
      md:flex-row md:gap-10 md:h-dvh sm:bg-desktop"
    >
      <div
        className="
        flex flex-col gap-6
        w-80
        text-white text-center
        md:text-start md:m-6
        xl:w-[500px]"
      >
        <h1 className="font-bold text-3xl md:text-4xl xl:text-5xl">
          Learn to code by watching others
        </h1>
        <p className="mx-2 md:mx-0">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>

      <div className="flex flex-col gap-6 mx-6 xl:w-[500px]">
        <div className="bg-Blue px-14 py-4 rounded-xl shadow-[0px_7px_0px_0px_rgba(0,0,0,0.18);] text-center">
          <p className="text-white">
            <span className="font-semibold">Try it free 7 days</span> then
            $20/mo. thereafter
          </p>
        </div>
        <div className="flex flex-col gap-4 bg-white rounded-xl shadow-[0px_7px_0px_0px_rgba(0,0,0,0.18);] p-6 xl:p-10">
          <form action="" className="flex flex-col gap-2">
            <input
              type="text"
              name=""
              id=""
              placeholder="First Name"
              className="font-semibold w-full border-[1px] focus:border-Blue focus:ring-0 focus:outline-none rounded-md pl-5 py-3"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Last Name"
              className="font-semibold w-full border-[1px] focus:border-Blue focus:ring-0 focus:outline-none rounded-md pl-5 py-3"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Email Address"
              className="font-semibold w-full border-[1px] focus:border-Blue focus:ring-0 focus:outline-none rounded-md pl-5 py-3"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="font-semibold w-full border-[1px] focus:border-Blue focus:ring-0 focus:outline-none rounded-md pl-5 py-3"
            />
            <button className="bg-Green uppercase tracking-wide	 text-white py-3 rounded-md shadow-[0px_4px_0px_0px_rgba(0,0,0,0.15);] shadow-green-600">
              Claim your free trial
            </button>
          </form>
          <p className="text-[0.65rem] mx-5 text-center text-Grayish-Blue">
            By clicking the button, you are agreeing to our{" "}
            <span className="text-Red font-medium">
              <br />
              Terms and Services
            </span>
          </p>
        </div>

        <div className="mb-4 font-semibold text-center text-white">
          <p>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor.
            </a>
          </p>
          <p>
            Coded by{" "}
            <a href="https://github.com/HigorSR" target="_blank">
              Higor Rocha.
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
