/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
    const[toggleState, setToggleState] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="section experience section" id="experience">
        <h2 className="section__title">Experience 💼</h2>
        <span className="section__subtitle">What I work as</span>

        <div className="exp__container container grid">
            <div className="exp__content">
                <div>
                    <i className="uil uil-web-grid exp__icon"></i>
                    <h3 className="exp__title">MERN Stack <br /> Intern</h3>
                </div>

                <div>
                    <span className="exp__comp">Ansh InfoTech</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">MERN Stack Intern <br /> Currently Working🧑🏻‍💻</h3>
                        <p className="exp__modal-description">
                            Working as a MERN Stack Intern at Ansh InfoTech for 6 months.
                            Developing full-stack applications using MongoDB, Express, React, and Node.js.
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Developing full-stack web applications</p>
                            </li>

                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Implementing RESTful APIs</p>
                            </li>

                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Building responsive user interfaces</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="exp__content">
                <div>
                    <i className="uil uil-arrow exp__icon"></i>
                    <h3 className="exp__title">MERN Stack <br /> Intern</h3>
                </div>

                <div>
                    <span className="exp__comp">Bringle Tech</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 2 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">MERN Stack Intern <br /> 1 Year</h3>
                        <p className="exp__modal-description">
                            Worked as a MERN Stack Intern at Bringle Tech for 1 year with a monthly stipend of ₹12,000.
                            Gained hands-on experience in modern web development technologies.
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Developed and maintained web applications</p>
                            </li>

                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Collaborated with team members on projects</p>
                            </li>

                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Implemented front-end and back-end features</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="exp__content">
                <div>
                    <i className="uil uil-web-grid exp__icon"></i>
                    <h3 className="exp__title">MERN Stack <br /> Training</h3>
                </div>

                <div>
                    <span className="exp__comp">Excellence Technology</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 3 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">MERN Stack Training <br /> 6 Months</h3>
                        <p className="exp__modal-description">
                            Completed 6 months of intensive MERN Stack training at Excellence Technology.
                            Learned the fundamentals of modern web development.
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Learned MongoDB, Express, React, and Node.js</p>
                            </li>

                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Built several practice projects</p>
                            </li>

                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Gained foundational knowledge in full-stack development</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience