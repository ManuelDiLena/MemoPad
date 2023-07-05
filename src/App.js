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
    const [copyItems, setCopyItems] = useState([]);
    const [actualIndex, setActualIndex] = useState(-1);

    // Function to create new memos
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

    function handlePinned() {

    }

    
    // Function to select a memo from the left panel
    function handleSelectNote(item, e) {
        if(e.target.classList.contains('memo')) return
        const index = items.findIndex(x => x === item)
        setActualIndex(index)
    }

    // Function to display a selected memo in the editor
    function renderEditorUI() {
        return (
            <>
            <Editor item={items[actualIndex]}/>
            <Preview text={items[actualIndex].text} />
            </>
        );
    }

    return (
        <div className="App container">
            <Panel>
                <Menu onNew={handleNew}/>
                <List>
                    {
                        items.map((item, i) => {
                            return <Memo 
                                key={item.id} 
                                actualIndex={actualIndex} 
                                item={item} 
                                index={i} 
                                onHandlePinned={handlePinned} 
                                onHandleSelectNote={handleSelectNote}
                            />
                        })
                    }
                </List>
            </Panel>

            <>
              {
                (actualIndex >= 0) ? renderEditorUI() : ''
              }  
            </>
        </div>
    );
}

export default App;
