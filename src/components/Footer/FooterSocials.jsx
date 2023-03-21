import '@master/css';

const FooterSocials = () => {

    const links = [
        <a href='@' className='color:white'><ion-icon name="logo-discord"></ion-icon></a>, <a href='@' className='color:white'><ion-icon name="logo-youtube"></ion-icon></a>, <a href='@' className='color:white'><ion-icon name="logo-facebook"></ion-icon></a>, <a href='@' className='color:white'><ion-icon name="logo-reddit"></ion-icon></a>, <a href='@' className='color:white'><ion-icon name="logo-twitter"></ion-icon></a>, <a href='@' className='color:white'><ion-icon name="logo-linkedin"></ion-icon></a>,
    ]

    return(
        <div className='w:30%@>md w:100%@<sm flex@<sm justify-content:center@<sm mt:2em@<sm'>
            <div className='w:100%@>md w:70%@<sm pt:0.3em '>
                <h3 className='m:0 text-align:center@<sm'>Subscribe to our newsletter</h3>
                <span className='color:grey-38 font:14 mb:1em mb:1.2em@<sm flex@<sm justify-content:center@<sm display:inline-block'>Get latest news and updates about you.com</span>

                <div className='w:90% py:0.5em flex justify-content:space-between w:100%@<sm mb:1.5em mb:1.2em@<sm'>
                    <input type='text' className='outline:none b:none w:60% r:0.7em b:1px|solid|gray-30 outline:2px|solid|blue-42:focus py:0.8em px:0.9em bg:gray-40 color:gray-82::placeholder font:16px' placeholder='Your email address'/>
                    <button className='w:40% ml:1em cursor:pointer bg:gray-74:hover transition:0.6s px:0.9em@>md py:0.55em@>md px:0.7em@<sm py:0.3em@<sm r:2em b:1.5px|solid|white bg:transparent color:white font:16px font:14px@<xs'>Subscribe</button>
                </div>
                <div className='w:100% flex justify-content:center@<sm'>
                    {links.map(e=>{
                        return(
                            <span className='font:2em mr:0.4em cursor:pointer'>{e}</span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FooterSocials;