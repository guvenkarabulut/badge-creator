import React, { useContext } from "react";
import BadgeContext from "../context/BadgeContext";
import LabelNameInput from "./inputs/LabelNameInput";
import BackgroundColorInput from "./inputs/BackgroundColorInput";
import StyleSelect from "./inputs/StyleSelect";
import ModalButton from "./inputs/ModalButton";
// import { toast } from "react-toastify";

const ContentsL = () => {
  const [badge] = useContext(BadgeContext);

  return (
    <>
      <div className="mt-10 sm:mt-0 m-5">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Brands Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                To create a badge, simply select the badge style that you want
                to use. You can then enter the text that you want to appear on
                the badge. Once you have entered your text, you can preview the
                badge to see how it will look.
              </p>
            </div>
          </div>
          <div className="mt-2 md:col-span-2 md:mt-0">
            <form>
              <div className="sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <LabelNameInput />
                    <BackgroundColorInput />
                    <StyleSelect />
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <div className="mt-10 sm:mt-0 ">
                    <div className="px-4 sm:px-0 flex justify-between">
                      <img
                        className="self-start"
                        src={`https://img.shields.io/badge/${badge.name}-${badge.color}.svg?style=${badge.style}`}
                        alt=""
                      />
                      <div>
                        <ModalButton
                          url={`https://img.shields.io/badge/${badge.name}-${badge.color}.svg?style=${badge.style}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
};

export default ContentsL;
