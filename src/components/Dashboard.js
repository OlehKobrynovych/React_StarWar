import React from "react";
import darck from "../img/darck.jpg";
import light from "../img/light.jpg";
import { useNavigate } from "react-router-dom";




const Dashboard = () => {
    console.log('Dashboard');
    const navigate = useNavigate();

    const handlerChang = (el) => {
        navigate(`/${el}`)
    }

    return (
        <div className="dashboard" >
            {/* <div className="dashboard__title">Star War</div> */}
            <div className="dashboard__title">Star War</div>
                <p className="dashboard__ask" >Who do you want to see???</p>
            <div className='dashboard__btn-wrap' >
                <button className="dashboard__btn" onClick={()=>handlerChang('peoples')} >Peoples</button>
                <button className='dashboard__btn' onClick={()=>handlerChang('planets')} >Planets</button>
            </div>
            <img className='dashboard__theme-btn' src={darck} />
            <img className='dashboard__theme-btn' src={light} />
        </div>
    )
}

export default React.memo(Dashboard);