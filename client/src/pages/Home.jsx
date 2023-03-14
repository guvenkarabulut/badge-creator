import React, { useState } from "react";
import Contents from "../components/ContentsLBL";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContentsLBLT from "../components/ContentsLBLT";
import ContentsL from "../components/ContentsL";
import { Helmet } from "react-helmet";

const Home = () => {
  const [tab, setTab] = useState("1");
  return (
    <div>
      <Helmet>
        <title>Badge Creator</title>
        <meta
          name="description"
          content="Badge creator is a tool to create your own custom shields.io
                  badge. We provide a simple interface to create your own custom
                  badge. You can use it to create your own custom badge for your
                  project."
        />
        <meta
          name="keywords"
          content="badge, badge creator, shields.io, react, tailwind, tailwindcss, badgeCreator, shields.io badge creator"
        />
        <meta name="author" content="guvenkarabulut" />
      </Helmet>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-gray-100 p-5 border-l-8 border-gray-300">
        <div className="m-5 flex justify-center">
          <img
            className="mr-5 hover:opacity-75"
            src="https://img.shields.io/badge/Example-000000.svg?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADWSURBVDiNldOxSgNBFIXhz2CnogjCQhBsrCzMo+Qd7HwCC8FKbHwA7a3zABapU9oIVunSJI0a0iQWFm7CZNm5ux6YYi73/PfcgdnxpwITzDWrgzF6abHARwsznOFtfdmtadjDVQA4Ti91gCPc4imAPFcL6QpdvAfmLdUlWNe7gW+GZQ6wwg9eM+ZT9DHMAaa4CKYPqlGrOsR9ALhsAuyXEW8ygJHkkXOP+IWXIMVGnTZNkXIJTnDX4H3Eoi7BJx7wHZxrHKSm/3wmZW/B9grn5fQ22kz/Ba5eIzqwLnYwAAAAAElFTkSuQmCC&logoColor=white&labelColor=e6e6e6"
            alt="BrandAndLogo"
            onClick={() => {
              setTab("1");
            }}
          />
          <img
            className="mr-5 hover:opacity-75"
            src="https://img.shields.io/badge/Tag-Example-000000.svg?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADWSURBVDiNldOxSgNBFIXhz2CnogjCQhBsrCzMo+Qd7HwCC8FKbHwA7a3zABapU9oIVunSJI0a0iQWFm7CZNm5ux6YYi73/PfcgdnxpwITzDWrgzF6abHARwsznOFtfdmtadjDVQA4Ti91gCPc4imAPFcL6QpdvAfmLdUlWNe7gW+GZQ6wwg9eM+ZT9DHMAaa4CKYPqlGrOsR9ALhsAuyXEW8ygJHkkXOP+IWXIMVGnTZNkXIJTnDX4H3Eoi7BJx7wHZxrHKSm/3wmZW/B9grn5fQ22kz/Ba5eIzqwLnYwAAAAAElFTkSuQmCC&logoColor=white&labelColor=e6e6e6"
            alt="BrandTagAndLogo"
            onClick={() => {
              setTab("2");
            }}
          />
          <img
            className="mr-5 hover:opacity-75"
            src="https://img.shields.io/badge/Example-000000.svg?style=for-the-badge"
            alt="BrandTagAndLogo"
            onClick={() => {
              setTab("3");
            }}
          />
        </div>
      </div>
      {
        {
          1: <Contents />,
          2: <ContentsLBLT />,
          3: <ContentsL />,
        }[tab]
      }
      <Footer />
    </div>
  );
};

export default Home;
