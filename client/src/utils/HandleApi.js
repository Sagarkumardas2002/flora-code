import axios from "axios";

const baseUrl = "https://flora-backend.onrender.com";

const getAllFeedback = (setFeedBack) => {
    axios
        .get(baseUrl + '/api/feedback')
        .then(({ data }) => {
            console.log(data);
            setFeedBack(data);
        })
}

export { getAllFeedback };
