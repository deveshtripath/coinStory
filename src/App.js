import './App.css';
import Part from "./Part"
import Feature from "./Feature"
import Carousal from "./Carousal"
import CarousalAdd from "./CarousalAdd"

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <div className="app__body">
          <div className="app__container">
            <p> Download the Coinstorey app to start your cryptocurrency journey now </p>
          </div>
          <div>
              <h3>Coinstorey App in your hand is something which will make u feel alive in this nested crypto world. You have to analyse, trade , play , earn and smile</h3>
          </div>
          <img className="app_image" src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-travel-awards-globestamp-7.png" alt=""/>
          <div className="app_block" />
        </div>
        <div className="app__left">
          <img src="https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png" alt=""/>
        </div>
      </div>
      {/*  */}

        <div className="app_series">
          <Part name="step 1" context="Coinstorey App in your hand is something which will make u feel alive in this nested crypto world." />
          <Part name="step 2" context="Tradathon is a feature where we can create rooms with our friends or we can join some public rooms and make our portfolios with virtual money provided by us and can earn by getting top ranks."   />
          <Part name="step 3" context="Share the app & GEt commissions everytime they play contest. Also, create a big privet content & get extra commissions for every player."   />
          <Part name="step 4" context="There is a lot of fun in crypto. We are taking you to one of the most interesting sector of crypto market. INVEST VIRTUALLY, EARN IN REAL."  />
        </div>

        <div>

        <Feature/>
        </div>
        <div style={{ margin:"20px" }}>
        <Carousal  />
        <div style={{display:"flex",justifyContent:"center", alignItem: "center" }}>
        <button style={{width:"200px",padding:"10px" ,backgroundColor: "blue" }}>See All</button></div>
        </div>

        <div className="app__posts">
            <CarousalAdd/>
        </div>
    </div>
  );
}

export default App;
