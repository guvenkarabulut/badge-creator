import React, { useContext, useState } from "react";
import BadgeContext from "../../context/BadgeContext";
import allBrand from "../../assets/brands.json";
import EmojiPicker from "emoji-picker-react";

const LogoSelect = () => {
  const [badge, setBadge] = useContext(BadgeContext);
  const [fileInputState, setFileInputState] = useState(false);
  const [selectedBrandHex, setSelectedBrandHex] = useState("#000000");

  const [logoType, setLogoType] = useState(1);
  const [emojiBase64, setEmojiBase64] = useState("");
  const [emoji, setEmoji] = useState("");

  const onSelectChangeHandler = (e) => {
    setLogoType(e.target.value);
  };

  const onEmojiClickHandler = (event, emojiObject) => {
    try {
      setEmoji(emojiObject.target.currentSrc);
      fetch(emojiObject.target.currentSrc)
        .then((response) => response.blob())
        .then((blob) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            setEmojiBase64(reader.result);
            setBadge({ ...badge, logo: reader.result });
          };
          reader.readAsDataURL(blob);
          setLogoType(0);
        });
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div>
      {" "}
      <div className="col-span-6 sm:col-span-3">
        <div className="col-span-6 sm:col-span-3 flex">
          <select
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            onChange={onSelectChangeHandler}
          >
            <option value={0}>Please Select a Logo Type</option>
            <option value={1}>Simple Icons Logo</option>
            <option value={2}>Emoji</option>
            <option value={3}>Local File</option>
          </select>
        </div>
        {
          {
            0: (
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select a Logo Type
                </label>
              </div>
            ),
            1: (
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Brands
                </label>
                <select
                  autoComplete="country-name"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  onChangeCapture={(e) => {
                    setBadge({
                      ...badge,
                      logo: e.target.selectedOptions[0].text,
                    });
                    setSelectedBrandHex(e.target.value);
                  }}
                >
                  {allBrand.map((brand) => (
                    <option key={brand.slug} value={brand.hex}>
                      {brand.title}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-400 mx-4 my-4">
                  Simple icons recomended this color code :{selectedBrandHex}
                  <span
                    className="ml-2 rounded-full w-4 h-4"
                    style={{
                      backgroundColor: `#${selectedBrandHex}`,
                      color: `#${selectedBrandHex}`,
                    }}
                  >
                    HEX
                  </span>
                </p>
              </div>
            ),
            2: (
              <div>
                <EmojiPicker onEmojiClick={onEmojiClickHandler} />
              </div>
            ),
            3: (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  İcon
                </label>
                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <img
                      style={{ width: "70px", height: "70px" }}
                      src={`https://img.shields.io/badge/-white.svg?style=${badge.style}&logo=${badge.logo}`}
                      alt="badge"
                    />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={(e) => {
                            const reader = new FileReader();
                            reader.readAsDataURL(e.target.files[0]);
                            reader.onload = () => {
                              if (reader.result.length > 8192) {
                                alert("File size is too big!");
                              } else {
                                setBadge({
                                  ...badge,
                                  logo: reader.result,
                                });
                              }
                            };
                          }}
                        />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">8192 bytes</p>
                  </div>
                </div>
              </div>
            ),
          }[logoType]
        }
      </div>
    </div>
  );
};

export default LogoSelect;
