import React from 'react'

function UserApps(props) {
    let apps1='';

    {props.userAccounts.map((account)=>{
        // console.log(account[1].apps)
        const mat = props.entry[1].account == account[0] ? account[1].apps : '';        
     const apps=Object.entries(mat && mat)         
     
      apps.map((app, j) => (
                // console.log("APP",app[1].title)
                apps1=app[1].title
              ))
            
      
      })}
    
    // console.log("APPS", apps1);

    
    return (
        <div>
            {apps1}
    
  </div>
    )
}

export default UserApps
