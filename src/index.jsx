import {render} from 'preact';

import './style.css';
import {useEffect} from "react";
import {SpinBoy} from "./SpinBoy.jsx";

const eggbug = "./eggbug_loop.ogg"
let music = new Audio(eggbug)
music.loop = true

export function App() {
    useEffect(() => {
        //music.play()
        return (() => {
            music.pause()
        })
    }, []);


    return (
            <SpinBoy/>

        /*
        <>
            <div onClick={() => music.play()}>test</div>
        </>*/
    );
}


render(<App/>, document.getElementById('app'));
