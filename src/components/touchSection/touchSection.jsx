import pict_1 from "../../assets/images/pict_1.png"
import pict_2 from "../../assets/images/pict_2.png"
import pict_3 from "../../assets/images/pict_3.png"
import pict_4 from "../../assets/images/pict_4.png"
import emoji from "../../assets/images/emoji-happy.png"
import style from "./touchSection.module.css"

export default function TouchSection() {
    return (
        <div className={style.main}>
    <      div className="container">
            <section className={style.touch__section}>
                <div className={style.content}>
                    <h1>Want to get in touch?</h1>
                    <span>We envision a world where cannabis benefits both people and the planet. We rely on the support and participation of all stakeholders. Interested in getting involved? Email us at <span className={style.under}>info@eccocert.org</span> and sign up for our mailing list to stay informed.</span>
                </div>
            </section>
            </div>
        </div>
        );
    }