import React, { useEffect, useState } from 'react'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "./firebase.config";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Avatar from "../img/avatar.png";
import UserIcon from "../img/user.svg"
import postImg from "../img/post-img.png"

const Post = () => {


  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setLoading(true)
      setPosts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        
        }))

      );
      setLoading(false)
      // console.log(querySnapshot)
       console.log(posts);
    });
  }, [loading]);
  return (
    <>
      <section className="bg-[#FCFCFF] min-h-screen">
        <main className="container py-10">
          <div class="grid grid-cols-4 gap-4">
            {posts.map((post) => (
              <div className="border border-[#E9E9EE] rounded-xl">
                <div className="">
                  <div className="card-header p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div>
                          <Image
                            src={Avatar}
                            alt="avatar"
                            className="rounded-full"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="font-medium mb-0">Sonya Clarke </p>
                          <p className="text-xs text-gray-500">
                            {" "}
                            {new Date(post.data?.created.toDate().toString()).toDateString()}
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

                  <div className="h-60 w-full relative">
                    <Image src={postImg} layout="fill" objectFit="cover" />
                    <div className="absolute bottom-0 rounded-full font-medium text-white bg-purplePrimary py-1 px-3 mb-5 ml-4">
                      {post.data?.gender}
                    </div>
                  </div>

                  <div className=" p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="rounded-full p-1 border border-[#E9E9EE]">
                          <p className="font-medium">{post.data?.date}</p>
                        </div>
                      </div>
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
                    <h6 className="font-bold text-xl mb-6 mt-4">
                      {post.data?.place}
                    </h6>

                    <p>
                      <span className="text-xl font-medium">${post.data?.amount}</span>
                      <span className="text-sm">/Day</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>
    </>
  );
}

export default Post