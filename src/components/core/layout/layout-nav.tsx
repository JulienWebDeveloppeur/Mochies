import { useState } from "react";
import { MenuInfo } from "rc-menu/lib/interface";
import { defaultState, tabs } from "./layout-nav.constants";
import { Link } from "react-router-dom";
import { NavigationItemType } from "types/navigation/navigation";
import { TwitterOutlined, InstagramOutlined } from "@ant-design/icons";
import { Button } from "antd";

const LayoutNav = () => {
  const [current, setValue] = useState<string>(
    defaultState.navigationItemSelected
  );

  return (
    <div className="p-6 flex flex-row justify-between">
      <div className="flex flex-row items-center">
        <div className="pr-4">
          <Link to="/">
            <span className="text-3xl">The Mokie's</span>
          </Link>
        </div>
        {tabs.map((tab: NavigationItemType, index) => (
          <div className="px-4" key={index}>
            <Link onClick={() => setValue(tab.key)} to={tab.path}>
              <span
                className={
                  "text-white hover:font-bold hover:text-blue font-normal"
                }
              >
                {tab.label}
              </span>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <a
            href="https://twitter.com/NounBirdsNFT"
            target="_blank"
            rel="noreferrer"
          >
            {/* todo real link */}
            <TwitterOutlined
              className="hover:text-lg"
              style={{ fontSize: "24px", color: "white", paddingRight: "2rem" }}
            />
          </a>
          {/* todo real link */}
          <a
            className="hover:text-lg"
            href="https://twitter.com/NounBirdsNFT"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramOutlined
              style={{ fontSize: "24px", color: "white", paddingRight: "2rem" }}
            />
          </a>
        </div>
        <div className="pr-4">
          <Button type="primary" shape="round" size="large">
            Mint
          </Button>
        </div>
      </div>
    </div>
  );
};
export default LayoutNav;
