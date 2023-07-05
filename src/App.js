import React, { useState } from "react";
import './App.css';
import Box from "./Box";
import { brandItem, fourthItem, itemBox, offItem, secondItemBox, thirdItemBox } from "./BoxData";
import Menu from "./Menu";



function App() {

  const [color, setColor] = useState({ color: 'grey' });
  const [check, setCheck] = useState(false);
  const [backStyle, setBackStyle] = useState({});
  const [backStyle1, setBackStyle1] = useState({});
  const [backStyle2, setBackStyle2] = useState({});
  const [backStyle3, setBackStyle3] = useState({});
  const [backStyle4, setBackStyle4] = useState({});
  const [backStyle5, setBackStyle5] = useState({});
  const [backStyle6, setBackStyle6] = useState({});
  const [backStyle7, setBackStyle7] = useState({});
  const [border, setBorder] = useState({});
  const [iconName, setIconName] = useState("fa-solid fa-chevron-down");
  const [colorOfIcon, setColorOfIcon] = useState({});
  const [box, setBox] = useState("");
  const [iconName2,setIconName2] = useState("fa-solid fa-chevron-down icon");
  const [slicing,setSlicing] = useState(3);
  const [hightOfItem2,setHightOfItem2] = useState({});
  const [hightOfItem2box,setHightOfItem2box] = useState({});
  const [menuBar,setMenuBar] = useState("");
  const [iconName3,setIconName3] = useState("fa-solid fa-bars");


  // ************************************************************************

    const openMenuBar = () => {
      if(iconName3 === "fa-solid fa-bars"){
        setMenuBar(<Menu/>);
        setIconName3("fa-solid fa-xmark");
      }
      else{
        setMenuBar("");
        setIconName3("fa-solid fa-bars");
      }
    } 

  // ************************************************************************

  const showAll = () => {
    if(iconName2 === "fa-solid fa-chevron-down icon"){
      setIconName2("fa-solid fa-chevron-up icon");
      setSlicing(6);
      setHightOfItem2({height:'1800px'});
      setHightOfItem2box({height:'1700px'});
    }
    else{
      setIconName2("fa-solid fa-chevron-down icon");
      setSlicing(3);
      setHightOfItem2({});
      setHightOfItem2box({});
    }
  }

  // ***********************************************************************

  const openBox = () => {
    if (iconName === "fa-solid fa-chevron-down") {
      setBorder({ borderBottom: '3px solid #4267B2', paddingBottom: '10px' });
      setColorOfIcon({ color: '#4267B2' });
      setIconName("fa-solid fa-chevron-up");
      setBox(<Box />);
    }
    else {
      setBorder({});
      setColorOfIcon({});
      setIconName("fa-solid fa-chevron-down");
      setBox("");
    }
  }

  // ***********************************************************************

  const changeColor = () => {
    if (check === false) {
      setColor({ color: 'red' });
      setCheck(true);
    }
    else {
      setColor({ color: 'grey' });
      setCheck(false);
    }
  }

  // ********************************************************************

  const changeStyle = () => {
    setBackStyle({ color: "#fff", backgroundColor: "#003D29" }); setBackStyle1({}); setBackStyle2({}); setBackStyle3({}); setBackStyle4({}); setBackStyle5({}); setBackStyle6({}); setBackStyle7({});
  }

  const changeStyle1 = () => {
    setBackStyle1({ color: "#fff", backgroundColor: "#003D29" }); setBackStyle({}); setBackStyle2({}); setBackStyle3({}); setBackStyle4({}); setBackStyle5({}); setBackStyle6({}); setBackStyle7({});
  }

  const changeStyle2 = () => {
    setBackStyle2({ color: "#fff", backgroundColor: "#003D29" }); setBackStyle1({}); setBackStyle({}); setBackStyle3({}); setBackStyle4({}); setBackStyle5({}); setBackStyle6({}); setBackStyle7({});
  }

  const changeStyle3 = () => {
    setBackStyle3({ color: "#fff", backgroundColor: "#003D29" }); setBackStyle1({}); setBackStyle2({}); setBackStyle({}); setBackStyle4({}); setBackStyle5({}); setBackStyle6({}); setBackStyle7({});
  }

  const changeStyle4 = () => {
    setBackStyle4({ color: "#fff", backgroundColor: "#003D29" }); setBackStyle1({}); setBackStyle2({}); setBackStyle3({}); setBackStyle({}); setBackStyle5({}); setBackStyle6({}); setBackStyle7({});
  }

  const changeStyle5 = () => {
    setBackStyle5({ color: "#fff", backgroundColor: "#003D29" }); setBackStyle1({}); setBackStyle2({}); setBackStyle3({}); setBackStyle4({}); setBackStyle({}); setBackStyle6({}); setBackStyle7({});
  }

  const changeStyle6 = () => {
    setBackStyle6({ color: "#fff", backgroundColor: "#003D29" }); setBackStyle1({}); setBackStyle2({}); setBackStyle3({}); setBackStyle4({}); setBackStyle5({}); setBackStyle({}); setBackStyle7({});
  }

  const changeStyle7 = () => {
    setBackStyle7({ color: "#fff", backgroundColor: "#003D29" }); setBackStyle1({}); setBackStyle2({}); setBackStyle3({}); setBackStyle4({}); setBackStyle5({}); setBackStyle6({}); setBackStyle({});
  }

  // ********************************************************************

  return (
    <>
      <div className="full-body">
        <div className="small-navbar">
          <div className="number">
            <i class="fa-solid fa-phone"></i>
            <p>+91 6307001206</p>
          </div>
          <div className="description">
            <a href="/">Get 50% Off on Selected Items</a>
            <p>|</p>
            <a href="/">Shop Now</a>
          </div>
          <div className="loc-lang">
            <select className='cursor' name="language">
              <option value="Eng">Eng</option>
              <option value="hindi">Bangla</option>
              <option value="arabic">Arabic</option>
              <option value="urdu">Urdu</option>
            </select>
            <select className='cursor' name="location">
              <option value="location">location</option>
              <option value="dhaka">Dhaka</option>
              <option value="usa">Usa</option>
              <option value="india">India</option>
            </select>
          </div>
        </div>

        {/* ************************************************************************** */}

        <div className="main-navbar">
          <div className="logo">
            <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg" alt="" />
          </div>
          <ul className="list">
            <li onClick={openBox} style={border}><a href="#">Category</a><i style={colorOfIcon} class={iconName}></i></li>
            <li><a href="/">Deals</a></li>
            <li><a href="/">What's New</a></li>
            <li><a href="/">Delivery</a></li>
          </ul>
          <div className="search">
            <input type="text" placeholder="Search Product" />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <ul className="option">
            <li><i class="fa-regular fa-user"></i><a href="/">Account</a></li>
            <li><i class="fa-solid fa-cart-shopping"></i><a href="/">Cart</a></li>
          </ul>
          <div className="menu">
            <i class={iconName3} onClick={openMenuBar}></i>
          </div>
        </div>

        {/* ********************************************************************************  */}

        {box}
        {menuBar}

        {/* ********************************************************************************  */}

        <div className="body-image">
          <div className="all-texts">
            <h1>Shopping And Department Store.</h1>
            <p>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
            <button>Learn More</button>
          </div>
          <div className="images">
            <img className="chips" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e7037f3b07ebcf202d_snaks-min.png" alt="" />
            <img className="suitcase" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e75b939fd1159c029e_tour-min.png" alt="" />
            <img className="electronics" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9c0607f75e4aad54b94a0_ele.png" alt="" />
            <img className="bags" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e660afc23a10a53523_other-min.png" alt="" />
          </div>
        </div><hr />

        {/* ******************************************************************************** */}

        <div className="items">
          <h1>Shop Our Top Categories</h1>
          <div className="item-box">
            {itemBox.map((element) => {
              return (
                <div className="item" style={{ backgroundImage: `url(${element.imageUrl})` }}>
                  <h3>{element.name}</h3>
                </div>
              )
            })}
          </div>
        </div>

        {/* ******************************************************************************************* */}

        <div className="items2" style={hightOfItem2}>
          <h1>Todays Best Deals For You!</h1>
          <div className="second-item-box" style={hightOfItem2box}>
            {secondItemBox.slice(0,slicing).map((element) => {
              return (
                <div className="second-item">
                  <div className="second-image" style={{ backgroundImage: `url(${element.imageUrl})` }}>
                    <i class="fa-solid fa-heart" onClick={changeColor} style={color}></i>
                  </div>
                  <div className="second-details">
                    <h2>{element.name}</h2>
                    <h2 className="rate">{element.rate}</h2>
                    <p>{element.description}</p>
                    <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" alt="" /><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" alt="" /><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" alt="" /><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" alt="" /><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" alt="" />
                    <p style={{ display: 'inline-block', marginLeft: '2vw' }}>(121)</p><br /><br />
                    <button>Add to Cart</button>
                  </div>
                </div>
              )
            })}
          </div>
          <i class={iconName2} onClick={showAll}></i>
        </div>

        {/* ******************************************************************************************* */}

        <div className="brand">
          <h1>Choose By Brand</h1>
          <div className="brand-item-box">
            {brandItem.map((element) => {
              return (
                <div className="brand-item">
                  <div className="brand-logo" style={{ backgroundImage: `url(${element.imageUrl})` }}></div>
                  <div className="brand-details">
                    <h2>{element.name}</h2>
                    <p>Delivery with in 24 hours</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ******************************************************************************************* */}

        <div className="get-off">
          <h1>Get Up To 70% Off</h1>
          <div className="off-item-box">
            {offItem.map((element) => {
              return (
                <div className="off-item">
                  <div className="off-details">
                    <h2>Save</h2>
                    <h2>{element.rate}</h2>
                    <p>Explore Our Furniture & Home Furnishing Range</p>
                  </div>
                  <div className="off-image" style={{ backgroundImage: `url(${element.imageUrl})` }}></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* **************************************************************************************** */}

        {/* <div className="items2">
          <h1>Todays Best Deals For You!</h1>
          <div className="second-item-box" style={hightOfItem2box}>
            {thirdItemBox.map((element) => {
              return (
                <div className="second-item">
                  <div className="second-image" style={{ backgroundImage: `url(${element.imageUrl})` }}>
                    <i class="fa-solid fa-heart" onClick={changeColor} style={color}></i>
                  </div>
                  <div className="second-details">
                    <h2>{element.name}</h2>
                    <h2 className="rate">{element.rate}</h2>
                    <p>{element.description}</p>
                    <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" alt="" /><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" alt="" /><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" alt="" /><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" alt="" /><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" alt="" />
                    <p style={{ display: 'inline-block', marginLeft: '2vw' }}>(121)</p><br /><br />
                    <button>Add to Cart</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div><br /><br /> */}

        {/* **************************************************************************************** */}

        <div className="second-body-image">
          <div className="off-box">
            <h1>Get 5% Cash Back On $200</h1>
            <p>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
            <button>Learn More</button>
          </div>
        </div>

        {/* **************************************************************************************** */}

        <div className="best-deal">
          <h1>Todays Best Deals For You!</h1>
          <button onClick={changeStyle} style={backStyle}>Gadgets</button>
          <button onClick={changeStyle1} style={backStyle1}>Fashion</button>
          <button onClick={changeStyle2} style={backStyle2}>Toys</button>
          <button onClick={changeStyle3} style={backStyle3}>Education</button>
          <button onClick={changeStyle4} style={backStyle4}>Beauty</button>
          <button onClick={changeStyle5} style={backStyle5}>Fitness</button>
          <button onClick={changeStyle6} style={backStyle6}>Furniture</button>
          <button onClick={changeStyle7} style={backStyle7}>Sneakers</button>
          <div className="fourth-item-box">
            {fourthItem.map((element) => {
              return (
                <div className="fourth-item">
                  <div className="fourth-image" style={{ backgroundImage: `url(${element.imageUrl})` }}>
                    <i class="fa-solid fa-heart" onClick={changeColor} style={color}></i>
                  </div>
                  <div className="fourth-details">
                    <div className="name-rate">
                      <h2>{element.name}</h2>
                      <h2 className="rate">{element.rate}</h2>
                    </div>
                    <p>{element.description}</p>
                    <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" alt="" /><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" alt="" /><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" alt="" /><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" alt="" /><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" alt="" />
                    <p style={{ display: 'inline-block', marginLeft: '2vw' }}>(121)</p><br /><br />
                    <button>Add to Cart</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div><br /><br /><br /><hr />

        {/* ********************************************************************************************************************** */}

        <div className="footer">
          <div className="logo-details">
            <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg" alt="" />
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            <h3>Accepted Payments</h3>
            <div className="all-cards">
              <div className="card" style={{ backgroundImage: 'url("https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8816711ebecac46d8_stripe.png")' }}></div>
              <div className="card" style={{ backgroundImage: 'url("https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce82d440b7ab84a993f_visa.png")' }}></div>
              <div className="card" style={{ backgroundImage: 'url("https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8f032504012a5896b_Mastercard.png")' }}></div>
              <div className="card" style={{ backgroundImage: 'url("https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e6ce846b7ff_Amazon.png")' }}></div>
              <div className="card" style={{ backgroundImage: 'url("https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1f054e419e42aca4a9a2_Klarna.png")' }}></div>
              <div className="card" style={{ backgroundImage: 'url("https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce7c4510cf9a55828a0_PayPal.png")' }}></div>
              <div className="card" style={{ backgroundImage: 'url("https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4707380264b25e680_ApplePay.png")' }}></div>
              <div className="card" style={{ backgroundImage: 'url("https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1f55dc68c5ee83d0cbf8_GooglePay.png")' }}></div>
            </div>
          </div>
          <div className="options">
            <ul className="department">
              <h3>Department</h3>
              <li><a href="/">Fashion</a></li>
              <li><a href="/">Education Product</a></li>
              <li><a href="/">Frozen Food</a></li>
              <li><a href="/">Beverages</a></li>
              <li><a href="/">Organic Grocery</a></li>
              <li><a href="/">Office Supplies</a></li>
              <li><a href="/">Beauty Products</a></li>
              <li><a href="/">Books</a></li>
              <li><a href="/">Electronics & Gadget</a></li>
              <li><a href="/">Travel Accessories</a></li>
              <li><a href="/">Fitness</a></li>
              <li><a href="/">Sneakers</a></li>
              <li><a href="/">Toys</a></li>
              <li><a href="/">Furniture</a></li>
            </ul>
            <ul className="about-us">
              <h3>About Us</h3>
              <li><a href="/">About Shopcart</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">News & Blog</a></li>
              <li><a href="/">Help</a></li>
              <li><a href="/">Press Center</a></li>
              <li><a href="/">Shop By Location</a></li>
              <li><a href="/">Shopcart Brands</a></li>
              <li><a href="/">Affiliate & Partners</a></li>
              <li><a href="/">Ideas & Guides</a></li>
            </ul>
            <ul className="services">
              <h3>Services</h3>
              <li><a href="/">Gift Card</a></li>
              <li><a href="/">Mobile App</a></li>
              <li><a href="/">Shipping & Delivery</a></li>
              <li><a href="/">Order Pickup</a></li>
              <li><a href="/">Account Signup</a></li>
            </ul>
            <ul className="help">
              <h3>Help</h3>
              <li><a href="/">Shopcart Help</a></li>
              <li><a href="/">Returns</a></li>
              <li><a href="/">Track Orders</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Feedback</a></li>
              <li><a href="/">Security & Fraud</a></li>
            </ul>
          </div>
        </div><br /><br /><br /><hr />

        {/* ************************************************************************************ */}

        <div className="footer2">
          <ul className="optionsss">
            <li><i class="fa-solid fa-briefcase"></i><a href="/">Become Seller</a></li>
            <li><i class="fa-solid fa-gift"></i><a href="/">Gift Cards</a></li>
            <li><i class="fa-regular fa-circle-question"></i><a href="/">Help Center</a></li>
          </ul>
          <div className="terms">
            <a href="/">Terms of Service</a>
            <a href="/">Privacy & Policy</a>
          </div>
          <div className="copyright">
            <p>All Right reserved by Musemind</p>
            <p>|</p>
            <p>2023</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
