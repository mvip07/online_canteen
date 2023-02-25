import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const PRIVATE_ROUTER = ({ children }) => {
    const NAVIGATE = useNavigate()
    const TOKEN = JSON.parse(localStorage.getItem("online-canteen"))?.token
    const BLOCK = JSON.parse(localStorage.getItem("online-canteen"))?.user.block

    useEffect(() => {
        if (BLOCK == true || !TOKEN) NAVIGATE("/login")
    }, [BLOCK, TOKEN, NAVIGATE])

    return children
}

export default PRIVATE_ROUTER