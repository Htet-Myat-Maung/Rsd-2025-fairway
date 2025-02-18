import { useState, useContext, useEffect } from "react";
import { AppContext } from "./AppProvider";

import Item from "./Item";
import Form from "./Form";
import Header from "./Header";

export default function App() {
    const { mode } = useContext(AppContext);

    useEffect(() => {
        console.log("do something");
    }, [mode]);

    const [data, setData] = useState([
        { id: 3, content: "Apple", date: "1s" },
        { id: 2, content: "Orange", date: "2s" },
        { id: 1, content: "Milk", date: "3s" },
    ]);

    const add = (content) => {
        const id = data[0].id + 1;
        setData([{ id, content, date: "1s" }, ...data]);
    };

    const del = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    return (
        <div
            style={{
                background: mode == "dark" ? "#222" : "@efefef",
                color: mode == "dark" ? "white" : "black",
                minHeight: 2000,
            }}>
            <div style={{ maxWidth: 600, margin: "auto" }}>
                <Header />
                <Form add={add} />
                <list>
                    {data.map((item) => {
                        return <Item key={item.id} item={item} del={del} />;
                    })}
                </list>
            </div>
        </div>
    );
}
