import css from "../Styles/Home.module.css";
import Plus from "../Assets/Home/Plus.png";
import Approve from "../Assets/Home/Approve.png";
import Feedback from "../Assets/Home/Feedback.png";
import Signature from "../Assets/Home/Signature.jpeg";
import Requirement from "../Assets/Home/Requirement.png";
import MoneyBackIcon from "../Assets/Home/MoneyBack.png";
import FiveStarsIcon from "../Assets/Home/FiveStars.png";
import CopyrightIcon from "../Assets/Home/Copyright.png";
import MoneyBack2Icon from "../Assets/Home/MoneyBack2.png";
import QuickAroundIcon from "../Assets/Home/QuickAround.png";
import FreeRevisionsIcon from "../Assets/Home/FreeRevisions.png";

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

      <div className={css.dividerA}></div>

      <h1 className={css.heading}>Testimonials</h1>

      <h1 className={css.subHeading}>See what they are saying about Us!</h1>

      {/* <div className={css.testimonialsOuterDiv}>
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
      </div> */}

      <div className={css.dividerA}></div>

      <h1 className={css.heading}>
        Creative Logo Designs That Win People’s Heart
      </h1>

      <h1 className={css.subHeading}>
        Start your journey towards success with a professionally designed and
        creatively crafted logo.
      </h1>

      <div className={css.dividerA}></div>

      {/* <div className={css.categoryHolderDiv}>
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
      </div> */}

      <div className={css.dividerA}></div>

      {/* <div className={css.cardHolderDivOuter}>
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
      </div> */}

      <div className={css.dividerA}></div>

      <h1 className={css.heading}>
        Transform Your Business Into Brand With Stunning Iconic Logo design
      </h1>

      <div className={css.getStartedBtn}>GET STARTED NOW</div>

      {/* <div className={css.featuresDivOuter}>
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
      </div> */}

      <div className={css.dividerA}></div>

      <h1 className={css.heading}>
        Logo Design Pricing Suitable For All Sized Businesses
      </h1>

      {/* <div className={css.moneybackContOuter}>
        <img src={MoneyBack2Icon} alt="MoneyBack2Icon" />
        <p>100% Money-Back Guarantee On All Plans.</p>
      </div> */}

      {/* <div className={css.outerPricingDiv}>
        <div className={css.lowScreenDivOuter}>
          <div className={css.priceCardDiv}>
            <div style={{ marginTop: "70px" }} className={css.typePriceDiv}>
              <p>STARTER</p>
            </div>
            <div className={css.priceDivs}>
              <h1>₹3,999 + GST</h1>
              <h1>One-Time Investment</h1>
              <hr />
              <p>3 Creative Logo Concept Designs</p>
              <p>3 Design Revisions</p>
              <p>Phone Consultation With Branding Head</p>
              <p>HD Square Profile Images</p>
              <p className={css.combinedPricePtag}>
                <span>All Original Source Files</span>
                <span>(AI, SVG, CDR, JPG, PNG, & PDF)</span>
              </p>
              <p>Copyright Ownership Transfer</p>
              <p>Lifetime File Storage</p>
            </div>
          </div>
          <div className={css.priceCardDiv}>
            <div style={{ marginTop: "70px" }} className={css.typePriceDiv}>
              <p>PROFESSIONAL</p>
            </div>
            <div className={css.priceDivs}>
              <h1>₹5,999 + GST</h1>
              <h1>One-Time Investment</h1>
              <hr />
              <p>5 Creative Logo Concept Designs</p>
              <p>5 Design Revisions</p>
              <p>Phone Consultation With Branding Head</p>
              <p>HD Square Profile Images</p>
              <p className={css.combinedPricePtag}>
                <span>All Original Source Files</span>
                <span>(AI, SVG, CDR, JPG, PNG, & PDF)</span>
              </p>
              <p>Copyright Ownership Transfer</p>
              <p>Lifetime File Storage</p>
              <p className={css.boldPriceFeature}>Complimentary</p>
              <p>5 Logo Animation Videos</p>
              <p>10 3D Realistic Mockup Files</p>
              <p>1 Digital Visiting Card</p>
            </div>
          </div>
        </div>
        <div className={css.priceCardDiv}>
          <div style={{ marginTop: "70px" }} className={css.typePriceDiv}>
            <p>STARTER</p>
          </div>
          <div className={css.priceDivs}>
            <h1>₹3,999 + GST</h1>
            <h1>One-Time Investment</h1>
            <hr />
            <p>3 Creative Logo Concept Designs</p>
            <p>3 Design Revisions</p>
            <p>Phone Consultation With Branding Head</p>
            <p>HD Square Profile Images</p>
            <p className={css.combinedPricePtag}>
              <span>All Original Source Files</span>
              <span>(AI, SVG, CDR, JPG, PNG, & PDF)</span>
            </p>
            <p>Copyright Ownership Transfer</p>
            <p>Lifetime File Storage</p>
          </div>
        </div>
        <div className={css.priceCardDiv}>
          <div className={css.mostPopularDiv}>
            <div className={css.actualMostPopularDiv}>
              <img src={FiveStarsIcon} alt="FiveStarsIcon" />
              <p>Most Popular</p>
            </div>
            <div className={css.typePriceDiv}>
              <p>PREMINUM</p>
            </div>
          </div>
          <div className={css.priceDivs}>
            <h1>₹9,999 + GST</h1>
            <h1>One-Time Investment</h1>
            <hr />
            <p>7 Creative Logo Concept Designs</p>
            <p>7 Design Revisions</p>
            <p>Phone Consultation With Branding Head</p>
            <p>HD Square Profile Images</p>
            <p className={css.combinedPricePtag}>
              <span>All Original Source Files</span>
              <span>(AI, SVG, CDR, JPG, PNG, & PDF)</span>
            </p>
            <p>Copyright Ownership Transfer</p>
            <p>Lifetime File Storage</p>
            <p className={css.boldPriceFeature}>Brand Identity</p>
            <p className={css.combinedPricePtag}>
              <span>Stationery Kit</span>
              <span>
                (Printable - Visiting Card, Letterhead, and Envelope Design)
              </span>
            </p>
            <p className={css.combinedPricePtag}>
              <span>Brand Guidelines</span>
              <span>
                (Guide Book For How To Properly Use Your Logo Everywhere)
              </span>
            </p>
            <p>Power Point Template</p>
            <p>Email Signature</p>
            <p className={css.boldPriceFeature}>Complimentary</p>
            <p>5 Logo Animation Videos</p>
            <p>10 3D Realistic Mockup Files</p>
            <p>1 Digital Visiting Card</p>
          </div>
        </div>
        <div className={css.priceCardDiv}>
          <div style={{ marginTop: "70px" }} className={css.typePriceDiv}>
            <p>PROFESSIONAL</p>
          </div>
          <div className={css.priceDivs}>
            <h1>₹5,999 + GST</h1>
            <h1>One-Time Investment</h1>
            <hr />
            <p>5 Creative Logo Concept Designs</p>
            <p>5 Design Revisions</p>
            <p>Phone Consultation With Branding Head</p>
            <p>HD Square Profile Images</p>
            <p className={css.combinedPricePtag}>
              <span>All Original Source Files</span>
              <span>(AI, SVG, CDR, JPG, PNG, & PDF)</span>
            </p>
            <p>Copyright Ownership Transfer</p>
            <p>Lifetime File Storage</p>
            <p className={css.boldPriceFeature}>Complimentary</p>
            <p>5 Logo Animation Videos</p>
            <p>10 3D Realistic Mockup Files</p>
            <p>1 Digital Visiting Card</p>
          </div>
        </div>
      </div> */}

      <div className={css.dividerB}></div>

      {/* <div className={css.dontLikeOuterDiv}>
        <img src={MoneyBack2Icon} alt="MoneyBack2Icon" />
        <div>
          <h1 className={css.heading}>What If I Don’t Like The Designs?</h1>
          <h1>
            Well, this is the most frequent question we get asked. We are so
            confident of our work that we have a down-right 100% Money-back
            Guarantee.
          </h1>
          <h1>
            Either you get the design you love or you get your money back. It is
            as simple as that.
          </h1>
          <h1>
            We believe we can thrive in business only if our clients are happy
            with what we do. So, that is exactly what we aim for.
          </h1>
          <h1>
            However, for some reason, if you are still not satisfied with the
            result, we will do all that we can to fix that.
          </h1>
          <h1>
            Or else, you will get 100% money back after seeing the first design.
          </h1>
          <h1>
            For a detailed view of the refund policy, <em>CLICK HERE.</em>
          </h1>
          <div className={css.signatureDiv}>
            <img src={Signature} alt="Signature" />
            <h2>Abhishek Singh</h2>
            <p>Founder Of Digisurg</p>
          </div>
        </div>
      </div> */}

      <div className={css.dividerB}></div>

      <h1 className={css.heading}>Logo Designing Process</h1>

      {/* <div className={css.processOuter}>
        {[
          {
            img: Requirement,
            head: "Tell Us About Your Vision",
            text: "Submit the design brief and tell us your ideas and what kind of design you’re expecting.",
          },
          {
            img: Feedback,
            head: "Review The Logo Designs",
            text: "Review the designs we provide and let us know if you need any changes.",
          },
          {
            img: Approve,
            head: "Approve The Winning Logo",
            text: "Approve the design to receive original source files, copyright and bonuses.",
          },
        ]?.map((processItem: any, processInd: number) => (
          <div
            className={css.processCardDiv}
            key={processInd + processItem?.head}
          >
            <img src={processItem?.img} alt={processItem?.head} />
            <h1>{processItem?.head}</h1>
            <p>{processItem?.text}</p>
          </div>
        ))}
      </div> */}

      <div className={css.dividerB}></div>

      <h1 className={css.heading}>
        Some Exclusive Benefits You Get Only With Us
      </h1>

      {/* <div className={css.benefitsOuter}>
        {[
          {
            head: "Fast Turnaround",
            text: "Get your designs back in 3 to 4 working days",
          },
          {
            head: "Brand Safety",
            text: "Get full copyright ownership of your final design.",
          },
          {
            head: "World Class Designers",
            text: "Work with highly passionate designers eagerly waiting to transform your ideas into remarkable brands.",
          },
          {
            head: "Dedicated Brand Expert",
            text: "Get a full-time dedicated brand expert who is always available to listen to your needs and give you a world-class identity that makes a mark.",
          },
        ]?.map((benefitItem: any, benefitInd: number) => (
          <div
            className={css.benefitsCardDiv}
            key={benefitInd + benefitItem?.head}
          >
            <h1>{benefitItem?.head}</h1>
            <p>{benefitItem?.text}</p>
          </div>
        ))}
      </div> */}

      <div className={css.dividerB}></div>

      <h1 className={css.heading}>Frequently Asked Questions</h1>

      {/* <div className={css.faqOuter}>
        {[
          { ques: "Why should I hire Digisurg?", ans: "" },
          {
            ques: "How are you offering such benefits at this price point? What’s the catch?",
            ans: "",
          },
          {
            ques: "There are lots of other companies designing logos why should we choose you?",
            ans: "",
          },
          {
            ques: "How much time it will take to complete the logo design?",
            ans: "",
          },
          { ques: "Can I upgrade my package during the order?", ans: "" },
          { ques: "Do you offer discounts", ans: "" },
        ]?.map((faqItem: any, faqInd: number) => (
          <div className={css.faqCardDiv} key={faqInd + faqItem?.ques}>
            <p>{faqItem?.ques}</p>
            <img src={Plus} alt="Plus" />
          </div>
        ))}
      </div> */}

      <div className={css.dividerB}></div>

      {/* <div className={css.upperFooter}>
        <h1>Ready To Build A Brand People Remember?</h1>
        <div className={css.getStartedBtn}>START NOW</div>
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
      </div> */}

      <div className={css.dividerC}></div>

      {/* <p className={css.footerText}>
        This site is not a part of the Facebook website or Facebook Inc.
        Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK
        is a trademark of FACEBOOK, Inc.
      </p> */}

      {/* <div className={css.footerDiv}>
        <p>Privacy Policy</p>
        <p>Refund Policy</p>
        <p>Terms Of Service</p>
      </div> */}
    </div>
  );
};

export default Home;
