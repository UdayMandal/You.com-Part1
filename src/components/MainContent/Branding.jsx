import '@master/css';
import {Link} from 'react-scroll';
import edge from '../../Images/edge.png'

const Branding = () => {
    return(
        <>
        <div className="w:100% flex flex-direction:column align-items:center">
            <div className='w:40% py:0.2em f:70px flex align-items:center justify-content:center'>
                <img src='https://you.com/images/ydc-logo-lightdarkmode.svg' alt='you site' className='w:250px'></img>
            </div>

            <div className='w:80%  py:0.5em f:20px flex align-items:center justify-content:center'>The AI Search Engine You Control</div>

            <div className='mt:10px py:30px w:70% w:100%@<md flex align-items:center justify-content:center'>
                <div id='search-div' className='w:70% w:90%@<sm bg:gray-30 outline:0.1px|solid|gray-38 r:1.8em  py:0.9em px:20px box-shadow:0|0|1.5em|0.5px|gray-40 outline:2px|solid|blue-48:has(>input:focus) box-shadow:0|0|1.5em|0.5|blue-36:has(>input:focus) flex align-items:center justify-content:space-between'>

                    <input id='search-input' className='w:95%  font:17px py:0.2em bg:transparent font-color:white b:none outline:none mr:0.8em color:gray-66::placeholder ' type="text" placeholder='Start typing to search...' />

                    <ion-icon style={{cursor:'pointer'}} name="search"></ion-icon>
                </div>
            </div>

            <div className='mt:10px py:20px w:80% w:100%@<xs 
            flex align-items:center justify-content:center'>
                <div className='w:55% w:80%@<md&>sm w:95%@<=sm&>2xs w:100%@<=2xs bg:linear-gradient(45deg,blue-40,sky-70) font-weight:600 cursor:pointer letter-spacing:0.5px r:1.8em  py:0.9em flex align-items:center justify-content:center font:11px@<xs'>
                    <span className='mr:10px'>Introducing YouChat, talk to it here</span>
                    <ion-icon name="send"></ion-icon>
                </div>
            </div>
            
            <div className='py:5px w:80% w:100%@<=sm flex align-items:center justify-content:center'>
                <div className='min-w:20%  bg:gray-30 font:14px font:12px@<=sm&>xs font:10px@<=xs font-weight:600 letter-spacing:0.5px r:1.8em  py:0.9em px:30px cursor:pointer flex align-items:center justify-content:space-between'>
                    <img className='w:20px bg:transparent bg:cover' src={edge} alt='edge'/>
                    {/* <i className="edge icon flex align-items:center justify-content:center"></i> */}
                    <span className='ml:10px'>Add You.com to Edge to get started</span>
                </div>
            </div>

            <div className='mt:20px font:35px'>
                <Link to="content-area" className='cursor:pointer color:white' spy={true} offset={-30} duration={800} smooth={true}>
                    <ion-icon name="chevron-down"></ion-icon>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Branding;