import React from "react";
import Avatar from "@material-ui/core/Avatar";

export default function UserAvatar() {
  return (
    <div className='useravatar'>
      <div className='useravatar__container'>
        <Avatar alt="User" src="/src/common/assets/user.png" />
      </div>
    </div>
  );
}
