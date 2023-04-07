import React, { useContext } from "react";
import BadgeContext from "../../context/BadgeContext";

const BadgeBackgroundColor = () => {
  const [badge, setBadge] = useContext(BadgeContext);

  return (
    <div>
      {" "}
      <div className="col-span-6 sm:col-span-3">
        <label className="block text-sm font-medium text-gray-700">
          Badge Background Color
        </label>
        <input
          type="color"
          value={`#${badge.labelColor}`}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          onChange={(e) => {
            setBadge({
              ...badge,
              labelColor: e.target.value.substring(1),
            });
          }}
        />
      </div>
    </div>
  );
};

export default BadgeBackgroundColor;
