import '@master/css';
import FooterContent from './FooterContent';
import FooterSocials from './FooterSocials';

const Footer = () => {
    return(
        <footer className='w:100% px:2em pb:2em' >
            <hr className='color:gray-70 '/>
            <div className='w:100% mt:2em flex justify-content:space-between flex-direction:row@>md flex-direction:column@<sm py:2em px: 1.5em'>
                <FooterContent />
                <FooterSocials />
            </div>
        </footer>
    )
}

export default Footer;