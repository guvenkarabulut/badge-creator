import React, { useContext } from "react";
import BadgeContext from "../../context/BadgeContext";

const StyleSelect = () => {
  const [badge, setBadge] = useContext(BadgeContext);
  return (
    <div>
      {" "}
      <div className="col-span-6 sm:col-span-3">
        <label className="block text-sm font-medium text-gray-700">Style</label>
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
  );
};

export default StyleSelect;
