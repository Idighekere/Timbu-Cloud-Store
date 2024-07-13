import React, { useEffect, useState } from 'react'
import axios from "axios";

const useFetch = (page, url, options) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {

            try {
                setLoading(true)
                const res = await axios.get(url, options)
                setData(res.data);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }

        }
        fetchData()
        // return () => {
        // }
    }, [url])

    return { data, error, loading }

}

export default useFetch