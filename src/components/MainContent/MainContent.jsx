import '@master/css';

const MainContent = () => {

    const items = [
        {
            icon:<ion-icon name="time-outline"></ion-icon>,
            title:"your time",
            desc: "The multi-dimensional interface with horizontal and vertical scrolling lets you discover more in less time.",
            img: "https://cdn.you.com/img/shared/landing-page/why-you-1-light.png"
        },
        {
            icon:<ion-icon name="logo-microsoft"></ion-icon>,
            title:"your sources",
            desc: "Personalize your search with 150+ apps like StackOverflow, Medium, Amazon and Twitter.",
            img: "https://cdn.you.com/img/shared/landing-page/why-you-2-light.png"
        },
        {
            icon:<ion-icon name="shield-checkmark-outline"></ion-icon>,
            title:"your privacy",
            desc: "Personalize your search with 150+ apps like StackOverflow, Medium, Amazon and Twitter.",
            img: "https://cdn.you.com/img/shared/landing-page/why-you-privacy-light.png"
        }
    ]

    return(
        <>
        <div className='content-area mt:5em w:100% px:1em'>
            <h1 className='font:2.4em mb:1.5em text-align:center font-weight:600'>Why You.com?</h1>

            <div className='w:100% flex flex-direction:column@<sm justify-content:space-between align-items:center@<sm mt:10px '>
                {items.map(e=>{
                    return(
                        <div className='w:30% w:85%@<sm mb:3em@<sm bg:gray-18 box-shadow:0|0|10px|2px|gray-10 pt:1em r:1.5em'>
                            <div className='w:100% h:210px h:260px@<1120px&>=sm h:auto@<sm  p:1.2em mb:0.5em mb:1.2em@<sm'>
                                <div className='text-align:center font:2.6em mb:0.7em'>{e.icon}</div>
                                <h2 className='w:100% m:0 mb:0.5em text-transform:capitalize text-align:center font:2em font:1.8em@<sm'>{e.title}</h2>
                                <p className='text-align:center font:1em font:0.85em@<sm font-weight:600 letter-spacing:0.5px'>{e.desc}</p>
                            </div>
                            
                            <img src={e.img} alt={e.title} className="bg:cover w:100% rb:1em" />
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default MainContent;