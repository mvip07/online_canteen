import Home from "./Home";
import Login from "./Login";
import { memo } from "react";
import Order from "./Orders";
import LOGOUT from "./Logout";
import Setting from "./Setting";
import Account from "./Account";
import MESSAGES from "./Message";
import Register from "./Register";
import ADD_NAVBAR from "../utils/navbar";
import ADMIN from "../admin/pages/ADMIN";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "../utils/privateRouter";
import ADMIN_ADD_NAVBAR from "../admin/utils/NAVBAR";
import REGISTER from "../admin/pages/auth/ADMIN_REGISTER";
import ADMIN_SETTING from "../admin/pages/ADMIN_SETTING";
import ADMIN_ALL_FOOD from "../admin/pages/foods/FOOD_ALL";
import ADMIN_PRIVATEROUTER from "../admin/utils/privateRouter";
import ADMIN_CREATE_FOOD from "../admin/pages/foods/FOOD_CREATE";
import ADMIN_UPDATE_FOOD from "../admin/pages/foods/FOOD_UPDATE";
import ADMIN_USER_UPDATE from "../admin/pages/ADMIN_USER_UPDATE";

function Main() {
	
	return (
		<>
			<Routes>
				<Route element={ <Login /> } path="/login" />

				<Route element={ <Register /> } path="/register" />

				<Route element={ <PrivateRouter> <Order /> </PrivateRouter> } path="/my/orders" />
				
				<Route element={ <PrivateRouter> <Account /> </PrivateRouter> } path="/my/account" />
				
				<Route element={ <PrivateRouter> <ADD_NAVBAR> <Home /> </ADD_NAVBAR> </PrivateRouter> } path="/" />

				<Route element={ <PrivateRouter> <ADD_NAVBAR> <LOGOUT /> </ADD_NAVBAR> </PrivateRouter> } path="/logout" />

				<Route element={ <PrivateRouter> <ADD_NAVBAR> <Setting /> </ADD_NAVBAR> </PrivateRouter> } path="/setting" />
				
				<Route element={ <PrivateRouter> <ADD_NAVBAR> <MESSAGES /> </ADD_NAVBAR> </PrivateRouter> } path="/contact" />
				
				/* ============== admin section ============== */

				<Route element={ <REGISTER /> } path="/admin/register" />
				
				<Route element={ <ADMIN_PRIVATEROUTER> <ADMIN_CREATE_FOOD /> </ADMIN_PRIVATEROUTER> } path="admin/create/food" />

				<Route element={ <ADMIN_PRIVATEROUTER> <ADMIN_UPDATE_FOOD /> </ADMIN_PRIVATEROUTER>} path="admin/update/food/:id" />
				
				<Route element={ <ADMIN_PRIVATEROUTER> <ADMIN_USER_UPDATE/> </ADMIN_PRIVATEROUTER> } path="admin/user/selected/:id" />
				
				<Route element={ <ADMIN_PRIVATEROUTER> <ADMIN_ADD_NAVBAR> <ADMIN /> </ADMIN_ADD_NAVBAR> </ADMIN_PRIVATEROUTER>} path="/admin" />
				
				<Route element={ <ADMIN_PRIVATEROUTER> <ADMIN_ADD_NAVBAR> <ADMIN_SETTING /> </ADMIN_ADD_NAVBAR> </ADMIN_PRIVATEROUTER> } path="/admin/setting" />
				
				<Route element={ <ADMIN_PRIVATEROUTER> <ADMIN_ADD_NAVBAR> <ADMIN_ALL_FOOD /> </ADMIN_ADD_NAVBAR> </ADMIN_PRIVATEROUTER>} path="admin/all/food" />
								
			</Routes>
		</>
	);
}

export default memo(Main);
