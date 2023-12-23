export default function Home() {
  return (
    <main className=''>
      <div className='flex flex-col items-center gap-14 pt-[88px] bg-image bg-Red xl:flex-row xl:pt-0 xl:gap-0 xl:justify-center'>

        <div className='flex flex-col gap-5 xl:w-[550px] xl:gap-8'>
          <h1 className='text-white text-[28px] text-center font-semibold leading-10 xl:text-5xl xl:text-start xl:pr-20'>Learn to code by watching others</h1>
          <p className='text-white text-center px-8 leading-relaxed xl:text-start xl:px-0'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
        </div>

        <div className='flex flex-col gap-5 mx-5 mb-16 xl:w-[600px] xl:mx-0'>
          <p className='text-white text-center px-16 py-5 bg-Blue rounded-xl shadow'><span className='font-semibold'>Try it free 7 days</span> then $20/mo. thereafter</p>

          <form className='flex flex-col gap-6 py-6 px-4 bg-white rounded-xl shadow'>
            <input
              type="text"
              placeholder='First Name'
              className='placeholder:text-Dark-Blue font-medium border border-gray-300 p-4 rounded-md' />

            <input
              type="text"
              placeholder='Last Name'
              className='placeholder:text-Dark-Blue font-medium border border-gray-300 p-4 rounded-md' />
            <input
              type="text"
              placeholder='Email Address'
              className='placeholder:text-Dark-Blue font-medium border border-gray-300 p-4 rounded-md' />
            <input
              type="password"
              placeholder='Password'
              className='placeholder:text-Dark-Blue font-medium border border-gray-300 p-4 rounded-md' />

            <button className='text-white font-medium uppercase tracking-widest bg-Green py-5 rounded-lg shadow-green'>Claim your free trial</button>

            <p className='text-center text-xs text-Grayish-Blue px-2'>By clicking the button, you are agreeing to our <span className='text-Red font-semibold leading-loose'>Terms and Services</span></p>
          </form>
        </div>

      </div>
    </main>
  )
}
