import React from "react";
import "./Section_7.css";
import Slice1 from "../../images/Slice1.svg";

function Expand(e) {
  e.preventDefault();
  const faq1 = e.target.parentElement
  const faq = faq1.parentElement
  faq.classList.add("active");
}

function Contract(e) {
  e.preventDefault();
  const answer = e.target.parentElement
  const faq = answer.parentElement
  faq.classList.remove("active")
}

const Section_7 = () => {
  return (
    <div className="Section7">
      <div className="div1">
        <div className="div1_text">
          <p>Become a reseller and</p>
          <p>start earning now.</p>
        </div>

        <div className="div1_text_lower">
          <p>
            Become a GPT team reseller by launching your own branded Digital
            Business card Platform
          </p>{" "}
          <br />
          <p>
            for Business & Teams in days and start earning up to 65% on your
            costumers'
          </p>{" "}
          <br />
          <p>subscriptions and up to 35% on costumers' product purchases.</p>
        </div>

        <div className="Request"></div>

        <button>Learn more</button>
      </div>

      <div className="div2">
        <h1>Roadmap</h1>
        <div className="path">
          <img className="WhitePath" src={Slice1} alt="White Path" />
        </div>
        <div className="questions">
          <div className="question1">
            <div className="Q1">Q1</div>
            <p>KYC integration</p>
            <p>KYC integration</p>
          </div>

          <div className="question2">
            <div className="Q2">Q2</div>
            <p>KYC integration</p>
            <p>KYC integration</p>
          </div>

          <div className="question3">
            <div className="Q3">Q3</div>
            <p>KYC integration</p>
            <p>KYC integration</p>
          </div>

          <div className="question4">
            <div className="Q4">Q4</div>
            <p>KYC integration</p>
            <p>KYC integration</p>
          </div>

          <div className="question5">
            <div className="Q5">Q5</div>
            <p>KYC integration</p>
            <p>KYC integration</p>
          </div>
        </div>
      </div>

      <div className="div3">
        <h1>FAQ</h1>
        <div className="faq">
          <div className="faq1">
            <h3>Question 1</h3>
            <button type="button" onClick={Expand}>
              +
            </button>
          </div>
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              a risus iaculis, posuere ligula et, dignissim nibh. Sed maximus
              ante dolor, ut faucibus neque lacinia eget.
            </p>
            <button type="button" onClick={Contract}>-</button>
          </div>
        </div>

        <div className="faq">
          <div className="faq1">
            <h3>Question 2</h3>
            <button type="button" onClick={Expand}>
              +
            </button>
          </div>
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              a risus iaculis, posuere ligula et, dignissim nibh. Sed maximus
              ante dolor, ut faucibus neque lacinia eget.
            </p>
            <button type="button" onClick={Contract}>-</button>
          </div>
        </div>

        <div className="faq">
          <div className="faq1">
            <h3>Question 3</h3>
            <button type="button" onClick={Expand}>
              +
            </button>
          </div>
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              a risus iaculis, posuere ligula et, dignissim nibh. Sed maximus
              ante dolor, ut faucibus neque lacinia eget.
            </p>
            <button type="button" onClick={Contract}>-</button>
          </div>
        </div>

        <div className="faq">
          <div className="faq1">
            <h3>Question 4</h3>
            <button type="button" onClick={Expand}>
              +
            </button>
          </div>
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              a risus iaculis, posuere ligula et, dignissim nibh. Sed maximus
              ante dolor, ut faucibus neque lacinia eget.
            </p>
            <button type="button" onClick={Contract}>-</button>
          </div>
        </div>
      </div>

      <div className="div4">
        <h1>Contact us</h1>
        <form>
          <input type="text" placeholder="Your Name/Company"/> <br/>
          <input type="text" placeholder="Your Email"/> <br/>
          <textarea placeholder="Your Message"/><br/>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Section_7;
