import React from 'react'
function UserApps(props) {
    let apps1 = '';

    {
        props.userAccounts.map((account) => {
            const mat = props.entry[1].account == account[0] ? account[1].apps : '';
            const apps = Object.entries(mat && mat)

            apps.map((app, j) => (
                apps1 = app[1].title
            ))
        })
    }
    return (
        <div>
            {apps1}
        </div>
    )
}

export default UserApps
