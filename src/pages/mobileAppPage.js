import React from "react";
import webAppPageStyles from '../styles//mobileAppPage.module.css'
import counterImg from "../assets/webAppImg/counter.png"
import dotGeneratorImg from '../assets/webAppImg/dot-generator.png'

// リンクを示すgithubのアイコンなども追加予定
const MobileAppPage = () => {
    const imgNames = {
        "ecサイト・デモ": {
            "img": counterImg,
            "date": "2023/05",
            "introduction": `

            `,
        },
        "計算機": {
            "img": dotGeneratorImg,
            "date": "2023/06",
            "introduction": `

            `,
        },
        "グリッドゲーム": {
            "img": counterImg,
            "date": "2023/02",
            "introduction": `
            `
        },
    }
    return (
        <div className="web-app-container">
            <div className={webAppPageStyles[`page-title-wrapper`]}>
                <h1 className={webAppPageStyles[`page-title`]}>
                    Smartphone Application（準備中）
                </h1>
            </div>
            <div className={webAppPageStyles[`menu-wrapper`]}>
                <p className={webAppPageStyles.all}>
                    All Works
                </p>
                <p className={webAppPageStyles.personal}>
                    Personal Works
                </p>
                <p className={webAppPageStyles.collaborative} >
                    Collaborative Works
                </p>
            </div>
            {/* {Object.entries(imgNames).map(([siteName, data], id) => (
                <div className={webAppPageStyles.subContainer}>
                    <div
                        className={
                            `
                            ${webAppPageStyles.wrapper}
                            ${id % 2 === 1 ? webAppPageStyles.odd : ""}
                            `
                        }
                        id={`${id}`}
                    >
                        <div
                            className={
                                `
                                ${webAppPageStyles[`text-box`]}
                                ${id % 2 === 0 ? webAppPageStyles[`text-box-even`] : webAppPageStyles[`text-box-odd`]}
                                `
                            }
                        >
                            <h1 className={webAppPageStyles.title}>
                                {`${siteName}`}
                            </h1>
                            <p className={webAppPageStyles.date}>
                                {`${data.date}`}
                            </p>
                            <p className={webAppPageStyles.text}>
                                {`${data.introduction}`}
                            </p>
                        </div>
                        <div>
                            <img
                                className={webAppPageStyles.wrapperImg}
                                src={`${data.img}`}
                                alt=""
                            >
                            </img>
                        </div>
                    </div>
                </div>
            ))} */}
        </div>
    )
}

export default MobileAppPage
