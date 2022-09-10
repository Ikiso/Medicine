import './App.css';
import PageRouter from "./router/PageRouter";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <PageRouter/>
        </div>
    );
}

export default App;
