import Mochies from "assets/images/Mochies.png";
import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const [mintNbr, setValue] = useState<number>(1);
  const navigate = useNavigate();

  const handleMint = () => {
    window.open("https://xxxx.vercel.app/", "_blank");
  };

  return (
    <div className="flex flex-row items-center h-full p-8">
      <article className="lg:w-6/12 lg:p-8">
        <h1>GOOKY'S PARTY</h1>
        <p>
          A community-driven collectibles project. The Gooky’s come in a joyful
          range of colors and traits with a collection size of 333. Each Gooky
          you earn will give you access to the Gooky's world benefits.
        </p>
        <div>
          <Button
            type="ghost"
            shape="round"
            size="large"
            className="w-40 !h-16 mr-8 mb-4 lg:mb-0"
            onClick={() => navigate("overview")}
          >
            Learn more
          </Button>
          <Button
            type="primary"
            shape="round"
            size="large"
            className="w-40 !h-16 !cursor-not-allowed"
            // onClick={() => handleMint()}
          >
            Mint
          </Button>
        </div>
      </article>
      <article className="hidden lg:block w-6/12 h-full">
        <img
          className="h-full ml-auto"
          src={Mochies}
          alt="preview on the mokies collection"
        />
      </article>
    </div>
  );
};

export default Home;
