import React, { useContext } from "react";
import BadgeContext from "../../context/BadgeContext";

const TagInput = () => {
  const [badge, setBadge] = useContext(BadgeContext);

  return (
    <div>
      {" "}
      <div className="col-span-3">
        <label className=" text-sm font-medium text-gray-700">Tag</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          onChange={(e) => {
            setBadge({ ...badge, tag: e.target.value });
          }}
        />
      </div>
    </div>
  );
};

export default TagInput;
