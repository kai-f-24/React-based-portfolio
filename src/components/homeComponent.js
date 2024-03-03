import React from "react";
import homeComponentStyles from "./homeComponent.module.css"
import { useNavigate } from "react-router-dom";
import { useScramble } from "use-scramble";

const HomeComponent = ({
    name,
    style,
    path,
    activeComponent,
    setActiveComponent,
    hoverComponent,
    setHoverComponent,
    activeText,
    setActiveText,
}) => {
    console.log(
        // name,
        // path,
        // color,
        // h2,
        // activeComponent,
        // setActiveComponent,
        // hoverComponent,
        // setHoverComponent,
        // isActive,
    );

    const { ref, replay } = useScramble({
        text: name,
        speed: 1,
        tick: 1,
        step: 1,
        scramble: 12,
        seed: 1,
        playOnMount: false
    });

    let navigate = useNavigate();

    let isActive = activeComponent === name ? "active" : "inactive"
    let isHover = hoverComponent === name ? "hover" :
        hoverComponent ? "inhover" : "";
    let isTextActive = activeText === name ? "text-active" : "text-in-active"

    const handleClick = (e, componentName) => {
        console.log(`${componentName.name}がクリックされました`);
        if (e.target.classList.contains("active")) {
            navigate(path)
        } else {
            setActiveComponent(componentName.name);
            setHoverComponent(null);
            setTimeout(function () {
                setActiveText(componentName.name);
                replay()
            }, 50)
        }
    }

    const checkActive = (e, componentName) => {
        console.log(`${componentName.name}がホバーされました`)

        const checkComponent = e.target;
        if (checkComponent.classList.contains("active")) {
            setHoverComponent(null);
        } else {
            setHoverComponent(componentName.name);
        }
    }

    const handleMouseLeave = () => {
        setHoverComponent(null);
        console.log("ホバーが外れました。")
    }

    return (
        <div
            className={
                `container
                ${style}
                ${homeComponentStyles.webAppWrapper}
                ${homeComponentStyles[`${style}-color`]}
                ${isActive}
                ${isHover}
                ${isTextActive}
                `
            }
            onClick={(e) => handleClick(e, { name })}
            onMouseEnter={(e) => checkActive(e, { name })}
            onMouseLeave={handleMouseLeave}
        >
            <h1
                ref={ref}
                className={
                    `
                    ${homeComponentStyles[`${style}-h1`]}
                    ${name === "Contact" ? homeComponentStyles[`contact-h1-color`] : homeComponentStyles.h1}
                    `
                }
                onClick={() => navigate(path)}
            >
            </h1>
            <h2 className={homeComponentStyles[`${style}-h2`]}>{name}</h2>
        </div>
    )
}

export default HomeComponent