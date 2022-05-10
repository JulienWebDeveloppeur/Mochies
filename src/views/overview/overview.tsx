import Banner from "assets/images/Banner.png";
import TeamAvatars from "assets/images/TeamAvatars.png";

const Overview = () => {
  return (
    <div className="pt-4">
      <section className="overflow-hidden">
        <div className="img-sliding"></div>
      </section>
      <div className="p-8 max-w-6xl container mx-auto">
        <section className="text-center mb-12">
          <h1 className="mb-8">
            THE <span className="text-blue">Gooky's</span> ARE
          </h1>
          <p>
            A community-driven collectibles project. This collection might bring
            you some surprises. They are designed to evolve and give you access
            to future projects around the Gooky's world.
          </p>
        </section>
        <section className="mb-12 relative h-60 flex items-center">
          <img src={Banner} alt="banner" className="absolute hidden lg:block" />
          <p className="text-center lg:px-8">
            We are releasing a Genesis collection of 111 Gooky's. Holders will
            have full access to our community and a beautiful pfp. They also
            have a say in the decision making and strategising for the 2nd
            projects launch later in the year.
          </p>
        </section>
        <section className="mb-16">
          <div className="flex flex-row items-center mb-8">
            <div className="w-3 h-8 bg-blue mr-4"></div>
            <h2 className="mb-0">Our Team</h2>
          </div>
          <div className="flex flex-row justify-center">
            <img
              src={TeamAvatars}
              className="lg:max-w-2xl"
              alt="team avatars"
            />
          </div>
        </section>
        <section className="mb-12">
          <div className="flex flex-row items-center mb-8">
            <div className="w-3 h-8 bg-blue mr-4"></div>
            <h2 className="mb-0">FAQ</h2>
          </div>
          <div>
            <h4 className="text-slate-300">What is our supply?</h4>
            <h3 className="mb-8">333</h3>
            <h4 className="text-slate-300">What is the mint price?</h4>
            <h3 className="mb-8">0.15 Sol</h3>
            <h4 className="text-slate-300">Where can I mint?</h4>
            <h3 className="mb-8">
              the link will be shared soon
              {/* <a
              onClick={() =>
                window.open("https://.vercel.app/", "_blank")
              }
            >
              the link will be shared soon
            </a> */}
            </h3>
            <h4 className="text-slate-300">When is the minting date?</h4>
            <h3 className="mb-8">TBA</h3>
            <h4 className="text-slate-300">
              Where will secondary sales take place?
            </h4>
            <h3 className="mb-8">
              On MagicEden
              {/* <a
              onClick={() =>
                window.open(
                  "https://magiceden.io/marketplace/",
                  "_blank"
                )
              }
            >
              On MagicEden
            </a> */}
            </h3>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Overview;
