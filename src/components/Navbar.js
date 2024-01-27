import React ,{useState} from 'react';
import logo from '/Users/jaswantrawat/Desktop/jan-thunders/virtual-bookstore/src/images/Standard Collection 11.svg';
import logo_name from '/Users/jaswantrawat/Desktop/jan-thunders/virtual-bookstore/src/images/KeazoNBOOKS@2x.png'; 
import searchIcon from '../images/ant-design_search-outlined.svg';
import favorite_icon from '../images/bx_bx-book-heart.svg';
import notification_icon from '../images/ic_round-notifications-none.svg';
import premium_icon from '../images/fluent_premium-person-20-regular.svg';
import userAccount_icon from '/Users/jaswantrawat/Desktop/jan-thunders/virtual-bookstore/src/images/IMG20210528181544.svg'


const Navbar=({setBookInfo})=>{

  const[search,setSearch]=useState('');

    return (
        <header>
        <div className="logo-section">
            <div className="logo-image">
              <img src={logo} alt='MyBookStore-logo' />
            </div>
            <div className="logo-name">
              <img src={logo_name} alt="" />
            </div>
        </div>
        <div className="search-section">
          <div className="input-section">
              <div className="search-image">
                  <img src={searchIcon} alt="search-icon"/>
              </div>
              <input type="text" placeholder='Search for the book you want and read it now... Sherlock Holmes, Harry Pot...' 
               onChange={(e)=>setSearch(e.target.value)}
               value={search}
              />
          </div>
          <button className='search-btn' onClick={()=>setBookInfo(search)}>Search</button>
        </div>

        <div className="icons-section">
          <div className="favorite-image">
              <img src={favorite_icon} alt="favorite-icon" />
          </div>
          <div className="notification-image">
              <img src={notification_icon} alt="notification-icon" />
          </div>
          <div className="premium-image">
              <img src={premium_icon} alt="premium-icon" />
          </div>
          <div className="userAccount-image">
              <img src={userAccount_icon} alt="userAccount-icon" />
          </div>
        </div>
      </header>
    );
}
export default Navbar;