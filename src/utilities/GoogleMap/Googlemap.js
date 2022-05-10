import { GoogleMap,withGoogleMap, withScriptjs } from "react-google-maps"

function Googlemap() {
    const Map = () =>{
            return(
                <GoogleMap
                defaultZoom={10}
                defaultCenter={{ lat: 11.925940, lng: 8.544067 }}
                
            />
        );
    }

const WrappedMap =  withScriptjs(withGoogleMap(Map))

    return (
        <div style={{width:"100%",height:"100%"}}>
            <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement= {<div style={{ height: `100%` }} />}
                containerElement= {<div style={{ height: `400px` }} />}
                mapElement= {<div style={{ height: `100%` }} />}
            />
            
        </div>
    );
}

export default Googlemap;