"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { div } from "framer-motion/client";
import { FloatingDockDemo } from "@/components/Navbar";

export default function ShowCase() {
  return (
    <>
      <div className="min-h-screen bg-slate-950 flex items-center justify-center py-5 overflow-hidden">
          <div className="flex flex-row gap-12 flex-wrap justify-center">
              <CardContainer className="inter-var">
                  <CardBody className="bg-slate-700 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-5 border  ">
                      <CardItem
                          translateZ="50"
                          className="text-xl font-bold text-white dark:text-white"
                          >
                              Clarity Base
                      </CardItem>
                      <CardItem
                          as="p"
                          translateZ="60"
                          className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
                          >
                          Kalian bisa melihat dan meng-upload projek website yang telah kalian buat disini!
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4">
                          <img
                              src="/clarity.png"
                              height="1000"
                              width="1000"
                              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                              alt="thumbnail"
                          />
                      </CardItem>
                      <div className="flex justify-between items-center mt-20">
                          <CardItem
                              translateZ={20}
                              as="a"
                              href="https://www.claritybase.icu/"
                              target="__blank"
                              className="px-4 py-2 rounded-xl text-right bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                          >
                              Curious? →
                          </CardItem>
                      </div>
                  </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                  <CardBody className="bg-slate-700 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-5 border  ">
                      <CardItem
                          translateZ="50"
                          className="text-xl font-bold text-white dark:text-white"
                          >
                              Clarity Base
                      </CardItem>
                      <CardItem
                          as="p"
                          translateZ="60"
                          className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
                          >
                          Kalian bisa melihat dan meng-upload projek website yang telah kalian buat disini!
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4">
                          <img
                              src="/clarity.png"
                              height="1000"
                              width="1000"
                              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                              alt="thumbnail"
                          />
                      </CardItem>
                      <div className="flex justify-between items-center mt-20">
                          <CardItem
                              translateZ={20}
                              as="a"
                              href="https://www.claritybase.icu/"
                              target="__blank"
                              className="px-4 py-2 rounded-xl text-right bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                          >
                              Curious? →
                          </CardItem>
                      </div>
                  </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                  <CardBody className="bg-slate-700 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-5 border  ">
                      <CardItem
                          translateZ="50"
                          className="text-xl font-bold text-white dark:text-white"
                          >
                              Clarity Base
                      </CardItem>
                      <CardItem
                          as="p"
                          translateZ="60"
                          className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
                          >
                          Kalian bisa melihat dan meng-upload projek website yang telah kalian buat disini!
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4">
                          <img
                              src="/clarity.png"
                              height="1000"
                              width="1000"
                              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                              alt="thumbnail"
                          />
                      </CardItem>
                      <div className="flex justify-between items-center mt-20">
                          <CardItem
                              translateZ={20}
                              as="a"
                              href="https://www.claritybase.icu/"
                              target="__blank"
                              className="px-4 py-2 rounded-xl text-right bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                          >
                              Curious? →
                          </CardItem>
                      </div>
                  </CardBody>
              </CardContainer>
          </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full flex items-center justify-center z-50">
          <FloatingDockDemo />
      </div>
    </>
  );
}
