import React, { Component } from 'react'
import Axios from 'axios';

export class DateFetcher extends Component {
    state={
        loading:true,
        localIPV4:'Loading',
        localDate:'Loading',
        localTime:'Loading',
    }
    async componentDidMount(){
        const publicIp = require('public-ip');
        const localIp=await publicIp.v4();
        console.log("local IP:", localIp);
        const localDateTimeRes= await Axios.get("http://worldtimeapi.org/api/ip/"+localIp)
        const localDateTime=localDateTimeRes.data.datetime
        this.setState({localIPV4:localIp, localDate:localDateTime.split('T')[0],localTime:localDateTime.split('T')[1].slice(0,8)} )
        console.log(localDateTime);
        const dummyData=await Axios.get("http://dummy.restapiexample.com/api/v1/employee/1")
        // const responseData1Json=responseData.json()
        this.setState({dummyData:dummyData})
        
        console.log(typeof(dummyData), dummyData.data);
        console.log(JSON.stringify(dummyData));
        this.setState({dummyJson:JSON.stringify(dummyData)})
    }
    render() {
        return (
            <div>
                <h1>Date Fetcher</h1>
                <h2>Your Local IP: {this.state.localIPV4}</h2>
                <h2>Date : {this.state.localDate}</h2>
                <h2>Time : {this.state.localTime}</h2>

                <h4>Data : {this.state.dummyJson}</h4>
            </div>
        )
    }
}

export default DateFetcher
