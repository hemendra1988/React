import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/hemendra1988')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    return(
        <div className="text-center m-4, bg-gray-800 text-white text-3xl p-4">Github Reposotory(s): {data.public_repos}
        <img src={data.avatar_url} alt="Git Picture" width={100} />
        </div>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hemendra1988')
    return response.json()
}