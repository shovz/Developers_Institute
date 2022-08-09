import React from 'react';



const UserFavoriteColors  = ({props}) => {
  // console.log(props);
  return (
    props.map(elem=>{
  // console.log(elem );
      return <ul>
        <li>{elem}</li>
      </ul>
    })
  );
}

export default UserFavoriteColors ;