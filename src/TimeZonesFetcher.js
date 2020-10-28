import React, {useState} from 'react'

async function apiFetcher(){
    const timezonesList=await fetch("http://worldtimeapi.org/api/timezone");
    
    return timezonesList;
}
export default function TimeZonesFetcher() {
    const [timeZones, settimeZones] = useState()
    settimeZones(apiFetcher())
    return (
        <div>
            <h3>All time zones in Api "http://worldtimeapi.org/api/timezone"</h3>
            {/* {{
                //timeZones.forEach(eachZone => {
                //    <h4>eachZone</h4>
                })
            }} */}
        </div>
    )
}
