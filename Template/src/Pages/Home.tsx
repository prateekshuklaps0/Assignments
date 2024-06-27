import css from "../Styles/Home.module.css";
import FiveStarsIcon from "../Assets/Home/FiveStars.png";
import QuickAroundIcon from "../Assets/Home/QuickAround.png";
import FreeRevisionsIcon from "../Assets/Home/FreeRevisions.png";
import CopyrightIcon from "../Assets/Home/Copyright.png";
import MoneyBackIcon from "../Assets/Home/MoneyBack.png";
import Navbar from "../Components/Navbar";

import { MdPlayArrow as PlayArrowIcon } from "react-icons/md";

const Home = () => {
  return (
    <div className={css.homeOuter}>
      <Navbar />

      <h1 className={css.heading}>Want To Build A Brand people Remember?</h1>
      <h1 className={css.subHeading}>
        See How an iconic logo Can help your Business Memorable!
      </h1>

      <div className={css.topContDiv}>
        <div>
          {[
            { text: "2500+ Happy Clients" },
            { text: "4.9/5 Average Ratings" },
            { text: "5000+ Logos Created" },
            { text: "20+ Professional Designers" },
          ]?.map((topContItem: any, topContInd: number) => (
            <div key={topContItem?.text + topContInd}>
              <p>{topContItem?.text}</p>
            </div>
          ))}
        </div>

        <div className={css.videoOuterDiv}>
          <PlayArrowIcon />
        </div>
      </div>

      <div className={css.getStartedBtn}>GET STARTED NOW</div>

      <div className={css.satisfiedCustDiv}>
        <img src={FiveStarsIcon} alt="FiveStarsIcon" />
        <p>Rated 4.9 by 2500+ satisfied customers</p>
      </div>

      <div>
        {[
          { text: "Quick Time Around", img: QuickAroundIcon },
          { text: "Free Revisions", img: FreeRevisionsIcon },
          { text: "Copywright Ownership Transfer", img: CopyrightIcon },
          { text: "100% Money Back Guarentee", img: MoneyBackIcon },
        ]?.map((topBottomCont: any, topBottomContInd: number) => (
          <div key={topBottomCont?.text + topBottomContInd}>
            <img src={topBottomCont?.img} alt={topBottomCont?.text} />
            <p>{topBottomCont?.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
