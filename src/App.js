import './App.css';
import Hello from './component/Hello.js';
import Welcome from './component/Welcome.js';
import styles from './App.module.css';

function App() {
    return (
        <div class="App">
            <h3>props : properties</h3>
            <Hello age={10} name={'hi'} />
            <Hello age={20} />
            <Hello age={30} />
        </div>
    );
}


export default App;
