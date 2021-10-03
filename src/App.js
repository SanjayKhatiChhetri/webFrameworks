import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import NewsNotification from "./components/NewsNotification";
import SideSection from "./components/SideSection";

// 964PX

const WIDTH = "1200px";
const SPACE_LEFT = "180px";

function App() {
  return (
    <div
      style={{
        display: "flex",
        // alignItems: "center",
        flexDirection: "column",
        background: "#E9EAED",
      }}
    >
      <Header width={WIDTH} space_left={SPACE_LEFT} />
      <NewsNotification width={WIDTH} space_left={SPACE_LEFT} />
      <NewsNotification width={WIDTH} space_left={SPACE_LEFT} />
      <NewsNotification width={WIDTH} space_left={SPACE_LEFT} />
      <div
        style={{
          display: "flex",
          width: WIDTH,
          marginLeft: SPACE_LEFT,
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <div style={{ width: "63%", display: "flex", flexDirection: "column" }}>
          <MainSection
            title="HS-gallup"
            description="Suurin osa suomalaisista ei hyväksy koronarokotteesta kieltäytymistä periaatteen takia"
            image="https://hs.mediadelivery.fi/img/658/3ade7a6f7d3dca5e8b793cfd9c0429e7.jpg.webp"
            meta="Kotimaa 18:37"
          />
          <MainSection
            title="Tietovuodot"
            description="11,9 miljoonan asia­­kirjan tieto­vuoto: Vero­paratiisi­kytköksiä lukuisilla julkisuuden henkilöillä – Yle: Vuodon piirissä tietoja yli 200 suomalaisesta"
            image="https://hs.mediadelivery.fi/img/978/174929022b7706f7d0c7b5089b3c3040.jpg.webp"
            meta="Talous 20:36"
          />{" "}
          <MainSection
            title="Italia"
            description="Kahdeksan kuoli pienkoneen törmättyä rakennuksen seinään Milanossa, konetta ohjasi romanialainen miljardööri"
            image="https://hs.mediadelivery.fi/img/978/0e3fa34987d195c5e22985006619829e.jpg.webp"
            meta="Ulkomaat 22:26"
          />{" "}
          <MainSection
            title="Taiwan"
            description="Ennätysmäärä Kiinan sotilas­koneita on lentänyt viime päivinä Taiwanin lähettyvillä – HS kysyi tutkijalta, mihin Kiina pyrkii"
            image="https://hs.mediadelivery.fi/img/978/99f9fc42159969f728196f53adce694e.jpg.webp"
            meta="Ulkomaat 22:26"
          />{" "}
          <MainSection
            title="HS-gallup"
            description="Suurin osa suomalaisista ei hyväksy koronarokotteesta kieltäytymistä periaatteen takia"
            image="https://hs.mediadelivery.fi/img/658/3ade7a6f7d3dca5e8b793cfd9c0429e7.jpg.webp"
            meta="Kotimaa 18:37"
          />
        </div>
        <div style={{ width: "35%" }}>
          <SideSection />
          {/* <SideSection />
          <SideSection />
          <SideSection /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
