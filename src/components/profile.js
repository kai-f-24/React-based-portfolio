import React from "react";
import homeComponentStyles from "./profile.module.css"
import HomeComponent from "./homeComponent";

const Profile = ({
    name,
    color,
    h2,
    activeContactComponent,
    setActiveContactComponent,
    hoverComponent,
    setHoverComponent,
}) => {
    console.log(
        // name,
        // color,
        // h2,
        // activeComponent,
        // setActiveComponent,
        // hoverComponent,
        // setHoverComponent,
        // isActive,
    );

    let isActive = activeContactComponent === name ? "active-profile" : "inactive-profile"
    let isHover = hoverComponent === name ? "hover-profile" :
        hoverComponent ? "inhover-profile" : "";

    // setHoverComponent(hoverComponent)
    // console.log(hoverComponent,isHover,4);

    const handleClick = (e, componentName) => {
        // console.log(componentName)
        console.log(`${componentName.name}がクリックされました`);
        if (e.target.classList.contains("active")) {
            // console.log("これは既にアクティブ")
            // navigate("/contact");
        } else {
            setActiveContactComponent(componentName.name);
            setHoverComponent(null);
        }

        // console.log(activeComponent);

        // console.log(`現在 ${activeComponent} がactiveクラスを持っています。`)
    }

    const checkActive = (e, componentName) => {
        console.log(`${componentName.name}がホバーされました`)
        setHoverComponent(componentName.name);
        const checkComponent = e.target;
        // console.log(checkComponent.classList.contains("active-profile"))
        if (checkComponent.classList.contains("active-profile")) {
            setHoverComponent(null);
        } else {
            setHoverComponent(componentName.name);
        }
        console.log(hoverComponent, 3)
    }

    const handleMouseLeave = () => {
        setHoverComponent(null);
        console.log("ホバーが外れました。")
    }

    return (
        <div
            className={
                `container
                ${homeComponentStyles.webAppWrapper}
                ${homeComponentStyles[`${color}`]}
                ${isActive}
                ${isHover}
                `
            }
            onClick={(e) => handleClick(e, { name })}
            onMouseEnter={(e) => checkActive(e, { name })}
            onMouseLeave={handleMouseLeave}
        >
            <h1
                className={
                    `
                    ${homeComponentStyles.h1}
                    ${name === "Profile" ? homeComponentStyles[`contact-h1-color`] : homeComponentStyles.h1}
                    `
                }
            >
                {name}
            </h1>
            <p
                className={
                    `
                ${homeComponentStyles.p}
                ${homeComponentStyles[`self-introduction`]}
                `
                }
            >こんにちは、カイです。<br />
                私は都内の大学に通う学生です。2023年よりサークルに所属してプログラミングを学んでいます。<br />
                2024年は、バックエンドの学習に注力します。
            </p>
            <p
                className={homeComponentStyles[`self-introduction`]}
            >
                Hello, I'm Kai.<br />
                I'm a university student in Tokyo. In addition, since 2023, I have been learning programming as a member of a club.<br />
                In 2024, we will focus on backend learning.
            </p>
            <p
                className={homeComponentStyles[`skill`]}
            >
                [HTML,  CSS,  JavaScript,  Python,  php,  Dart,  React,  vue]
            </p>
            <h2 className={homeComponentStyles[`${h2}`]}>{name}</h2>
        </div>
    )
}

export default Profile