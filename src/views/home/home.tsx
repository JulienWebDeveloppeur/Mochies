import mokies from "assets/images/Mokies.png";
import { Button } from "antd";
import { useState } from "react";

const Home = () => {
  const [mintNbr, setValue] = useState<number>(1);

  const handleMint = () => {
    // todo handle mint
  };

  const lessMint = () => {
    const newMintNbr = mintNbr - 1;
    if (newMintNbr > 0) setValue(newMintNbr);
  };

  const moreMint = () => {
    const newMintNbr = mintNbr + 1;
    if (newMintNbr <= 3) setValue(newMintNbr);
  };

  return (
    <div className="flex flex-row items-center h-full">
      <article className="w-6/12 px-8">
        <h1>
          The Mokie's are <br />
          <span className="text-blue">growing</span>
        </h1>
        <p>
          A community-driven collectibles project. The Mokie’s come in a joyful
          range of colors, traits and sizes with a collection size of 3333. Each
          Mokie you earn get you closer to eternal happiness.
        </p>
        <div>
          <Button
            type="ghost"
            shape="round"
            size="large"
            className="w-20 !h-16 mr-8"
            onClick={() => lessMint()}
          >
            -
          </Button>
          <span>{mintNbr}</span>
          <Button
            type="ghost"
            shape="round"
            size="large"
            className="w-20 !h-16 mx-8"
            onClick={() => moreMint()}
          >
            +
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
      <article className="w-6/12 p-8">
        <img src={mokies} alt="preview on the mokies collection" />
      </article>
    </div>
  );
};

export default Home;
