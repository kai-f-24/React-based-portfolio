import React from "react";
import webAppPageStyles from '../styles/webSitePage.module.css'
import portfolio from "../assets/webSiteImg/portfolio.png"
import chuyasai2023Img from "../assets/webSiteImg/chuyasai2023.png"
import sidevargImg from "../assets/webSiteImg/sidevarg.png"
import waxaImg from '../assets/webSiteImg/waxa.png'

// リンクを示すgithubのアイコンなども追加予定
const WebSitePage = () => {
    const imgNames = {
        "React-based portfolio(準備中)": {
            img: portfolio,
            date: "2024/02",
            github:"",
            introduction: `インターンに応募するにあたりポートフォリオがあると選考の指標になったりと何かと便利だと、
            先輩から伺い作成しました。
            シンプルなデザイン、細部にはこだわりのエフェクトも盛り込みました。
            また、デザインのシンプルさと再利用の容易さからフロントエンドはReactを使い制作しました。
            掲載できる制作物が増えたらデータベースも構築していこうと考えています。
            フロントエンド(React), バックエンド(Flask)
            (レスポンシブ対応は今後実装する予定です。)
            `
        },
        "早稲田祭中夜祭2023特設ページ": {
            img: chuyasai2023Img,
            date: "2023/10",
            github:"https://github.com/winc1980/chuyasai2023",
            introduction: `早稲田大学で2023年11月に行われる中夜祭2023の特設ページをサークで制作しました。
            私はページに漂う煙のエフェクトを担当しました。
            three.jsを使用し作成しました。
            `,
        },
        "早稲田CINEMAX SIDEVARG": {
            img: sidevargImg,
            github:"https://github.com/winc1980/SidevargHP",
            date: "2023/3",
            introduction: `2023年にサークルで制作したCINEMAX SIDEVARG様のHPの制作に参加させていただきました。
            `
        },
        "早稲田天文同好会WAXA": {
            img: waxaImg,
            github:"https://github.com/winc1980/waxaHP",
            date: "2023/03",
            github: "",
            introduction: "2023年にサークルで制作した早稲田天文同好会WAXA様のHPの制作に参加させていただきました。"
        },
    }
    return (
        <div className="web-app-container">
            <div className={webAppPageStyles[`page-title-wrapper`]}>
                <h1 className={webAppPageStyles[`page-title`]}>
                    WEB Site
                </h1>
            </div>
            <div className={webAppPageStyles[`menu-wrapper`]}>
                <p className={webAppPageStyles.all}>
                    All Works
                </p>
                <p className={webAppPageStyles.personal}>
                    Personal Works（準備中）
                </p>
                <p className={webAppPageStyles.collaborative} >
                    Collaborative Works（準備中）
                </p>
            </div>
            {Object.entries(imgNames).map(([siteName, data], id) => (
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
                            <div
                                className={
                                    "date-github-wrapper"
                                }

                            >
                                <p className={webAppPageStyles.date}>
                                    {`${data.date}`}
                                </p>
                                <a
                                    href={data.github}
                                    className="github"
                                >
                                    <i class="ri-github-fill"></i>
                                </a>
                            </div>

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
            ))}
        </div>
    )
}

export default WebSitePage