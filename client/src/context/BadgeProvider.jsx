import React, { useState } from "react";

const BadgeProvider = (props) => {
  const [badge, setBadge] = useState({
    name: "Example",
    tag: "TAG",
    color: "black",
    style: "for-the-badge",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADWSURBVDiNldOxSgNBFIXhz2CnogjCQhBsrCzMo+Qd7HwCC8FKbHwA7a3zABapU9oIVunSJI0a0iQWFm7CZNm5ux6YYi73/PfcgdnxpwITzDWrgzF6abHARwsznOFtfdmtadjDVQA4Ti91gCPc4imAPFcL6QpdvAfmLdUlWNe7gW+GZQ6wwg9eM+ZT9DHMAaa4CKYPqlGrOsR9ALhsAuyXEW8ygJHkkXOP+IWXIMVGnTZNkXIJTnDX4H3Eoi7BJx7wHZxrHKSm/3wmZW/B9grn5fQ22kz/Ba5eIzqwLnYwAAAAAElFTkSuQmCC",
    logoColor: "white",
    labelColor: "e6e6e6",
  });
  return <div>BadgeProvider</div>;
};

export default BadgeProvider;
