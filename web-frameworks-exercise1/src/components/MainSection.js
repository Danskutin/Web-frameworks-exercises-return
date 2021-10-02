import React from 'react'
import styles from './MainSection.module.css'

export default function MainSection() {
    return (
        <div className= { styles.background }>
            <div className= { styles.container }>
                <div>
                    <span className= { styles.header }>Koronavirus</span> 
                </div>
                <img className= { styles.img } src="https://i.media.fi/incoming/v4wers/7149114.jpg/alternates/LANDSCAPE_960/7149114.jpg" alt="Picture of Ministry of Social Affairs and Health"/>
                <div className= { styles.hsLive }>HS seuraa</div>
                <div className= { styles.hsLiveShape }></div>
                <div className= { styles.newsTitle }>
                    <span className= { styles.newsType }>Päivittyvä seuranta</span> | STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan
                </div>
                <div className= { styles.newsInfo }> Koronaviruksen vaikutukset Suomessa</div>
                <div>
                    <div className= { styles.statsText1 }> Tartunnat yhteensä</div>
                    <div className= { styles.statsNums1 }> 7 776 </div>
                </div>
                <div>
                    <div className= { styles.statsText2 }> Tuoreimmat 14 päivää </div>
                    <div className= { styles.statsNums2 }> 293 </div>
                </div>
                <div>
                    <div className= { styles.statsText3 }> Edeltävät 14 päivää </div>
                    <div className= { styles.statsNums3 }> 132 </div>
                </div>
                <div className= { styles.divider1 }>  </div>
                <div>
                    <div className= { styles.statsText4 }> Kuolleet</div>
                    <div className= { styles.statsNums4 }> 334 </div>
                </div>
                <div>
                    <div className= { styles.statsNums5 }> 5 </div>
                </div>
                <div>
                    <div className= { styles.statsNums6 }> 1 </div>
                </div>
                <div className= { styles.divider2 }>  </div>
                <div className= { styles.triangle1 }>  </div>
                <div className= { styles.triangle2 }>  </div>
            </div>
        </div>
    )
}
