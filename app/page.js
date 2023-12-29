"use client";
import Image from "next/image";
import Link from 'next/link';
import WorkshiftlyLogos from "../public/images/WorkshiftlyLogos.svg";
import dashboard from "../public/images/dashboard.svg";

export default function Home() {
  return (
    <main className="content-center font-['Inter'] bg-backgroundColor">
      <div className="grid lg:grid-cols-6">
        <div className="lg:col-span-1 left-nav p-6 ms-5 mt-5 me-5 mb-5 lg:flex bg-white rounded-2xl">
          <div className="">
            <Image src={WorkshiftlyLogos} />
            <div className="dash-content h-screen flex">
              {/* <div className="dashboard">
                <Image src={dashboard} />
                <p className="dashboardText">Dashboard</p>
                <div className="w-[183px] h-[37px] bg-slate-900 rounded-[10px]"></div>
              </div> */}
              <ul>
                {/* Item 1 */}
                <li className="flex items-center mb-4">
                  <div className="w-6 h-6 bg-gray-900 mr-2"></div>
                  <Image
                    src={dashboard}
                    width={20}
                    height={20}
                    alt="SVG Image 1"
                  />
                  <Link href="#" legacyBehavior>
                    <a className="ml-2 text-white">Item 1</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <div className="right-set lg:flex bg-white rounded-2xl p-10 mt-5 me">
            <div>
              <h2>This is right set</h2>
              <h2>This is right set</h2>
            </div>
          </div>
          <div className="right-set grid lg:grid-cols-5">
            <div className="lg:col-span-1 lg:flex bg-white rounded-2xl p-10 mt-5 me-5">
              <h2>This is right second set</h2>
            </div>
            <div className="lg:col-span-2 lg:flex bg-white rounded-2xl p-10 mt-5 me-5">
              <h2>This is right second set</h2>
            </div>
            <div className="lg:col-span-2 lg:flex bg-white rounded-2xl p-10 mt-5 me-5">
              <h2>This is right second set</h2>
            </div>
          </div>
          <div className="grid lg:grid-cols-2">
            <div className="lg:col-span-1 lg:flex bg-white rounded-2xl p-10 mt-5 me-5 mb-5">
              <h2>This is right set</h2>
            </div>
            <div className="lg:col-span-1 lg:flex bg-white rounded-2xl p-10 mt-5 me-5 mb-5">
              <h2>This is right set</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
