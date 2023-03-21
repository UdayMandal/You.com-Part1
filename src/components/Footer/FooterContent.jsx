import '@master/css';

const FooterContent = () => {

    const heading = ["Contact us", "Learn more", "Features"]

    const arr = [
        ["Send feedback", "Join Community", "Terms", "Privacy", "We're hiring"],
        ["Getting started", "Blog", "Help Center", "FAQ", "iOS App", "Android App", "Developer Portal"],
        ["Private search", "App Store", "YouCode", "YouStudy", "YouSocial", "Bangs"]
    ];

    let i = 0;

    return(
        <div className='w:65%@>md w:100%@<sm flex justify-content:center align-items:center br:1.5px|solid|gray-70@>md bb:1.5px|solid|gray-70@<sm'>
            <div className='w:100% flex justify-content:flex-end@>md justify-content:center@<sm  gap:4.8em pr:6em@>md p:0@<sm mb:2em@<sm font:12px@<sm'>
                {heading.map(e=>{
                    return(
                        <div>
                            <h4>{e}</h4>
                            <ul className='list-style-type:none'>
                                {arr[i++].map(e=>{
                                    return(
                                        <li className='font:1.1em mb:0.4em'><a href='/' className='color:white text-decoraction:none'>{e}</a></li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                    })
                }
            </div>
        </div>
    )
}

export default FooterContent;