import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link, useLocation } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";



export const  Navbar= () => {
    const [active,setActive] = useState(false);
    const [open,setOpen] = useState(false);
    const { loginWithRedirect } = useAuth0();

    const {pathname} = useLocation();

    const isActive = ()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    useEffect(() => {
        window.addEventListener("scroll",isActive);

        return ()=>{
            window.addEventListener("remove",isActive);
        }
    }, [])

    const currentUser ={
        id:1,
        username:"Param Jagani",
        isSeller: true,
    }

  return (
    <div className={(active || pathname!=="/") ? "navbar active": "navbar"}>
        <div className="container">
            <div className="logo">
                <Link to="/" className='link'>
                    <span className='text'>SkillBee</span>
                </Link>
                <span className='dot'>.</span>
            </div>
            <div className="links">
                <span>SkillBee Pro</span>
                <span>Explore</span>
                <span>English</span>
                {!currentUser?.isSeller && <span>Become a seller</span>}
                
                {currentUser && <button onClick={() => loginWithRedirect()}>Log In</button>}
                {!currentUser &&(
                    <div className="user" onClick={()=>setOpen(!open)}>
                        <img src="./src/user.png" alt="" />
                        <span>{currentUser?.username}</span>
                        {open && <div className="options">
                            {currentUser?.isSeller &&(
                                <>
                                    <Link to="/mygigs" className='link'>Gig</Link>
                                    <Link to="/add" className='link'>New Gigs</Link>
                                </>
                            )}
                            <Link to="/order" className='link'>Orders</Link>
                            <Link to="/messages" className='link'>Messages</Link>
                            <Link className='link'>
                            <button className='logout' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out
                            </button>
                            </Link>
                        </div>}
                    </div>
                )}
            </div>
        </div>
        {(active || pathname!=="/") && (
        <>
            <hr />
            <div className="menu">
                <Link className='link' to="/">
                Graphics & Design
                </Link>
                <Link className='link' to="/">
                Programming & Tech
                </Link>
                <Link className='link' to="/">
                Digital Marketing
                </Link>
                <Link className='link' to="/">
                Video & Animation
                </Link>
                <Link className='link' to="/">
                Writing & Translation
                </Link>
                <Link className='link' to="/">
                Music & Audio
                </Link>
                <Link className='link' to="/">
                Buisness
                </Link>
                <Link className='link' to="/">
                Photography
                </Link>
                <Link className='link' to="/">
                AI Services
                </Link>
                <Link className='link' to="/">
                Data
                </Link>
            </div>
        </>
        )}
    </div>
  );
}

export default Navbar;
