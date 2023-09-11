// import "./App.css";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import orangehead from "./assets/img/image-header.jpg";
import TextCard from "./components/card/TextCard";
import ImageOnlyCard from "./components/card/ImageOnlyCard";
import egg from "./assets/img/image-transform.jpg";
import glass from "./assets/img/image-stand-out.jpg";
import straw from "./assets/img/image-graphic-design.jpg";
import ImageAndTextCard from "./components/card/ImageAndTextCard";
import org from "./assets/img/image-photography.jpg";
import BodySec from "./components/BodySec";
import ImageSec from "./components/ImageSec";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-main-blue w-screen h-screen flex flex-col overflow-x-hidden">
      <Header />
      <div className="relative">
        <h1 className="text-center absolute top-1/4 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 uppercase text-white font-bold font-fraunces text-5xl phone:text-5xl">
          We are creatives
        </h1>
        <Card link={orangehead} className="" />
      </div>
      <div className="lg:h-96 xl:h-5/6 flex phone:flex-col-reverse ">
        <TextCard
          title="Transform your brand"
          p="We are a full-service agency specializing in helping brands grow fast. Engage your clients through compleiing visuals that do most of the marketing for you."
          col="yellow"
        />
        <ImageOnlyCard src={egg} />
      </div>
      <div className="flex sm:h-64 md:h-80 lg:h-96 xl:h-5/6 phone:flex-col ">
        <ImageOnlyCard src={glass} className="w-1/2" />
        <TextCard
          className="w-1/2"
          title="Stand out to the right audience"
          p="Using a collaborative formila of designers, researchers, photographers, videographers, and copywrites, we'll build and extend your brand in digital space."
          col="red"
        />
      </div>
      <div className="sm:h-64 md:h-80 2xl:h-4/5 xl:h-3/5 lg:h-96 flex phone:flex-col phone:h-3/4">
        <ImageAndTextCard
          src={straw}
          col="#25564b"
          title="Graphic Design"
          p="Great design makes you memorable. We deliver artwork that underscores your brand message and caputures potential clients' attention."
        />
        <ImageAndTextCard
          src={org}
          col="#19536b"
          title="Photography"
          p="Increase your credebility by getting the most stunning, high-quality photos that improve your business image."
        />
      </div>
      <BodySec className="h-1/2" />
      <ImageSec />
      <Footer />
    </div>
  );
}

export default App;
