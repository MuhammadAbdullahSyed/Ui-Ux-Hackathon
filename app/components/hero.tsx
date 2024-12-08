import Image from "next/image";
import HeroImage from "../../public/image/heroimage.png";
export default function Hero() {
  return (
    <>
      {/* w90rem h 63 */}
      <div className="heroImage">
        <Image
          src={HeroImage}
          width={2800}
          height={100}
          alt="Picture of the author"
        />
        <div className="ml-10  -mt-28 h-[443px] w-[643] heroText bg-[#FFF3E3] ">
          <h6>New Arrival</h6>
          <h3 className="my-5">Discover Our <br /> <br /> New Collection</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className=" mt-10 buyBtn">BUY NOW</button>
        </div>
      </div>
    </>
  );
}
