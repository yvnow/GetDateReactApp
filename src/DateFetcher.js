import React, { Component } from 'react'

export class DateFetcher extends Component {
    state={
        loading:true,
        todayDate:'Loading'
    }
    async componentDidMount(){
        const dateURL="http://worldclockapi.com/api/json/est/now";
        const responseDate=await fetch(dateURL);
        const responseJSON=await responseDate.json();
        this.setState({todayDate:responseJSON.currentDateTime.split('T')[0]})
        console.log(responseJSON.currentDateTime)
    }
    render() {
        return (
            <div>
                <h1>Date Fetcher</h1>
                <h2>Today's Date is : {this.state.todayDate}</h2>
            </div>
        )
    }
}

export default DateFetcher
