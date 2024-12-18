import axios from "axios";


/** Disaster Event API Class.
 *
 * Static class tying together methods used to get data from the NASA eonet API.
 * Available categories: Wildfire, Severe Storm, Flood.
 */

class EonetAPI {
    
    static async getColoradoEvents() {
        const bbox = '-109,41,-102,37' // Colorado boundaries
        const res = await axios.get(`https://eonet.gsfc.nasa.gov/api/v3/events/geojson?bbox=${bbox}`);
        console.log(res.data.features)
        return res.data.features;
    }
}

export default EonetAPI;