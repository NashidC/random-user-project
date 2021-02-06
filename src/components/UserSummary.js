import React, { useState } from "react";

export class UserSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMore: false };
  }

  render() {
    function showAll() {
      const elementdiv = document.getElementById('showMore');
      if (elementdiv.classList.contains('show-more')) {
        elementdiv.classList.remove('show-more');
      } else {
        elementdiv.classList.add('show-more');
      }
    }
    let data = this.props.userData;
    if (data === null) {
      return (
        <div>
          <p>Sorry, there isn't any user data right now</p>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <h4>{data[0].name?.title} <span>{data[0].name?.first} {data[0].name?.last}</span></h4>
            <p>{data[0].email}</p>
            <div className="show-more" id="showMore">
              <span><img src={data[0].picture?.large} /></span>
              <address>
                <span><h4>State:</h4> {data[0].location?.state}</span>
                <span><h4>City:</h4>{data[0].location?.city}</span>
                <span><h4>Street:</h4>{data[0].location?.street?.name}-{data[0].location?.street?.number}</span>
              </address>
            </div>

            <button onClick={showAll}>Show More</button></div>
        </div>);
    }
  }
}