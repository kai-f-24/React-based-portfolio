import React from "react";
import webAppPageStyles from '../styles/webAppPage.module.css'
import counterImg from "../assets/webAppImg/counter.png"
import dotGeneratorImg from '../assets/webAppImg/dot-generator.png'
import keijibanGPTImg from '../assets/webAppImg/keijiban-GPT.jpeg'
import GanttChartImg from'../assets/webAppImg/gantt-chart.png'
import Randaction from'../assets/webAppImg/Randaction.png'

// リンクを示すgithubのアイコンなども追加予定
const WebAppPage = () => {
    const imgNames = {
        "Randaction": {
            img:Randaction,
            date:"2024/02",
            github:"",
            introduction:`
            2024の2月に行われたサークル合宿内ハッカソンにて制作したSNSです。
            ユーザーは１週間に一度アプリから与えらるミッションの達成報告を投稿して他のユーザーと
            交流を図るというアプリです。アプリを使用することで「ルーティンな日常に不規則な変化を起こす」という
            コンセプトから、randomとactionを掛け合わせたネーミングにしました。
            私はチームリーダーとして制作工程の管理とバックエンドを担当しました。見事５チーム中１位になることができました。
            デザイン、コンセプト立案をしてくれた1年生、フロントを担当してくれた1年生(2名)、データベース設計してくれた(4年生)に
            感謝を申し上げます。
            フロント(css)が完成していないのと、いいね機能の実装まで間に合わなかったので機能を補完し、公開までする予定です。
            `
        },

        "ガントチャート": {
            img: GanttChartImg,
            date: "2024/02",
            github:"",
            introduction: `
            2024年2月に制作したアプリです。
            プログラミングを学び１年が経とうとしていたので、節目として何かを作りたいと思い、フロントはフレームワークなどを用いず
            純粋なhtml,css,javascriptで制作しました。
            「サークルの制作活動で初学者のメンバーにも使いやすいスケジュール管理アプリがつくれたら」、という思いのもとシンプルな
            ガントチャートアプリを作りました。
            フロントエンド(html, css, JavaScript)、バックエンド(Python-Flask)、データベース(SQLite)
            詳しくはgit hubをご覧ください。
            `
        },
        "keijiban-GPT": {
            img: keijibanGPTImg,
            date: "2023/09",
            github:"https://github.com/pentabi/keijibanGPT?tab=readme-ov-file",
            introduction: `
            2023年9初旬に開催されたハッカソンで制作したwebアプリです。
            掲示板が盛り上がりに欠ける時に、chat-GPTが会話に参加し掲示板を盛り上げるように働きかける仕様にしあげました。
            私はデータベースとバックエンド間の処理+フロント作業を担当しました。
            フロントエンド（React）、バックエンド(Python-Flask)、データベース(SQLite)。
            詳しくはgit hubをご覧ください。
            `
        },
        "ドット絵アプリ": {
            img: dotGeneratorImg,
            date: "2023/06",
            github:"https://github.com/nekokujira24wase/pixel-generator",
            introduction: `
            2023年に趣味でプログラミングを始めた頃に作成した簡単なアプリです。
            詳しくはgit hubをご覧ください。
            `,
        },
        "文字数カウントアプリ": {
            img: counterImg,
            date: "2023/05",
            github:"https://github.com/nekokujira24wase/MOJI-Counter",
            introduction: `
            
            `,
        },
        
    }
    return (
        <div className="web-app-container">
            <div className={webAppPageStyles[`page-title-wrapper`]}>
                <h1 className={webAppPageStyles[`page-title`]}>
                    WEB Application
                </h1>
            </div>
            <div className={webAppPageStyles[`menu-wrapper`]}>
                <p className={webAppPageStyles.all}>
                    All Works
                </p>
                <p className={webAppPageStyles.personal} >
                    Personal Works（準備中）
                </p>
                <p className={webAppPageStyles.collaborative}>
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
                                ${id % 2 === 0 ? webAppPageStyles[`text-box-even`]: webAppPageStyles[`text-box-odd`] }
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

export default WebAppPage