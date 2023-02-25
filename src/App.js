import { Top } from './components/top';
import { Header } from './components/header';
import { Layout } from './components/layout';
import './style/global.css'

function App() {
    return (
        <>
            <Top />
            <div id="teste">
                <Header />
                <Layout />
            </div>
        </>
    );
}

export default App;