import React, {useState} from "react";

const UncontrolledRaiting = () => {

    let [selected , setSelected] = useState( 0)

    return (
        <div>
            <Star value={1} selected={selected} />
            <button onClick={() => {setSelected(1)}}>1</button>
            <Star value={2} selected={selected} />
            <button onClick={() => {setSelected(2)}}>2</button>
            <Star  value={3} selected={selected}/>
            <button onClick={() => {setSelected(3)}}>3</button>
            <Star  value={4} selected={selected} />
            <button onClick={() => {setSelected(4)}}>4</button>
            <Star  value={5} selected={selected}/>
            <button onClick={() => {setSelected(5)}}>5</button>
        </div>
    );
}

type StarPropsType = {
    selected: number
    value: number
}


function Star (props: StarPropsType) { return props.value <= props.selected ? <span><b>star</b></span> : <span>star</span> }


export default UncontrolledRaiting;