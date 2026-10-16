import Child from "./Child";
import { useState } from "react";

const Parent1 = () => {
    const [msg, setMsg] = useState("VPro");

    return (
        <>
            <h1>{msg}</h1>

            <button onClick={() => setMsg("Java")}>
                Change Message
            </button>

            <Child key1={msg} />
        </>
    );
};

export default Parent1;