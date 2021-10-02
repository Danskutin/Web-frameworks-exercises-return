import React from 'react';
import  './App.css';
import Header from './components/Header';
import NewsNotification from './components/NewsNotification';
import Ads from './components/Ads';
import MainSection from './components/MainSection';
import SideSection from './components/SideSection';
import Background from './components/Background';
import SideSectionTitle from './components/SideSectionTitle';


function App() {

const newsNotificationData = [
  {
    topic: 'PÄIVÄN TIMANTTI',
    body: 'Tutkija kertoo: Näin sota näkyy meissä edelleen'
  },
  {
    topic: 'PÄIVÄN TIMANTTI',
    body: 'Harriet Rabb tajusi avioliiton taloudelliset hyödylliset hyödyt ja kosi - Näin hän säästäisi aviopuolisona 19 200 euroa'
  }
]

const ads = [
  {
    topic: 'MAINOS',
    body: 'Faktoille on nyt suurempi tarve kuin koskaan - tutustu Hesariin 2 viikkoa maksutta!'
  }
]

const sideSectionData = [
  {
    number: '1',
    topic: 'Rikosepäilyt',
    body: 'EIT-huijaus: Kuolleeksi väitetyn irakilaismiehen tytär valehteliperheen taustoista jo turvapaikkahakemuksessa'
  },
  {
    number: '2',
    topic: 'HS Vantaa',
    body: 'Vantaalle nousi vankilan näköinen päiväkoti, jota pilkataan nyt surutta verkossa'
  },
  {
    number: '3',
    topic: 'Päivittyvä seuranta',
    body: 'STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan - Ministeriö haluaa varmistaa valmisteiden riittävyyden'
  },
  {
    number: '4',
    topic: 'Nyt.fi',
    body: 'Harry Styles puki ylleen suomalaisen suunnitelijan neuleen, nyt tätä "mummon tilkkutäkkiä" neulovat kymmenet tuhannet ympäri maailman - Soitimme vaatesuunnittelijalle'
  },
  {
    number: '5',
    topic: 'Rikosepäilyt',
    body: 'Atte Jääskeläinen sai syytteet liikenneturvallisuuden vaarantamisesta ja vammantuottamuksesta - "Olen myöntänyt syyllisyyteni"'
  },
  {
    number: '6',
    topic: 'Helsinki',
    body: 'Työryhmän ehdotus julki: Jättimäisestä hiilivoimalasta halutaan täysin uudelainen tapahtumapaikka kaupungin asukkaille'
  }
]

  return (
    <div>
      <Background />
      <Header />
      {
        newsNotificationData.map(element => <NewsNotification topic={ element.topic } body={ element.body }/>)
      }
      {
        ads.map(element => <Ads topic={ element.topic } body={ element.body }/>)
      }
      
      <MainSection />
      <SideSectionTitle/>
      {
        sideSectionData.map(element => <SideSection number={element.number} topic={ element.topic } body={ element.body }/>)
      }
    </div>
  );
}
export default App;