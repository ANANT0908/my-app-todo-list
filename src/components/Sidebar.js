import React from 'react';
import {FaInbox , FaRegCalendarAlt,FaRegCalendar } from 'react-icons/fa';

const Sidebar = (selectedTab, setSelectedTab )=>{

    return(
      <div className="sidebar" > 
        <div className={`active`}  onClick={()=>{setSelectedTab("INBOX")}}  >
        <FaInbox className="icon" />
        Inbox
        </div>

        <div onClick={()=>{setSelectedTab("TODAY")}} >
        <FaRegCalendar className="icon" />
        Today
        </div>

        <div onClick={()=>{setSelectedTab("NEXT_7")}} >
        <FaRegCalendarAlt  className="icon" />
        Next 7 days
        </div>

      </div>
    );
}
export default Sidebar;