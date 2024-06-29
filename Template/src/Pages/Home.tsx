import css from "../Styles/Home.module.css";
import FiveStarsIcon from "../Assets/Home/FiveStars.png";
import QuickAroundIcon from "../Assets/Home/QuickAround.png";
import FreeRevisionsIcon from "../Assets/Home/FreeRevisions.png";
import CopyrightIcon from "../Assets/Home/Copyright.png";
import MoneyBackIcon from "../Assets/Home/MoneyBack.png";

import { useState } from "react";
import {
  MdPlayArrow as PlayArrowIcon,
  MdOutlineKeyboardArrowLeft as LeftArrow,
  MdOutlineKeyboardArrowRight as RightArrow,
} from "react-icons/md";
import { LiaCheckCircleSolid as CheckCircleIcon } from "react-icons/lia";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className={css.homeOuter}>
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

      <div style={{ marginTop: "100px" }} className={css.dividerA}></div>

      <h1 className={css.heading}>Testimonials</h1>
      <h1 className={css.subHeading}>See what they are saying about Us!</h1>

      <div className={css.testimonialsOuterDiv}>
        <LeftArrow className={css.arrowsTestimonials} />
        <div className={css.testimonialsCardsHolderDiv}>
          {new Array(2)
            .fill({
              name: "Abhishek Pandey",
              text: "Lorem ipsum dolor sit amet, con-sectetuer adipiscing elit, sed diamnonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim",
            })
            ?.map((testimonialItem: any, testimonialInd: number) => (
              <div
                className={css.cardTestimonial}
                key={testimonialItem?.name + testimonialInd}
              >
                <div>
                  <div className={css.imgTestimonialDiv}></div>
                  <div className={css.nameTestimonialDivOuter}>
                    <p>{testimonialItem?.name}</p>
                    <img src={FiveStarsIcon} alt="FiveStarsIcon" />
                  </div>
                </div>
                <p className={css.textTestimonial}>{testimonialItem?.text}</p>
              </div>
            ))}
        </div>
        <RightArrow className={css.arrowsTestimonials} />
      </div>

      <div style={{ marginTop: "100px" }} className={css.dividerA}></div>

      <h1 className={css.heading}>
        Creative Logo Designs That Win People’s Heart
      </h1>
      <h1 className={css.subHeading}>
        Start your journey towards success with a professionally designed and
        creatively crafted logo.
      </h1>

      <div style={{ marginTop: "60px" }} className={css.dividerA}></div>

      <div className={css.categoryHolderDiv}>
        {[
          "All",
          "Construction",
          "Consultancy",
          "Cosmetic",
          "Fashion",
          "Food",
          "Interior",
          "IT",
          "Jewellery",
          "Medical",
          "Travel",
        ]?.map((categoryItem: any, categoryInd: number) => (
          <div
            style={{
              background:
                activeCategory == categoryItem
                  ? "var(--orangeB)"
                  : "var(--pureWhite)",
              cursor: activeCategory == categoryItem ? "default" : "pointer",
            }}
            onClick={() => setActiveCategory(categoryItem)}
            key={categoryItem + categoryInd}
          >
            <p>{categoryItem}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "22.5px" }} className={css.dividerA}></div>

      <div className={css.cardHolderDivOuter}>
        <div>
          <div className={css.bigCardDiv}></div>
          <div className={css.smallCardDiv}></div>
        </div>
        <div>
          <div className={css.smallCardDiv}></div>
          <div className={css.bigCardDiv}></div>
        </div>
        <div>
          <div className={css.bigCardDiv}></div>
          <div className={css.smallCardDiv}></div>
        </div>
      </div>

      <div style={{ marginTop: "100px" }} className={css.dividerA}></div>

      <h1 style={{ width: "85%" }} className={css.heading}>
        Transform Your Business Into Brand With Stunning Iconic Logo design
      </h1>

      <div className={css.getStartedBtn}>GET STARTED NOW</div>

      <div className={css.featuresDivOuter}>
        <div>
          <CheckCircleIcon />
          <p>Quick Turnaround</p>
        </div>
        <div>
          <CheckCircleIcon />
          <p>Free Revisions</p>
        </div>
        <div>
          <CheckCircleIcon />
          <p>Copyright Ownership Transfer</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
