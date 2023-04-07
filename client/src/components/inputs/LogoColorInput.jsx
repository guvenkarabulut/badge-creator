import React, { useContext } from "react";
import BadgeContext from "../../context/BadgeContext";

const LogoColorInput = () => {
  const [badge, setBadge] = useContext(BadgeContext);

  return (
    <div>
      {" "}
      <div className="col-span-6 sm:col-span-3">
        <label className="block text-sm font-medium text-gray-700">
          Logo Color
        </label>
        <input
          type="color"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={`#${badge.logoColor}`}
          onChange={(e) => {
            setBadge({
              ...badge,
              logoColor: e.target.value.substring(1),
            });
          }}
        />
      </div>
    </div>
  );
};

export default LogoColorInput;
