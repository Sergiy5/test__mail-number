import toast from "react-hot-toast";

export const handleError = (text) => {
    return toast.error(`${text}`);
}