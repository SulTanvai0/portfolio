import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="skills">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=>toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon "></i>{" "}
            Academic Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=>toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Programming Education
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor of Arts (B.A.)</h3>
                <span className="qualification__subtitle">
                Feni Government College
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Higher Secondary School Certificate</h3>
                <span className="qualification__subtitle">
                Bamni Degree College
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017-2019 
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Secondary School Certificate</h3>
                <span className="qualification__subtitle">
                Dudmukha high school
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2015 - 2017
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Junior School Certificate</h3>
                <span className="qualification__subtitle">
                dudmukha high school
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2012 - 2015
                </div>
              </div>
            </div>
          </div>

          <div className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development </h3>
                <span className="qualification__subtitle">
                programming-hero
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">BCEDS</h3>
                <span className="qualification__subtitle">
                Zoom Computer Institute, Companigonj, Noakhali
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2018
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Quality Assurance</h3>
                <span className="qualification__subtitle">Afnan Innovation Lab</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
