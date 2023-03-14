import React, { useState } from "react";
import Modal from "react-modal";
// import { toast } from "react-toastify";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const ContentsL = () => {
  const [badge, setBadge] = useState({
    name: "Example",
    color: "black",
    style: "for-the-badge",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADWSURBVDiNldOxSgNBFIXhz2CnogjCQhBsrCzMo+Qd7HwCC8FKbHwA7a3zABapU9oIVunSJI0a0iQWFm7CZNm5ux6YYi73/PfcgdnxpwITzDWrgzF6abHARwsznOFtfdmtadjDVQA4Ti91gCPc4imAPFcL6QpdvAfmLdUlWNe7gW+GZQ6wwg9eM+ZT9DHMAaa4CKYPqlGrOsR9ALhsAuyXEW8ygJHkkXOP+IWXIMVGnTZNkXIJTnDX4H3Eoi7BJx7wHZxrHKSm/3wmZW/B9grn5fQ22kz/Ba5eIzqwLnYwAAAAAElFTkSuQmCC",
    logoColor: "white",
    labelColor: "e6e6e6",
  });

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

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
                    <div className="col-span-3">
                      <label className=" text-sm font-medium text-gray-700">
                        Label Name
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={(e) => {
                          setBadge({ ...badge, name: e.target.value });
                        }}
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Background Color
                      </label>
                      <input
                        type="color"
                        value={`#${badge.color}`}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={(e) => {
                          setBadge({
                            ...badge,
                            color: e.target.value.substring(1),
                          });
                        }}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Style
                      </label>
                      <select
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        onChangeCapture={(e) => {
                          setBadge({ ...badge, style: e.target.value });
                        }}
                      >
                        <option>for-the-badge</option>
                        <option>flat</option>
                        <option>flat-square</option>
                        <option>plastic</option>
                      </select>
                    </div>
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
                        <button
                          type="button"
                          className=" self-end inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={openModal}
                        >
                          Create
                        </button>
                        <Modal
                          isOpen={modalIsOpen}
                          onRequestClose={closeModal}
                          style={customStyles}
                          contentLabel="Example Modal"
                        >
                          <div className=" justify-center">
                            <div className="flex flex-col">
                              <div className="flex justify-center">
                                <img
                                  className="self-start"
                                  src={`https://img.shields.io/badge/${badge.name}-${badge.color}.svg?style=${badge.style}`}
                                  alt=""
                                />
                              </div>

                              <div className="flex justify-center ">
                                <table className="table-fixed m-5 w-3/4 h-3/5">
                                  <tbody>
                                    <tr className="hover:bg-gray-100 focus-within:bg-gray-100">
                                      <td className="border px-4 py-2 box-border w-50">
                                        <pre
                                          className="text-xs text-gray-500 text-ellipsis whitespace-pre-wrap break-all"
                                          role="presentation"
                                        >
                                          <span role="presentation">
                                            src=
                                            {`https://img.shields.io/badge/${badge.name}-${badge.color}.svg?style=${badge.style}`}
                                          </span>
                                        </pre>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>

                              <div className="flex justify-center row-auto">
                                <div className="flex justify-center">
                                  <button
                                    type="button"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={closeModal}
                                  >
                                    Close
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Modal>
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
