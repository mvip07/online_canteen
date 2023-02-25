import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const TOASTIFY = (STATUS, TEXT) => {
    if (STATUS == "error") toast.error(TEXT)
    if (STATUS == "warning") toast.warn(TEXT)
	if (STATUS == "success") toast.success(TEXT)
}

