const { useState, useEffect } = require("react")

const useFakeData = () => {
    const [reviews, setReview] = useState([])
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return [reviews, setReview]
}
export default useFakeData;