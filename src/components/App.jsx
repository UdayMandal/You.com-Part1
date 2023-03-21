import '@master/css';

import NavBar from './NavBar/NavBar';
import Container from './MainContent/Container';
import Footer from './Footer/Footer';

const App = () => {
    return(
        <div className="w:100% m:0 p:0 bg:fade-16 font:white" >
            <NavBar/>
            <Container/>
            <Footer/>
        </div>
    )
}
export default App;