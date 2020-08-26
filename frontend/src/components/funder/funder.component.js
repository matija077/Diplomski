import React from 'react';

import './funder.style.scss';

function Funder({funder}) {
    console.log(funder);

    function timestamp(timestamp) {
        var timestampString = Object.keys(timestamp)
            .filter(
                ([key, value]) => {
                    return timestamp.hasOwnProperty(key);
                }
        );

        var date = new Date();
        date.setFullYear(timestamp.year, timestamp.month, timestamp.day);
        date.setHours(timestamp.hour);
        date.setMinutes(timestamp.minute);
        date.setSeconds(timestamp.second);

        return date.toDateString() + " " + date.getHours() + " " +
            date.getMinutes() + " " + date.getSeconds();

        console.log(Object.entries(timestamp));
        console.log(timestampString);
        console.log("b".localeCompare("a"));
    }

    funder.timestamp = timestamp(funder.timestamp);

    return (
        <div className="funder">
            <div className="data-holder">
                <span className="name">funder ID</span>
                <span className="number">{funder.payerID}</span>
            </div>
            <div className="data-holder">
                <span className="name">funder payment</span>
                <span className="number">{funder.payment}</span>
            </div>
            <div className="data-holder">
                <span className="name">funder name</span>
                <span className="number">{funder.payerName}</span>
            </div>
            <div className="data-holder">
                <span className="name">time of payment</span>
                <span className="number">{funder.timestamp}</span>
            </div>
            <div className="data-holder">
                <span className="name">reward package bought</span>
                <span className="number">{funder.rewardName}</span>
            </div>
            <div className="data-holder">
                <span className="name">transaction ID</span>
                <span className="number">{funder.transactionID}</span>
            </div>
        </div>
    );
}

export default Funder;