import React,{ useState } from 'react';
import Box from './Box';
import './Menu.css';

export default function Menu() {

    const [colorOfIcon,setColorOfIcon] = useState({});
    const [iconName,setIconName] = useState("fa-solid fa-chevron-down");
    const [box,setBox] = useState("");
    const [hight,setHight] = useState({});


    const openBox = () => {
        if(iconName==="fa-solid fa-chevron-down"){
            setIconName("fa-solid fa-chevron-up");
            setColorOfIcon({color: '#4267B2'});
            setBox(<Box/>);
            setHight({height: '95vh'});
        }
        else{
            setIconName("fa-solid fa-chevron-down");
            setColorOfIcon({});
            setBox("");
            setHight({});
        }
    }

  return (
    <>
        <div className="menu-box" style={hight}>
            <ul>
                <li onClick={openBox}><a href="#">Category</a><i style={colorOfIcon} class={iconName}></i></li>
                {box}
                <li><a href="/">Deals</a></li>
                <li><a href="/">What's New</a></li>
                <li><a href="/">Delivery</a></li>
            </ul>
        </div>
    </>
  )
}
