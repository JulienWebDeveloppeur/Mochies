import mokies from "assets/images/Mokies.png";
import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const [mintNbr, setValue] = useState<number>(1);
  const navigate = useNavigate();

  const handleMint = () => {
    window.open("https://themokies.vercel.app/", "_blank");
  };

  return (
    <div className="flex flex-row items-center h-full p-8">
      <article className="w-6/12 p-8">
        <h1>
          The Mochie's are <br />
          <span className="text-blue">Ready</span>
        </h1>
        <p>
          A community-driven collectibles project. The Mokie’s come in a joyful
          range of colors, traits and sizes with a collection size of 1111. Each
          Mokie you earn get you closer to eternal happiness.
        </p>
        <div>
          <Button
            type="ghost"
            shape="round"
            size="large"
            className="w-40 !h-16 mr-8"
            onClick={() => navigate("overview")}
          >
            Learn more
          </Button>
          <Button
            type="primary"
            shape="round"
            size="large"
            className="w-40 !h-16"
            onClick={() => handleMint()}
          >
            Mint
          </Button>
        </div>
      </article>
      <article className="w-6/12 h-full">
        <img
          className="h-full ml-auto"
          src={mokies}
          alt="preview on the mokies collection"
        />
      </article>
    </div>
  );
};

export default Home;
