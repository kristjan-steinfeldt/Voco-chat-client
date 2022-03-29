import React from 'react';
import {useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
    const [count, setCount] = React.useState(0);



    const [name, setName] = useState("dummyUser")
    const [chats, setChats] = useState([
        {name: 'user1', message: 'message1'},
        {name: 'dummyUser', message: 'message2'},
    ]);

    const [msg,setMsg] = useState('')

    const sendChat = () => {
        const c = [...chats];
        c.push({name,message:msg});
        setChats(c);
        setMsg('')
    }

    return <div>
        <h1>VOCO</h1>
        <div className="container">
            <div id="box" className="box">
            {chats.map(c => <div className="row">
                    <div className="container">
                <div className="textcon">
                    <p className="chatbox">
                        <div className="row">
                            <div className="text"><span>{c.message}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="sender"><strong>{c.name}</strong>
                            </div>
                        </div>
                    </p>
                </div>
                    </div>
                </div>)}
            </div>
            <div className="insertbox">
                <div className="row">
                    <div className="col-2">
                        <div className="user text-center">
                            <textarea className="inmsg" onInput={e=>setName(e.currentTarget.value)} value={name}/>
                        </div>
                    </div>
                    <div className="col-10">
                <input className="inmsg" onInput={e=>setMsg(e.currentTarget.value)} value={msg}
                    placeholder="enter your chat" onChange={e => setCount(e.target.value.length)}
                ></input>
                        <p>{count}/100</p>
                    </div>
                </div>
            </div>
            <div className="text-right">
            <button className="btn btn-outline-primary " onClick={(e) => sendChat()}>Send</button>
            </div>
        </div>
        </div>;
}

            export default App;
