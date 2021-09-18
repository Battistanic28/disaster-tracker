import axios from "axios";


/** Disaster Event API Class.
 *
 * Static class tying together methods used to get data from the NASA eonet API.
 * Available categories: Wildfire, Severe Storm, Flood.
 */

class EonetAPI {
    
    static async getGlobalEvents(category) {
        const res = await axios.get(`https://eonet.sci.gsfc.nasa.gov/api/v3/events?category=${category}&status=open`);
        return res.data.events;
    }
}

export default EonetAPI;