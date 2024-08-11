import Image from "next/image";

export default function Home() {
  return (
    <main>
      Learn to code by watching others

      See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
      but understanding how developers think is invaluable. 

      Try it free 7 days then $20/mo. thereafter

      First Name 
      Last Name 
      Email Address
      Password

      Claim your free trial 

      By clicking the button, you are agreeing to our Terms and Services


      <div className="flex flex-col items-center mb-4 font-semibold">
        <p>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
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
    </main>
  );
}
