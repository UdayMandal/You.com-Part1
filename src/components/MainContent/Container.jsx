import '@master/css';
import Branding from './Branding';
import MainContent from './MainContent';

const Container = () => {
    return(
        <main className='w:100% p:2em mb:3.8em'>
            <Branding/>
            <MainContent/>
        </main>
    )
}

export default Container;