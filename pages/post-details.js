import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Avatar from "../img/avatar.png";
import UserIcon from "../img/user.svg";
import postImg from "../img/post-img.png";

const PostDetails = () => {
  return (
    <section className="bg-[#FCFCFF] min-h-screen">
      <main className="container py-10">
        <div class="">
          <div className="h-80 w-full relative">
            <Image
              src={postImg}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>

          <div className="flex md:flex-row justify-between items-center flex-col mt-4">
            <p className="text-sm text-gray-500"> March 24, 2020</p>
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
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex md:flex-row flex-col mt-2 gap-x-10">
            <div className="md:w-[70%]">
              <div className="flex justify-between mt-2">
                <p className="md:text-4xl font-bold md:w-1/2 w-3/4">
                  The Zuri White Sands Goa Resort and Casino
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
                      <p className="font-medium">4 Jun - 6 Jun</p>
                    </div>
                    <div className="rounded-full font-medium text-white bg-[#F26465] py-1 px-3 ml-5">
                      Female only
                    </div>
                  </div>
                  <p>
                    <span className="text-3xl font-medium">$100.00</span>
                    <span className="text-2xl text-rhythm">/Day</span>
                  </p>
                </div>
              </div>
              <hr />

              <div className="py-5">
                <h5 className="text-2xl font-medium">Details</h5>
                <p className="text-rhythm mt-3">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
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
                        <p className="text-xs text-gray-500"> March 24, 2020</p>
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
      </main>
    </section>
  );
};

export default PostDetails;
