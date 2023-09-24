import axios from "axios";

const baseUrl = "http://localhost:5050";

const getAllFeedback = (setFeedBack) => {
    axios
        .get(baseUrl + '/api/feedback')
        .then(({ data }) => {
            console.log(data);
            setFeedBack(data);
        })
}

export { getAllFeedback };