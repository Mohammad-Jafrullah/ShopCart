import React from 'react';
import './Box.css';

export default function Box() {
  return (
    <>
        <div className="box position">
            <h3>Popular Categories</h3>
            <hr />
            <div className="box-items">
                <div className="item">
                    <div className="image" style={{backgroundImage:'url("https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052dc39b839500c1f8a_Rectangle%201436.png")'}}></div>
                    <div className="title">
                        <h3>Furniture</h3>
                        <p>240  Item  Available</p>
                    </div>
                </div>
                <div className="item">
                    <div className="image" style={{backgroundImage:'url("https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec605386e48004f02ee6a8_Rectangle%201436-4.png")'}}></div>
                    <div className="title">
                        <h3>Hand Bag</h3>
                        <p>240  Item  Available</p>
                    </div>
                </div>
                <div className="item">
                    <div className="image" style={{backgroundImage:'url("https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052f0ed215b864af96e_Rectangle%201436-1.png")'}}></div>
                    <div className="title">
                        <h3>Shoe</h3>
                        <p>240  Item  Available</p>
                    </div>
                </div>
                <div className="item">
                    <div className="image" style={{backgroundImage:'url("https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6053e5b15cfafd550cbb_Rectangle%201436-3.png")'}}></div>
                    <div className="title">
                        <h3>Headphone</h3>
                        <p>240  Item  Available</p>
                    </div>
                </div>
                <div className="item">
                    <div className="image" style={{backgroundImage:'url("https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052f3741a4f87af0f6d_Rectangle%201436-2.png")'}}></div>
                    <div className="title">
                        <h3>Laptop</h3>
                        <p>240  Item  Available</p>
                    </div>
                </div>
                <div className="item">
                    <div className="image" style={{backgroundImage:'url("https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052f3741a4f87af0f6d_Rectangle%201436-2.png")'}}></div>
                    <div className="title">
                        <h3>Book</h3>
                        <p>240  Item  Available</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
