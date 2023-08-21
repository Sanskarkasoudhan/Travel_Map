import {useState} from "react";
//import Map from 'react-map-gl';
import ReactMapGL, {Marker,Popup}  from "react-map-gl";
import {Room} from "@material-ui/icons";

function App() {
  const [viewport, setViewport] = useState({
    width:"400",
    height:"400",
    latitude: 46,
    longitude: 17,
    zoom: 4,
  });
  return(
    <div className="App">
      <ReactMapGL
      {...viewport}
      mapboxApiAccessToken = "pk.eyJ1Ijoic2Fuc2thcmd1cHRhMDEyMyIsImEiOiJjbGxjbTFmaGswMnVvM2VuMXlqM2xnbzhwIn0.fmDGwzA_OoZxclhgFNZeJA"
      onViewportChange={(nextViewport) => setViewport(viewport)}
      mapStyle = "mapbox://styles/sanskargupta0123/cllcnb8mi00uo01ph065j8p26">


        <Marker
        latitude={48.8580930}
        longitude={2.294694}
        offsetLeft={-20}
        offsetTop={-10 }
        >
          
        <Room  style = {{fontSize:viewport.zoom * 7,color:"slateblue"}}/>
       </Marker>
       <Popup
                latitude={48.8580930}
                longitude={2.294694}
                closeButton={true}
                closeOnClick={false}
                
                anchor="left">
                  <div className="card">
                    <label>place</label>
                    <label>review</label>
                    <label>rating</label>
                    <label>place</label>
                  </div>
              </Popup>
    </ReactMapGL>
  </div>
        );
      }
    export default App;
