import stylesHp from '../../styles/Homepage/Homepage.module.css'
import {TalkResults} from "../../types/Events/talk-type";
import Link from 'next/link'
import Image from 'next/image'

type Props = {
    allTalks: TalkResults;
}
const TalkTeaserComponent = ({allTalks}:Props) => {
    const talks = allTalks.results;
    
    return(
        <div>
            {talks.map((talk: any) => (
                <div key={talk.id} className={stylesHp.boxOuter}>
                    <div className={stylesHp.box}>
                        <Image 
                            alt=''
                            src={talk.image.results[0].fileUrl}
                            width='500'
                            height= '500'
                            className={stylesHp.boxImage}
                        />
                        <h2>{talk.Title}</h2>
                        <p className={stylesHp.boxText}>
                            {talk.Description}
                        </p>
                        <p>
                            <button className={stylesHp.button}>
                            <Link href={`/talks/${encodeURIComponent(talk.id)}`}>Read more</Link>
                            </button>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TalkTeaserComponent