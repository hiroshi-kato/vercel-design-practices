import styles from './App.module.css';
import { Tabs } from './components/Tabs';

function App() {
  return (
    <div>
      <h1 className={styles.title}>vercel design practices</h1>
      <Tabs />
    </div>
  );
}

export default App;
