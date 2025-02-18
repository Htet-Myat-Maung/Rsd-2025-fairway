import Badge from "./Badge";

export default function Item({ item, del }) {
    return (
        <ul
            style={{
                padding: 10,
                borderBottom: "1px solid #ddd",
            }}>
            {item.content} - <Badge text={item.date} />
            <button style={{ marginLeft: 10 }} onClick={() => del(item.id)}>
                Delete
            </button>
        </ul>
    );
}
