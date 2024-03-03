import React, { useState, useEffect, useRef } from "react";
import contactPageStyles from './contactPage.module.css'
import { useForm, ValidationError } from '@formspree/react';
import { useScramble } from "use-scramble";


const Contact = ({
    // isActive,
    name_,
    activeContactComponent,
    setActiveContactComponent,
    hoverComponent,
    setHoverComponent,
    // isHover,
}) => {
    const [state, handleSubmit] = useForm("mvoealpb");
    const formRef = useRef(null);
    const submitButtonRef = useRef(null);
    const handleClickOutside = () => {
        setMessageText("on-text");
        setThkMessage("Thank you for sending a message 🌍");
        replay()
        submitButtonRef.current.click();
    }

    useEffect(() => {
        document.body.classList.add('no-scroll');

        return () => {
            document.body.classList.remove('no-scroll')
        };
    }, []);

    // console.log(name_);
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [thkMessage, setThkMessage] = useState("");
    const [messageText, setMessageText] = useState("off-text");

    const { ref, replay } = useScramble({
        text: `${thkMessage}`,
        speed: 0.6,
        tick: 1,
        step: 1,
        scramble: 4,
        seed: 0,
        playOnMount: false
    });

    let isActive = activeContactComponent === name_ ? "active-contact" : "inactive-contact";
    let isHover = hoverComponent === name_ ? "hover-contact" :
        hoverComponent ? "inhover-contact" : ""

    const handleClick = (e, componentName) => {
        // console.log(componentName)
        console.log(`${componentName.name_}がクリックされました`);
        if (e.target.classList.contains("active-contact")) {
            console.log("これは既にアクティブ")
        } else {
            setActiveContactComponent(componentName.name_);
            setHoverComponent(null);
        }

        // console.log(activeComponent);

        // console.log(`現在 ${activeComponent} がactiveクラスを持っています。`)
    }

    const checkActive = (e, componentName) => {
        console.log(`${componentName.name_}がホバーされました`)

        const checkComponent = e.target;
        if (checkComponent.classList.contains("active-contact")) {
            setHoverComponent(null);
        } else {
            setHoverComponent(componentName.name_);
        }
        // console.log(hoverComponent, 1)
    }

    const handleMouseLeave = () => {
        setHoverComponent(null);
        console.log("ホバーが外れました。")
    }

    return (
        <div
            className={
                `
                container
                ${contactPageStyles[`contact-container`]}
                ${isActive}
                ${isHover}
                `
            }
            onClick={(e) => handleClick(e, { name_ })}
            onMouseEnter={(e) => checkActive(e, { name_ })}
            onMouseLeave={handleMouseLeave}
        >
            <div className="form-wrapper">
                <div className={contactPageStyles[`title-wrapper`]}>
                    <h1 className={contactPageStyles[`h1`]}>
                        Contact
                    </h1>
                </div>
                <div className={contactPageStyles[`form-wrapper`]}>
                    <div>
                        <form
                            ref={formRef}
                            id="myForm"
                            className={contactPageStyles.form}
                            onSubmit={handleSubmit}
                        >
                            <div className={contactPageStyles[`form-content`]}>
                                <label
                                    className={contactPageStyles[`label-name`]}
                                    htmlFor="name"
                                >
                                    お名前/会社名
                                </label>
                                <input
                                    className={contactPageStyles.input}
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                />
                            </div>
                            <div className={contactPageStyles[`form-content`]}>
                                <label
                                    className={contactPageStyles[`label-subject`]}
                                    htmlFor="subject"
                                >
                                    件名
                                </label>
                                <input
                                    className={contactPageStyles.input}
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                                <ValidationError
                                    prefix="Subject"
                                    field="subject"
                                    errors={state.errors}
                                />
                            </div>
                            <div className={contactPageStyles[`form-content`]}>
                                <label
                                    className={contactPageStyles[`label-message`]}
                                    htmlFor="message"
                                >
                                    内容
                                </label>
                                <textarea
                                    className={contactPageStyles.textarea}
                                    id="message"
                                    value={message}
                                    name="message"
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>

                            <div className={contactPageStyles[`form-content`]}>
                                <button
                                    ref={submitButtonRef}
                                    type="submit"
                                    disabled={state.submitting}
                                    className={contactPageStyles.button}
                                >
                                    <i class="ri-mail-send-line"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div
                        className={contactPageStyles[`circle-wrapper`]}
                        onClick={handleClickOutside}
                        form="myForm"
                        type="submit"
                    >
                        <svg className={contactPageStyles[`wrapper-svg`]} viewBox="0 0 100 100">
                            <path className={contactPageStyles[`wrapper-path`]} d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" />
                            <text
                                className={contactPageStyles[`${messageText}`]}
                            >
                                <textPath ref={ref} href="#circle">
                                    {/* Thank you for sending a message😍 */}
                                </textPath>
                            </text>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact