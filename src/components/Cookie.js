import React,{ useState, useEffect } from 'react'
import Cookies from 'universal-cookie';
import styled from "styled-components";
const Cookie= () => {
    const [cookieModal, setcookieModal] = useState(true);
    const cookies = new Cookies();
   
function getCookie(){
if(cookies.get('CookieConsent')===undefined){
    setcookieModal(true)
}else{
    setcookieModal(false)
}
}

    useEffect(() => {
        getCookie()
      }); 

    function consent(){
        cookies.set('CookieConsent', new Date(), { path: '/', maxAge: 2592000});
        setcookieModal(false)
    }

    if (!cookieModal) {
        return null;
      } else {
        return (
        <CookieModal>
            <h1>Cookies!</h1>
            <p>This site uses cookies to ensure you have an awesome experience.</p>
            <p>You can read my privacy policy at <a href='/privacy'>here.</a></p>
            <div className="align-right">
            <button onClick={consent}className="btn btn-black btn-lg btn-cookie">Got it!</button>
            </div>
        </CookieModal>
    )
}
}

export default Cookie

const CookieModal = styled.div`
position: absolute;
bottom: 0;
right: 0;
justify-content: center;
align-items: center;
background-color:white;
z-index: 1;
padding: 15px;

.align-right{
text-align:right;
}
`