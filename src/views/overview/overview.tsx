import BannerWithText from "assets/images/BannerWithText.png";
import TeamAvatars from "assets/images/TeamAvatars.png";

const Overview = () => {
  return (
    <div className="p-8 max-w-6xl container mx-auto">
      <section className="text-center mb-12">
        <h1 className="mb-8">
          THE <span className="text-blue">Mokie's</span> IS
        </h1>
        <p className="font-bold">
          A community-driven collectibles project. The Mokie’s come in a joyful
          range of colors, traits and sizes with a collection size of 3333.
        </p>
      </section>
      <section className="mb-12">
        <img src={BannerWithText} alt="banner" />
      </section>
      <section className="mb-16">
        <div className="flex flex-row items-center mb-8">
          <div className="w-3 h-8 bg-blue mr-4"></div>
          <h2 className="mb-0">Our Team</h2>
        </div>
        <div className="flex flex-row justify-center">
          <img src={TeamAvatars} className="max-w-2xl" alt="team avatars" />
        </div>
      </section>
      <section className="mb-12">
        <div className="flex flex-row items-center mb-8">
          <div className="w-3 h-8 bg-blue mr-4"></div>
          <h2 className="mb-0">FAQ</h2>
        </div>
        <div>
          <h4 className="text-slate-300">What is our supply?</h4>
          <h3 className="mb-8">3333</h3>
          <h4 className="text-slate-300">What is the mint price?</h4>
          <h3 className="mb-8">0.01</h3>
          <h4 className="text-slate-300">Where can I mint?</h4>
          <h3 className="mb-8">Only on this website</h3>
          <h4 className="text-slate-300">When is the minting date?</h4>
          <h3 className="mb-8">May 20th, 2022.</h3>
          <h4 className="text-slate-300">
            Where will secondary sales take place?
          </h4>
          <h3 className="mb-8">https://opensea.io/collection/themokie’s</h3>
          <h4 className="text-slate-300">
            What is the smart contract address?
          </h4>
          {/* todo change address */}
          <h3 className="mb-8">
            https://etherscan.io/address/xxxxxxxxxxxxxxxxxxxxxx
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Overview;
