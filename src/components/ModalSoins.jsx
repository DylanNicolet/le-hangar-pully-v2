export default function ModalSoins({ data, onClose }) {
    return (
        <section className="modal-soins">
            <h3>{data.key}</h3>
            
            <h4>{data.title1}</h4>
            <p>{data.text1}</p>
            {data.listTitleKeratine && <p>{data.listTitleKeratine}</p>}
            {data.listPointsKeratine && 
                <ul>
                    {data.listPointsKeratine.map((listItem, index) => {return <li key={index}>{listItem}</li>})}
                </ul>
            }

            <h4>{data.title2}</h4>
            <p>{data.text2}</p>

            <h4>{data.title3}</h4>
            <p>{data.text3}</p>
            {data.listPointsTanin && 
                <ul>
                    {data.listPointsTanin.map((listItem, index) => {return <li key={index}>{listItem}</li>})}
                </ul>
            }

            <button onClick={onClose} className="close-button">X</button>
        </section>
    )
}