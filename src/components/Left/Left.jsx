import React, { useContext } from "react";
import "./Left.scss";
//assets
import edit from "../../assets/edit.png";
import verifiedUser from "../../assets/verifiedUser.png";
import people from "../../assets/people.png";
import linkedIn from "../../assets/linkedIn.png";
import cloud from "../../assets/cloudIcon.png";
import email from "../../assets/email.png";
import phone from "../../assets/phone.png";
import languageIcon from "../../assets/languageIcon.png";
import link from "../../assets/link.png";
import web from "../../assets/web.png";
import video from "../../assets/video.png";
import calendar from "../../assets/calendar.png";
import chatIcon from "../../assets/chatIcon.png";
import phoneLogo from "../../assets/phoneLogo.png";
import blueEmail from "../../assets/blueEmail.png";
import tabContext from "../tab-context";
const Left = () => {
  const tabInfo = useContext(tabContext);

  return (
    <div className="left">
      <div className="user-info">
        <div className="user-info-name">
          Jean-Samuel Najnudel
          <div className="user-info-icons">
            <img src={edit} alt="" />
            <img src={verifiedUser} alt="" />
          </div>
        </div>
        <div className="designation">President</div>
        <div className="company-info">
          Ringover |
          <div className="company-info-number">
            <img src={people} alt="" /> 101-250
          </div>
        </div>
        <a href="https://www.ringover.com/" className="link">
          http://www.ringover.com
        </a>
      </div>
      <hr className="top-line" />
      <div className="icons-row">
        <img src={linkedIn} alt="" />
        <img src={cloud} alt="" />
      </div>
      <hr className="bottom-line" />
      <div className="topics">
        Topics
        <div className="topic-wrapper">
          <div className="topic">Some Topic</div>
          <div className="topic">Some Topic Name</div>
        </div>
      </div>
      <div className="contacts">
        Contact
        <div className="contact-wrapper">
          <div>
            <img src={email} alt="" />
            j.nanjudel@ringover.com
          </div>
          <div>
            <img src={phone} alt="" />
            +33 07 55 35 23 21
            <span>Primary</span>
          </div>
          <div>
            <img src={phone} alt="" />
            +33 99 53 05 19 21
          </div>
        </div>
      </div>
      <div className="additional">
        Additional
        <div className="additional-wrapper">
          <div>
            <img src={email} alt="" />
            president@ringover.com
          </div>
          <div>
            <img src={languageIcon} alt="" />
            Francais
          </div>
          <div>
            <img src={link} alt="" />
            www.youtube.com/ringover
          </div>
          <div>
            <img src={web} alt="" />
            Indian Standard (+5:30)
          </div>
        </div>
      </div>
      <div className="function-row">
        <div>
          <img src={phoneLogo} alt="" />
        </div>

        <div className="icons-wrapper">
          <img onClick={() => tabInfo.addTab("Video")} src={video} alt="" />
          <img
            onClick={() => tabInfo.addTab("Schedule")}
            src={calendar}
            alt=""
          />
          <img
            onClick={() => tabInfo.addTab("E-mail")}
            src={blueEmail}
            alt=""
          />
          <img onClick={() => tabInfo.addTab("Chat")} src={chatIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Left;
