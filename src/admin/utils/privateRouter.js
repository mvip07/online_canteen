import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function ADMINPRIVATEROUTER({ children }) {
    const ROL = JSON.parse(localStorage.getItem("online-canteen"))?.user.rol
    const NAVIGATE = useNavigate()

    useEffect(() => {
        if (ROL == "user") NAVIGATE(-1)
    }, [NAVIGATE, ROL])

    return children
}

export default ADMINPRIVATEROUTER
