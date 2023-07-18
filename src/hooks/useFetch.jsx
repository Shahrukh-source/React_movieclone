import { fetchDataFromApi } from "../utils/api";
import { useEffect, useState } from "react";

export default function UseFetch(url) {
    const [loading, setLoading] = useState(null)
    const [data, setdata] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading("Loading.....")
        setdata(null)
        setError(null)

        fetchDataFromApi(url)
            .then((res) => {
                setLoading(false);
                setdata(res);

            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
            })



    }, [url])
    return {
        data, loading, error
    }
}
