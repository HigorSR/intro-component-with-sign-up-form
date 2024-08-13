import Footer from "@/components/footer";
import Form from "@/components/form";
import Header from "@/components/header";
import TestFree from "@/components/test-free";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-14 bg-[url('../../public/bg-intro-mobile.png')] bg-cover bg-no-repeat bg-center bg-Red pt-20 pb-5 md:flex-row md:gap-10 md:h-dvh 
    sm:bg-[url('../../public/bg-intro-desktop.png')]">
      <Header />

      <div className="flex flex-col gap-6 mx-6 xl:w-[500px]">
        <TestFree />

        <Form />

        <Footer />
      </div>
    </main>
  );
}
