import Image from "next/image";
export default function Home() {
  return (
    <main className="flex container m-auto justify-between mt-32">
      <div className="w-[50%]  h-[50vh] items-center flex justify-center ">
        <Image
          src="https://www.boat-lifestyle.com/cdn/shop/products/Nirvana551ANCPackaging1.3_700x.png?v=1681413243"
          width={500}
          height={500}
        />
      </div>
      <div className="w-[50%]">
        <div>
          <h1 className="font-bold text-5xl">Boat Rockerz 551ANC</h1>
          <p className="font-light mt-5">
            Noise Cancelling Wireless Headphone, Upto 100 Hours Playback, 40mm
            Driver, ENx™ Technology, Custom-tuned EQ Mode
          </p>
        </div>

        <div className="mt-5">
          <p>₹3,299</p>
          <strike>₹37,990</strike> <span>59% off</span>
        </div>
      </div>
    </main>
  );
}
