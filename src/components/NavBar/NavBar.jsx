import '@master/css';
import './NavBar.css';
import React from 'react';
import { useState } from 'react';

const NavBar = () => {
    const [style, setStyle] = useState("cont");
    const [style2, setSty] = useState("noBlur");
  
    const changeStyle = () => {
        setStyle("cont2");
        setSty("blur");
    };

    const closeStyle = () => {
        setStyle("cont");
        setSty("noBlur");
    };

    const youLink = [
        {
            logo:<img className='w:20px mr:0.5em' src="https://cdn.you.com/img/app-icons/icon-youwrite.svg" alt='youcode'/>,
            heading:"YOU Code",
            desc:"Code, learn, work faster with a search engine for developers",
            button:<div className='py:0.55em py:0.38em@<=1200px px:0.6em bg:linear-gradient(45deg,blue-54,sky-68) r:2em font:16px font-weight:600 letter-spacing:0.4px flex justify-content:space-between align-items:center cursor:pointer text-transform:uppercase'>Try it now
            </div>
        },
        {
            logo:<img className='w:20px mr:0.5em' src="https://cdn.you.com/img/app-icons/icon-youcode.svg" alt='youcode'/>,
            heading:"YOU write",
            desc:"Use AI to write blogs, emails or social media posts",
            button:<div className='py:0.55em py:0.38em@<=1200px px:0.6em bg:linear-gradient(45deg,blue-54,sky-68) r:2em font:16px font-weight:600 letter-spacing:0.4px flex justify-content:space-between align-items:center cursor:pointer text-transform:uppercase'>Try it now
            </div>
        }
    ]

    const items = [
        {
            logo:<img className='w:30px' src='https://cdn.you.com/img/app-icons/icon-shopping.svg' alt='item'/>,
            title:"Shopping",
            desc:"Visually shop for your favourite items",
            icon:<ion-icon name="chevron-forward"></ion-icon>
        },
        {
            logo:<img className='w:30px' src='https://cdn.you.com/img/app-icons/icon-shopping.svg' alt='item'/>,
            title:"Shopping",
            desc:"Visually shop for your favourite items",
            icon:<ion-icon name="chevron-forward"></ion-icon>
        },
        {
            logo:<img className='w:30px' src='https://cdn.you.com/img/app-icons/icon-shopping.svg' alt='item'/>,
            title:"Shopping",
            desc:"Visually shop for your favourite items",
            icon:<ion-icon name="chevron-forward"></ion-icon>
        }
    ]         

    return(
        <>
        <div id={style2} className='w:100% h:500px position:fixed top:0 z-index:1 '></div>
        <nav className="box:border w:100% flex-basis:full h:90px flex justify-content:space-between align-items:center px:40px px:0px@<sm py:10px">
                <div className='w:18% d:none@<=1200'></div>
                <div className='w:50% h:100% flex@>1200px justify-content:space-between  display:none@<=1200px align-items:center f:15px font-weight:600'>
                    <div className='bg:rgb(141,141,143,0.30):hover cursor:pointer py:0.45em px:0.65em r:10px flex justify-content:space-between align-items:center' >
                        <img className='w:20px mr:0.5em' src="https://cdn.you.com/img/app-icons/icon-youchat.svg" alt='youchat'/>
                        <span>YouChat</span>
                    </div>
                    <div className='bg:rgb(141,141,143,0.30):hover flex justify-content:space-between align-items:center cursor:pointer py:0.45em px:0.65em r:10px' >
                        <img className='w:20px mr:0.5em' src="https://cdn.you.com/img/app-icons/icon-youcode.svg" alt='youcode'/>
                        <span>YouCode</span>
                    </div>
                    <div className='bg:rgb(141,141,143,0.30):hover flex justify-content:space-between align-items:center cursor:pointer py:0.45em px:0.65em r:10px' >
                        <img className='w:20px mr:0.5em' src="https://cdn.you.com/img/app-icons/icon-youwrite.svg" alt='youwrite'/>
                        <span>YouWrite</span>
                    </div>
                    <div className='bg:rgb(141,141,143,0.30):hover flex justify-content:space-between align-items:center cursor:pointer py:0.45em px:0.65em r:10px' >
                        <img className='w:20px mr:0.5em' src="https://cdn.you.com/img/images/landing-page/icon-stablediffusion-landing.svg" alt='youimagine'/>
                        <span>YouImagine</span>
                    </div>
                    <div className='bg:rgb(141,141,143,0.30):hover flex justify-content:space-between align-items:center cursor:pointer py:0.45em px:0.65em r:10px' >
                        <img className='w:20px mr:0.5em' src="https://cdn.you.com/img/shared/icon-three-vertical-dots.svg" alt='more'/>
                        <span>More</span>
                    </div>
                </div>
    
                <div className='font:23px color:gray-48 d:none@>1200px d:block@<=1200px'>
                    <div className=' ml:0.8em cursor:pointer' onClick={changeStyle}>
                        <span className='span-icon color:gray-56'>
                            <ion-icon name="apps"></ion-icon>
                        </span>
                    </div>
                    
                    <div id={style} className='transition:1s  position:fixed w:100% bg:gray-26 z-index:2'>
                        <div className='flex justify-content:space-between mx:1em font:30px color:white pt:0.6em'>
                            <h3>Featured Apps</h3>
                            <span id='close' onClick={closeStyle}>
                                <ion-icon name="close"></ion-icon>
                            </span>
                            
                        </div>
    
                        <div className='flex justify-content:space-between mx:1em'>
                            {youLink.map(e=>{
                                return(
                                    <div className='w:48%  p:0.8em r:0.8em mt:0.6em color:white bg:url("https://cdn.you.com/img/shared/landing-page/image-youcode-bg-dark.png") bg:no-repeat background-size:170%|100%'>
                                        <div className='w:100% flex align-items:center mb:0.6em'>
                                            <span className='font:25px d:inline-block'>{e.logo}</span>
                                            <h4 className='m:0'>{e.heading}</h4>
                                        </div>
                                        <p className='font:16px'>{e.desc}</p>
                                        <div className='flex justify-content:center color:white w:100%'>
                                            {e.button}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
    
                        <div className='w:65% flex flex-direction:column box-shadow:0|0|0.8em|gray-50 mx:1em my:1em px:0.2em r:0.6em'>
                            {items.map(e=>{
                                return(
                                    <div className='flex justify-content:space-between bb:0.8px|solid|gray py:0.6em px:0.4em color:white'>
                                        {e.logo}
                                        <div>
                                            <h4 className='m:0'>{e.title}</h4>
                                            <span className='font:14px'>{e.desc}</span>
                                        </div>
                                        {e.icon}
                                    </div>
                                )
                            })}
                            <div className='flex justify-content:center py:0.8em align-items:center font:18px'>
                                <a href='@'>Explore 150+ apps
                                <span className=""><ion-icon name="arrow-forward"></ion-icon></span>  </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
    
                <div className='w:20%@>=1170px w:35%@<1170px&>750px w:60%@<=750px&>460px w:85%@<=460px h:100% flex justify-content:flex-end align-items:center mr:0.8em@<sm'>
                    <div className='py:0.6em@>1200px py:0.4em@<=1200px px:1em b:2px|solid|sky-48 r:2em font:16px color:sky-56 cursor:pointer color:fade-16:hover bg:linear-gradient(45deg,blue-58,sky-68):hover transition:0.5s font-weight:600 text-transform:uppercase letter-spacing:0.4px mr:1.2em'>log in</div>
    
                    <div className='py:0.55em py:0.38em@<=1200px px:0.6em bg:linear-gradient(45deg,blue-54,sky-68) r:2em font:16px font-weight:600 letter-spacing:0.4px flex justify-content:space-between align-items:center cursor:pointer text-transform:uppercase'>signup
                        <span className='flex justify-content:space-between align-items:center bg:white color:sky-60 font:15px p:4px r:5em ml:0.5em'><ion-icon name="settings"></ion-icon></span>
                    </div>
                </div>
            </nav>
            </>
    )
}






// class NavBar extends React.Component {

    

//     state = {style:<>style={{transform:'translateY(120%)', display:'block'}}</>,
//         youLink : [
//             {
//                 logo:<img className='w:20px mr:0.5em' src="https://cdn.you.com/img/app-icons/icon-youcode.svg" alt='youcode'/>,
//                 heading:"YOU Code",
//                 desc:"Code, learn, work faster with a search engine for developers",
//                 img:<img src='@' alt='bg' />,
//                 button:<div className='py:0.55em py:0.38em@<=1200px px:0.6em bg:linear-gradient(45deg,blue-54,sky-68) r:2em font:16px font-weight:600 letter-spacing:0.4px flex justify-content:space-between align-items:center cursor:pointer text-transform:uppercase'>Try it now
//                 </div>
//             },
//             {
//                 logo:<img className='w:20px mr:0.5em' src="https://cdn.you.com/img/app-icons/icon-youcode.svg" alt='youcode'/>,
//                 heading:"YOU Code",
//                 desc:"Code, learn, work faster with a search engine for developers",
//                 img:<img src='@' alt='bg' />,
//                 button:<div className='py:0.55em py:0.38em@<=1200px px:0.6em bg:linear-gradient(45deg,blue-54,sky-68) r:2em font:16px font-weight:600 letter-spacing:0.4px flex justify-content:space-between align-items:center cursor:pointer text-transform:uppercase'>Try it now
//                 </div>
//             }
//         ],
//         items : [
//             {
//                 logo:<img className='w:30px' src='https://cdn.you.com/img/app-icons/icon-shopping.svg' alt='item'/>,
//                 title:"Shopping",
//                 desc:"Visually shop for your favourite items",
//                 icon:<ion-icon name="chevron-forward"></ion-icon>
//             },
//             {
//                 logo:<img className='w:30px' src='https://cdn.you.com/img/app-icons/icon-shopping.svg' alt='item'/>,
//                 title:"Shopping",
//                 desc:"Visually shop for your favourite items",
//                 icon:<ion-icon name="chevron-forward"></ion-icon>
//             },
//             {
//                 logo:<img className='w:30px' src='https://cdn.you.com/img/app-icons/icon-shopping.svg' alt='item'/>,
//                 title:"Shopping",
//                 desc:"Visually shop for your favourite items",
//                 icon:<ion-icon name="chevron-forward"></ion-icon>
//             }
//         ]            
//     }

//     onMenuCLick = () => {
//         this.setState({style:<>style={{transform:'transitionY(0%)',display:'block'}}</>})
//     }

//     render(){
//         console.log(this.state.style)
//         return(
//             <nav className="box:border w:100% flex-basis:full h:90px flex justify-content:space-between align-items:center px:40px px:0px@<sm py:10px">
//                 <div className='w:18% d:none@<=1200'></div>
//                 <div className='w:50% h:100% flex@>1200px justify-content:space-between  display:none@<=1200px align-items:center f:15px font-weight:600'>
//                     <div className='bg:rgb(141,141,143,0.30):hover cursor:pointer py:0.45em px:0.65em r:10px flex justify-content:space-between align-items:center' >
//                         <img className='w:20px mr:0.5em' src="https://cdn.you.com/img/app-icons/icon-youchat.svg" alt='youchat'/>
//                         <span>YouChat</span>
//                     </div>
//                     <div className='bg:rgb(141,141,143,0.30):hover flex justify-content:space-between align-items:center cursor:pointer py:0.45em px:0.65em r:10px' >
//                         <img className='w:20px mr:0.5em' src="https://cdn.you.com/img/app-icons/icon-youcode.svg" alt='youcode'/>
//                         <span>YouCode</span>
//                     </div>
//                     <div className='bg:rgb(141,141,143,0.30):hover flex justify-content:space-between align-items:center cursor:pointer py:0.45em px:0.65em r:10px' >
//                         <img className='w:20px mr:0.5em' src="https://cdn.you.com/img/app-icons/icon-youwrite.svg" alt='youwrite'/>
//                         <span>YouWrite</span>
//                     </div>
//                     <div className='bg:rgb(141,141,143,0.30):hover flex justify-content:space-between align-items:center cursor:pointer py:0.45em px:0.65em r:10px' >
//                         <img className='w:20px mr:0.5em' src="https://cdn.you.com/img/images/landing-page/icon-stablediffusion-landing.svg" alt='youimagine'/>
//                         <span>YouImagine</span>
//                     </div>
//                     <div className='bg:rgb(141,141,143,0.30):hover flex justify-content:space-between align-items:center cursor:pointer py:0.45em px:0.65em r:10px' >
//                         <img className='w:20px mr:0.5em' src="https://cdn.you.com/img/shared/icon-three-vertical-dots.svg" alt='more'/>
//                         <span>More</span>
//                     </div>
//                 </div>
    
//                 <div className='font:23px color:gray-48 d:none@>1200px d:block@<=1200px'>
//                     <div className=' ml:0.8em cursor:pointer' onClick={this.onMenuCLick}>
//                         <span className='span-icon color:gray-56'>
//                             <ion-icon name="apps"></ion-icon>
//                         </span>
//                     </div>
                    
//                     <div id='disDiv' style={this.state.style} className='transition:0.6s  position:absolute w:100% bg:gray-26 z-index:2'>
//                         <div className='flex justify-content:space-between mx:1em font:30px color:white pt:0.6em'>
//                             <h3>Featured Apps</h3>
//                             <span id='close'>
//                                 <ion-icon name="close"></ion-icon>
//                             </span>
                            
//                         </div>
    
//                         <div className='flex justify-content:space-between mx:1em'>
//                             {this.state.youLink.map(e=>{
//                                 return(
//                                     <div className='w:48% p:0.8em r:0.8em mt:0.6em color:white bg:black '>
//                                         <div className='w:100% flex align-items:center mb:0.6em'>
//                                             <span className='font:25px d:inline-block'>{e.logo}</span>
//                                             <h4 className='m:0'>{e.heading}</h4>
//                                         </div>
//                                         <p className='font:16px'>{e.desc}</p>
//                                         <div className='flex justify-content:center color:white w:100%'>
//                                             {e.button}
//                                         </div>
//                                     </div>
//                                 )
//                             })}
//                         </div>
    
//                         <div className='w:65% flex flex-direction:column box-shadow:0|0|0.8em|gray-50 mx:1em my:1em px:0.2em r:0.6em'>
//                             {this.state.items.map(e=>{
//                                 return(
//                                     <div className='flex justify-content:space-between bb:0.8px|solid|gray py:0.6em px:0.4em color:white'>
//                                         {e.logo}
//                                         <div>
//                                             <h4 className='m:0'>{e.title}</h4>
//                                             <span className='font:14px'>{e.desc}</span>
//                                         </div>
//                                         {e.icon}
//                                     </div>
//                                 )
//                             })}
//                             <div className='flex justify-content:center py:0.8em align-items:center font:18px'>
//                                 <a href='@'>Explore 150+ apps
//                                 <span className=""><ion-icon name="arrow-forward"></ion-icon></span>  </a>
//                             </div>
//                         </div>
                        
//                     </div>
//                 </div>
                
    
//                 <div className='w:20%@>=1170px w:35%@<1170px&>750px w:60%@<=750px&>460px w:85%@<=460px h:100% flex justify-content:flex-end align-items:center mr:0.8em@<sm'>
//                     <div className='py:0.6em@>1200px py:0.4em@<=1200px px:1em b:2px|solid|sky-48 r:2em font:16px color:sky-56 cursor:pointer color:fade-16:hover bg:linear-gradient(45deg,blue-58,sky-68):hover transition:0.5s font-weight:600 text-transform:uppercase letter-spacing:0.4px mr:1.2em'>log in</div>
    
//                     <div className='py:0.55em py:0.38em@<=1200px px:0.6em bg:linear-gradient(45deg,blue-54,sky-68) r:2em font:16px font-weight:600 letter-spacing:0.4px flex justify-content:space-between align-items:center cursor:pointer text-transform:uppercase'>signup
//                         <span className='flex justify-content:space-between align-items:center bg:white color:sky-60 font:15px p:4px r:5em ml:0.5em'><ion-icon name="settings"></ion-icon></span>
//                     </div>
//                 </div>
//             </nav>
//         )
//     }
// }

export default NavBar;