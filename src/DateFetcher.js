import React, { Component } from 'react'
import Axios from 'axios';

export class DateFetcher extends Component {
    state={
        loading:true,
        todayDate:'Loading'
    }
    async componentDidMount(){
        const publicIp = require('public-ip');
        const localIp=await publicIp.v4();
        console.log("local IP:", localIp);
        const localDateTimeRes= await Axios.get("http://worldtimeapi.org/api/ip/"+localIp)
        const localDateTime=localDateTimeRes.data.datetime
        this.setState({localIPV4:localIp, localDate:localDateTime.split('T')[0],localTime:localDateTime.split('T')[1].slice(0,8)} )
        console.log(localDateTime);
    }
    render() {
        return (
            <div>
                <h1>Date Fetcher</h1>
                <h2>Your Local IP: {this.state.localIPV4}</h2>
                <h2>Date : {this.state.localDate}</h2>
                <h2>Time : {this.state.localTime}</h2>
            </div>
        )
    }
}

export default DateFetcher
