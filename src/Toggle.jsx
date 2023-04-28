import { useRef, useState } from "react";
import "./toggle.css";

function Toggle({e}){

    const toggleButton = useRef(null);
    const [acikMi, acikMiGuncelle] = useState(false);

    function tiklandi(){
        acikMiGuncelle(oncekiDeger => !oncekiDeger);
    };

    return(
        <>
            <div className="eleman">
                <div className="yazilar">
                    <p>{e.title}</p>
                    {acikMi ? <p>{e.info}</p> : ""}
                </div>
                <button className="btn" ref={toggleButton} onClick={tiklandi}>+</button>
            </div>
        </>
    )
};

export default Toggle;