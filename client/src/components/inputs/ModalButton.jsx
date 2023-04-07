import React, { useContext, useState } from "react";
import BadgeContext from "../../context/BadgeContext";
import Modal from "react-modal";

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
const ModalButton = (props) => {
  const [badge] = useContext(BadgeContext);

  const [htmlOrMd, setHtmlOrMd] = useState(1);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div>
        {" "}
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
                <img className="self-start" src={`${props.url}`} alt="" />
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
                          {
                            {
                              1: `<img src="${props.url}" alt="badge" />`,
                              2: `![badge](${props.url})`,
                            }[htmlOrMd]
                          }
                        </pre>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center mb-2">
                <img
                  className="hover:opacity-70 mr-5"
                  src="https://img.shields.io/badge/HTML-black.svg?style=for-the-badge&logo=HTML5&logoColor=ffffff&labelColor=e34f26"
                  onClick={() => {
                    setHtmlOrMd(1);
                  }}
                  alt="HTML"
                />
                <img
                  className="hover:opacity-70"
                  src="https://img.shields.io/badge/MARKDOWN-black.svg?style=for-the-badge&logo=Markdown&logoColor=ffffff&labelColor=000000"
                  onClick={() => {
                    setHtmlOrMd(2);
                  }}
                  alt="MD"
                />
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
    </>
  );
};

export default ModalButton;
