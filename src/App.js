import { useState } from 'react';
import './App.css';
import uuid from 'react-uuid';
import Panel from './components/Panel';
import Menu from './components/Menu';
import List from './components/List';
import Memo from './components/Memo';
import Editor from './components/Editor';
import Preview from './components/Preview';

function App() {

    const [items, setItems] = useState([]);

    function handleNew() {
        const memo = {
            id: uuid(),
            title: '',
            text: '',
            pinned: false,
            created: Date.now()
        }

        setItems([...items, memo])
    }

    return (
        <div className="App container">
            <Panel>
                <Menu onNew={handleNew}/>
                <List>
                    {
                        items.map((item, i) => {
                            return <Memo key={item.id} item={item} />
                        })
                    }
                </List>
            </Panel>

            <>
                <Editor />
                <Preview />
            </>
        </div>
    );
}

export default App;
