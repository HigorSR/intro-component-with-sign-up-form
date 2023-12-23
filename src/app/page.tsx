'use client'

import Form from "@/components/form";
import Paragraph from "@/components/paragraph";
import Title from "@/components/title";
import TryItFree from "@/components/try-it-free";

export default function Home() {
  return (
    <main className=''>
      <div className='flex flex-col items-center gap-14 pt-[88px] bg-image bg-Red xl:flex-row xl:pt-0 xl:gap-0 xl:justify-center'>
        <div className='flex flex-col gap-5 xl:w-[550px] xl:gap-8'>
          <Title />
          <Paragraph />
        </div>

        <div className='flex flex-col gap-5 mx-5 mb-16 xl:w-[600px] xl:mx-0'>
          <TryItFree />
          <Form />
        </div>
      </div>
    </main>
  )
}
