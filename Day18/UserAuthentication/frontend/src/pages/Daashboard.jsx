import { Button } from 'antd'
import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const Daashboard = () => {
    const { logout } = useAuth()

    return (
        <>
            <div>Daashboard</div>
            <Button onClick={logout}>Logout</Button>
        </>
    )
}

export default Daashboard