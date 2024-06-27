import css from "../Styles/Home.module.css";
import FiveStarsIcon from "../Assets/Home/FiveStars.png";
import QuickAroundIcon from "../Assets/Home/QuickAround.png";
import FreeRevisionsIcon from "../Assets/Home/FreeRevisions.png";
import CopyrightIcon from "../Assets/Home/Copyright.png";
import MoneyBackIcon from "../Assets/Home/MoneyBack.png";
import Navbar from "../Components/Navbar";

import {
  MdPlayArrow as PlayArrowIcon,
  MdOutlineKeyboardArrowLeft as LeftArrow,
  MdOutlineKeyboardArrowRight as RightArrow,
} from "react-icons/md";
// import {  } from "react-icons/md";

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

      <div className={css.topBottomContDivOuter}>
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

      <div className={css.dividerA}></div>

      <h1 className={css.heading}>Testimonials</h1>
      <h1 className={css.subHeading}>See what they are saying about Us!</h1>

      <div className={css.testimonialsOuterDiv}>
        <LeftArrow className={css.arrowsTestimonials} />
        <div className={css.testimonialsCardsHolderDiv}>
          {new Array(2)
            .fill({
              name: "Abhishek Pandey",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim",
            })
            ?.map((testimonialItem: any, testimonialInd: number) => (
              <div key={testimonialItem?.name + testimonialInd}>
                <div>
                  <div></div>
                  <div>
                    <p>{testimonialItem?.name}</p>
                    <img src={FiveStarsIcon} alt="FiveStarsIcon" />
                  </div>
                </div>
                <p>{testimonialItem?.text}</p>
              </div>
            ))}
        </div>
        <RightArrow className={css.arrowsTestimonials} />
      </div>
    </div>
  );
};

export default Home;
