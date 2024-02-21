import axios from "axios";
import {useSelector} from "react-redux";
import {url} from "../slices/api";

const PayButton = ({cartItems}) => {
    const user = useSelector((state) => state.auth);
    const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJzYWluaWtAZ21haWwuY29tIiwibmFtZSI6InNhaW5pa0BnbWFpbC5jb20iLCJlbWFpbCI6InNhaW5pa0BnbWFpbC5jb20ifQ.xcMuqyKjp9hCWq-tKyxQ8bbC40oYSMRRceKpmxkUNJA'

    const handleCheckout = () => {
        axios
            .post(`${url}/stripe/create-checkout-session`, {
                cartItems,
                userId: user._id,
            }, {
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJzYWluaWtAZ21haWwuY29tIiwibmFtZSI6InNhaW5pa0BnbWFpbC5jb20iLCJlbWFpbCI6InNhaW5pa0BnbWFpbC5jb20ifQ.xcMuqyKjp9hCWq-tKyxQ8bbC40oYSMRRceKpmxkUNJA'
                }
            })

            .then((response) => {
                if (response.data.url) {
                    window.location.href = response.data.url;
                }
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <>
            <button onClick={() => handleCheckout()}>Check out</button>
        </>
    );
};

export default PayButton;
