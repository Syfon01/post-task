import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CreatePost from '../components/create-post';
import CreatePartner from '../components/create-partner';
import hotelImg from "../img/Hotel1.png";
import partnerImg from "../img/partner.png";
import { useState } from 'react';

export default function Home() {
  const [openHotel, setOpenHotel] = useState(false)
  const [openPartner, setOpenPartner] = useState(false);

  
  const handleBookHotel = () => {
    setOpenHotel(true)
  }
  const handleBookPartner = () => {
    setOpenPartner(true);
  };
  const handleClose = () => {
    setOpenHotel(false);
  };
  const handleClosePartner = () => {
    setOpenPartner(false);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Totel frontend post</title>
        <meta name="description" content="Test interview for frontend" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="container pt-10">
        <div className="main-bg md:p-10 p-3">
          <div className="flex  justify-between items-center h-[60vh]">
            <div className="w-full">
              <div className="flex md:flex-row flex-col justify-between">
                <div className="md:w-[60%]">
                  <h3 className="md:text-5xl text-3xl mb-5">
                    Click to create Post based on <br />
                    <span className="font-bold">Category</span>
                  </h3>
                </div>

                <div className="md:w-[30%]">
                  <div className="p-4 bg-white rounded-xl space-y-4">
                    <button onClick={handleBookHotel}>
                      <div className="md:px-4 md:pt-2 p-3 bg-[#DFE8FF] rounded-2xl">
                        <div className="flex justify-between text-left items-center">
                          <div className="md:w-[40%]">
                            <Image src={hotelImg} />
                          </div>
                          <div className="md:w-[60%]">
                            <p className="font-semibold text-xl">
                              Already Booked
                            </p>
                            <p className="text-sm">
                              My hotel is booked just looking for partner
                            </p>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className="w-full" onClick={handleBookPartner}>
                      <div className="md:px-4 md:pt-2 p-3 bg-[#FFD6D6] rounded-2xl w-full">
                        <div className="flex justify-between  items-center text-left">
                          <div className="md:w-[50%]">
                            <p className="font-semibold text-xl">
                              Finding partner
                            </p>
                            <p className="text-sm">
                              I’m looking for travel partner
                            </p>
                          </div>

                          <div className="md:w-[30%]">
                            <Image src={partnerImg} />
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CreatePost openModal={openHotel} closeModal={handleClose} />
        <CreatePartner
          openPartnerModal={openPartner}
          closePartnerModal={handleClosePartner}
        />
      </main>
    </div>
  );
}
