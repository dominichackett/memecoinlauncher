/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React from 'react';

export default function Notification(props:any) {
  const [show, setShow] = useState(props.show);

  const close = async () => {
    setShow(false);
    props.close();
  };

 
  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="fixed top-14 left-0 right-0	 z-50 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={props.show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={`max-w-sm w-full ${
                props.type == 1 ? "bg-[#4ade80]" : (props.type == 2 ? "bg-[#ef4444]" : "bg-[#3b82f6]")
              } shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden`}
            >
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {props.type == 1 ? (
                      <CheckCircleIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    ) : (
                      <ExclamationCircleIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-white">
                      {props.title}
                    </p>
                    <p className="mt-1 text-sm text-white">
                      {props.description}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    
                    
                    <button
                      type="button"
                      className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      onClick={() => {
                        close();
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}