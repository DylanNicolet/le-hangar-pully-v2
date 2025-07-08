import { useDispatch } from "react-redux";
import { updateModalSoins } from "../redux/webConfigSlice";
import database from "../Text for soins spéciaux/soinSpeciauxText";
import { useSelector } from "react-redux";

export default function ModalSoins() {
    const key = useSelector((state) => state.webConfig.modalSoins.key)
    let soinSpeciauxText = database.soinSpeciauxText.filter((a) => {if(a.key===key){return a}})[0]
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(updateModalSoins({status: false, key: ""}))
    }

    return (
        <section className="modal-soins">
            <h3>{key}</h3>
            
            <h4>{soinSpeciauxText.title1}</h4>
            <p>{soinSpeciauxText.text1}</p>
            {soinSpeciauxText.listTitleKeratine && <p>{soinSpeciauxText.listTitleKeratine}</p>}
            {soinSpeciauxText.listPointsKeratine && 
                <ul>
                    {soinSpeciauxText.listPointsKeratine.map((listItem, index) => {return <li key={index}>{listItem}</li>})}
                </ul>
            }

            <h4>{soinSpeciauxText.title2}</h4>
            <p>{soinSpeciauxText.text2}</p>

            <h4>{soinSpeciauxText.title3}</h4>
            <p>{soinSpeciauxText.text3}</p>
            {soinSpeciauxText.listPointsTanin && 
                <ul>
                    {soinSpeciauxText.listPointsTanin.map((listItem, index) => {return <li key={index}>{listItem}</li>})}
                </ul>
            }

            <button onClick={handleClick} className="close-button">X</button>
        </section>
    )
}