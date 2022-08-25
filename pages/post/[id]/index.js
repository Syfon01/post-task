import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  doc,
  getDoc,
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../../firebase.config";
import styles from "../../../styles/Home.module.css";
import Image from "next/image";
import Avatar from "../../../img/avatar.png";
import UserIcon from "../../../img/user.svg";
import postImg from "../../../img/post-img.png";

const PostDetails = () => {
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const { id } = router.query;

  const docRef = doc(db, "posts", id);

  useEffect(() => {
    
    onSnapshot(docRef, (doc) => {
      setDetails(doc.data());
    });
      setLoading(false);

    // console.log("details", details);
  }, [loading]);
  return (
    <section className="bg-[#FCFCFF] min-h-screen">
      <main className="container py-10">
        {loading ? (
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="">
            <div className="h-80 w-full relative">
              <Image
                src={details?.imageUrl ? details?.imageUrl : postImg}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                alt=""
              />
            </div>

            <div className="flex md:flex-row justify-between items-center flex-col mt-4">
              <p className="text-sm text-gray-500">
                {" "}
                {new Date(details?.created.toDate().toString()).toDateString()}
              </p>
              <div>
                <button
                  className="border rounded-full px-2 py-1.5 flex justify-center items-center border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  // onClick={}
                >
                  <svg
                    width="12"
                    height="18"
                    viewBox="0 0 12 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 1H9C9.53043 1 10.0391 1.21071 10.4142 1.58579C10.7893 1.96086 11 2.46957 11 3V17L6 14L1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex md:flex-row flex-col mt-2 gap-x-10">
              <div className="md:w-[70%]">
                <div className="flex justify-between mt-2">
                  <p className="md:text-4xl font-bold md:w-1/2 w-3/4">
                    {" "}
                    {details?.hotelname ? details.hotelName : details?.place}
                  </p>

                  <div className="mt-3">
                    <div className="rounded-full p-1 border border-[#E9E9EE]">
                      <p className="font-medium">4.0</p>
                    </div>
                  </div>
                </div>
                <div className=" py-6">
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <div className="rounded-full p-1 border border-[#E9E9EE]">
                        <p className="font-medium">{details?.date}</p>
                      </div> 
                      <div className="rounded-full font-medium text-white bg-[#F26465] py-1 px-3 ml-5">
                        {details?.gender} 
                      </div>
                    </div>
                    <p>
                      <span className="text-3xl font-medium">
                        ${details?.amount}
                      </span>
                      <span className="text-2xl text-rhythm">/Day</span>
                    </p>
                  </div>
                </div>
                <hr />

                <div className="py-5">
                  <h5 className="text-2xl font-medium">Details</h5>
                  <p className="text-rhythm mt-3">{details?.message}</p>
                </div>
              </div>
              <div className="md:w-[30%]">
                <div className="rounded-lg bg-white box-shade p-4 mt-3">
                  <div className="rounded-lg border border-[#E9E9EE] p-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div>
                          <Image
                            src={Avatar}
                            alt="avatar"
                            className="rounded-lg"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="font-medium mb-0">Sonya Clarke </p>
                          <p className="text-xs text-gray-500">
                            {" "}
                            March 24, 2020
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="flex items-center rounded-full px-2 py-0.5 bg-[#E99D44]">
                          <Image src={UserIcon} alt="rating" />
                          <span className="ml-2 text-white">2.0</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-5 justify-between">
                    <div className="w-40 mr-4">
                      <button className="w-full border border-purplePrimary text-purplePrimary rounded-lg px-5 py-2">
                        Request
                      </button>
                    </div>
                    <div className="w-60">
                      <button className="w-full border bg-purplePrimary text-white rounded-lg px-5 py-2">
                        Send Message
                      </button>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </section>
  );
};

export default PostDetails;
