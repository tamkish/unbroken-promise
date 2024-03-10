import {useEffect, useRef, useState} from "react";



const interval_time = 324; //approx 185 bpm
const spinFrames = ["f", "l", "b", "r"]
    .map(dir => `./spin/spin_${dir}.png`)

const music = new Audio("./eggbug_loop.ogg")
music.loop = true

const bubblePath = (name) => `./speech/small/${name}.png`
const bubbles = [
    {
        path: bubblePath("think"),
        top: "220px",
        left: "110px"
    },
         {
             path: bubblePath("talk"),
             top: "220px",
             left: "105px"
         },
    {
        path: bubblePath("shout"),
        top: "200px",
        left: "80px"
    },
]

export const SpinBoy = () => {
    const [spinIndex, setSpinIndex] = useState(0)
    const [isSpinning, setIsSpinning] = useState(false)
    const [showBubble, setShowBubble] = useState(false)
    const [bubble, setBubble] = useState()
    const spinFrame = spinFrames[spinIndex]


    const randomBubble = () => {
        setBubble(
            bubbles[Math.floor(Math.random() * bubbles.length)]
        )
    }

    useEffect(() => {
        randomBubble()
        return (() => {

        })
    }, []);

    const startSpinning = () => {
        document.title = "he spin :)"
        if (!isSpinning) {

            music.play()
            setInterval(() => {
                setSpinIndex(i => (i + 1) % spinFrames.length)
            }, interval_time)
            setIsSpinning(true)
        }
    }


    const spinboy =
        isSpinning
            ? <img src={spinFrame} className={"spinboy"}
                   onMouseEnter={() => {
                       randomBubble()
                       setShowBubble(true)
                   }}
                   onMouseLeave={() => setShowBubble(false)}/>
            : <img
                src={spinFrame}
                className={"spinboy"}
                onClick={startSpinning}
                onMouseEnter={() => {
                    setShowBubble(true)
                    randomBubble()
                }}
                onMouseLeave={() => setShowBubble(false)}
                style={{
                    cursor: "pointer"
                }}
            />

    if (bubble === undefined) {
        return
    }

    return <>
        {spinboy}
        {
            showBubble && isSpinning && <>
                <img src={bubble.path} className={"bubble"}/>

                <div className={"text"} style={{
                    top: bubble.top,
                    left: bubble.left
                }}>
                    <span>Made by<br/>
                        Tam and Cobbler</span>
                </div>
            </>
        }
    </>

}