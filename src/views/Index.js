/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className=" bg-black header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="z-10 container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
            <h2 className="font-semibold text-4xl text-white">
                Launch your career
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white">
              Your story starts with our network of companies, startups, and more. Our AI engine bridges the gap between students and organizations, allowing you to land internships in a matter of days.
              </p>
              <div className="mt-12">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute z-20 top-0 b-auto right-0 pt-16"
          src={require("assets/img/kkkk.gif").default}
          alt="..."
        />
      </section>

      <section className="bg-black relative ">

        <div className="bg-black container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-xl font-bold text-white">
                    A platform for finding the right internships
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Open access to top startups around the world that you would have never known about otherwise, with an emphasis on Silicon Valley.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-white text-xl mb-1 font-semibold">
                        Community of fellows
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                       
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-white text-xl mb-1 font-semibold">
                        Networking with top universities and investors
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                 
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl text-white mb-1 font-semibold">Flexible work schedules</h6>
                      <p className="mb-4 text-blueGray-500">
                       
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-white text-xl mb-1 font-semibold">
                        Get paid internships through our simple form
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden">

          <div className="flex flex-wrap items-center pt-10">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a
                    target="_blank"
                  >
                    <div className="bg-black shadow-lg rounded-lg text-center">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full mx-auto"
                        src="https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/08/mit-logo.jpg"
                      />
                      <p className="text-lg text-white font-semibold">
                        MIT
                      </p>
                    </div>
                  </a>
                  <a
                    target="_blank"
                  >
                    <div className="bg-black shadow-lg rounded-lg text-center">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full mx-auto"
                        src="https://pbs.twimg.com/media/FGh2KFWVkAAmjWv.jpg:large"
                      />
                      <p className="text-lg text-white mt-4 mb-8 font-semibold">
                        Stanford
                      </p>
                    </div>
                  </a>
                  <a
                    target="_blank"
                  >
                    <div className="bg-black shadow-lg rounded-lg text-center">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full mx-auto"
                        src="https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo-Meaning-history.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Harvard
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                <a
                    target="_blank"
                  >
                    <div className="bg-black shadow-lg rounded-lg text-center">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full mx-auto"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png"
                      />
                      <p className="text-lg text-white mt-8 font-semibold">
                        UC Berkeley
                      </p>
                    </div>
                  </a>
                  <a
                    target="_blank"
                  >
                    <div className="bg-black shadow-lg rounded-lg text-center">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full mx-auto"
                        src="https://s3.amazonaws.com/bf.boulder.prod/q6s4om-8pxqnk-fk806r/v/11741413/original/Techstars_Blinking.gif"
                      />
                      <p className="text-lg text-white font-semibold">
                        Techstars
                      </p>
                    </div>
                  </a>
                  <a
                    target="_blank"
                  >
                    <div className="bg-black shadow-lg mt-12 rounded-lg text-center">
                      <img
                        alt="..."
                        className="shadow-md max-w-full mx-auto"
                        src="https://entrepreneurship.brown.edu/wp-content/uploads/2021/01/y-combinator.jpg"
                      />
                      <p className="text-lg text-white mt-8 font-semibold">
                        Y Combinator
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-black">
                <i className="fas fa-drafting-compass text-xl"></i>
              </div>
              <h3 className="text-white text-3xl mb-2 font-semibold leading-normal">
                Backed by top universities and investors
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white">
                In order to create a great environment for students looking to land positions, we have put together this set of great opportunities.
              </p>
             
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-white text-3xl font-semibold">
                  The Details
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
             
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          All technical internships are paid (atleast $15 per hour) and are remote.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Minimum age of 14 years is required for paid work. If that requirement is not met, there are still other opportunities to network and land positions.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          The expertise and talent is not limited to coding, and people from all backgrounds and interests can land positions.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Access to this community and the opportunities are completely free, and internships are offered year-round on a rolling basis.
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/123.jpeg").default}
              />
            </div>
          </div>
        </div>




        <div className="pt-20 mt-20 container mx-auto">
          <div className="flex flex-wrap justify-center bg-gray-700 shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  
                </span>
              </p>
              <h3 className="text-white font-semibold text-3xl">
                What are you waiting for?
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="/Profile"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>

              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
        </section>
      <Footer />
    </>
  );
}
