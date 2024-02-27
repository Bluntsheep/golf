import AccommodationBlocks from "@/components/ui/accommodationBlocks";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const venues = [
    { lable: "The Estate", bgImage: "/estate.jpeg" },
    { lable: "Golf & Clubhouse", bgImage: "/golf.jpeg" },
    { lable: "Property", bgImage: "/property.jpeg" },
    { lable: "Accommodation", bgImage: "/accommodation.jpeg" },
  ];

  return (
    <main>
      <div className=" container bg-[url('/golfbackground.jpeg')] bg-cover w-screen h-[75dvh] flex items-end">
        <div className=" mb-20 ml-3 md:ml-20">
          <h1 className=" text-3xl md:text-5xl font-light text-white mb-9">
            Silwerstrand Golf & River Estate
          </h1>
          <p className=" text-xs md:text-base text-white">
            ROBERTSON | WESTERN CAPE | SOUTH AFRICA
          </p>
        </div>
      </div>
      <div className=" container">
        <div className=" flex flex-col container pt-2 px-32 text-sm text-center items-center">
          <Image
            className=" p-10"
            width={300}
            height={300}
            src={"/logo.png"}
            alt="Silwerstrand Logo"
          />
          <p>
            The Silwerstrand Golf and River Estate is located in the Robertson
            district, just outside the country town of Robertson on the way
            to/from Worcester. The Estate is home to the Robertson Golf Club,
            custodian of the 18-hole Silwerstrand golf course. The Estate is
            divided into three parts, the Golf Estate, situated on and around
            the golf course, the Village Estate and the Hillside/Riverside
            Estate, both of which are flanked by the Breede River, The Estate
            comprises of 401 ervens of which approximately 336 have been sold. A
            number of homes are in various state of completion - from completed
            and occupied to foundations being dug.
          </p>
        </div>
        <hr className=" m-10 border-[1px] border-solid border-b-slate-400 " />
        <div className=" container flex flex-col text-center items-center">
          <p>BOOK YOUR TEE TIME IN ADVANCE</p>
          <Link href={"/golfing/#booking"}>
            <Button className=" rounded-3xl max-w-[200px] my-5">
              BOOK YOUR TEE ONLINE
            </Button>
          </Link>
          <p>
            For Tee Times Reservations
            <br /> Tel: 023 626 1090
            <br /> Email: proshop@silwerstrand.co.za
          </p>
        </div>
        <hr className=" m-10 border-[1px] border-solid border-b-slate-400 " />
      </div>
      <div className=" sm:flex mb-5 px-5">
        {venues.map((venue) => (
          <AccommodationBlocks
            key={venue.lable}
            lable={venue.lable}
            bgImage={venue.bgImage}
          />
        ))}
      </div>
      <div className=" container mb-3">
        <div className=" h-[60vh] container bg-[url(/golfcourse.jpeg)] bg-cover bg-bottom">
          <div className=" h-[100%] w-[100%] md:w-[40%] bg-black/70 flex items-center p-5">
            <div className=" container pl-5 bottom">
              <p className=" text-white text-3xl mb-4">Golf Course News</p>
              <p className=" text-white ">
                Greens: The greens are currently in a good playable condition
                with an average roll speed of nine on the stimp meter. All
                greens re-ceived the following:
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" container mb-3">
        <div className=" h-[60vh] container bg-[url(/comp.jpeg)] bg-cover bg-bottom ">
          <div className=" h-[100%] w-[100%] md:w-[40%] bg-black/70 flex items-center p-5">
            <div className=" container pl-5 bottom">
              <p className=" text-white text-3xl mb-4">
                Competitions and club activities
              </p>
              <p className=" text-white ">
                Upcoming Golf day’s 2021 30 January 2021: Jacquin Hess
                Invitational 06 March 2021: Robertson Ladies Open 12 & 13 March
                2021:
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" container mb-3">
        <div className=" h-[60vh] container bg-[url(/rest.jpeg)] bg-cover bg-bottom">
          <div className=" h-[100%] w-[100%] md:w-[40%] bg-black/70 flex items-center p-5">
            <div className=" container pl-5 bottom">
              <p className=" text-white text-3xl mb-4">
                Restaurant News & Specials
              </p>
              <p className=" text-white ">
                Greens: The greens are currently in a good playable condition
                with an average roll speed of nine on the stimp meter. All
                greens re-ceived the following:
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
