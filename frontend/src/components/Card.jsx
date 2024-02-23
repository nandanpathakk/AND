import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Card({ getApi }) {

    const [issue, setIssue] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/cleanissue")
            .then(function (response) {
                setIssue(response.data.data)
                console.log(response.data.data)
            })
    }, [])

    return (
        <div>
            hello
            {issue.map(function(data){
                return (
                    <div>
                        <div>{data.issue}</div>
                        <div>{data.issueDesc}</div>
                    </div>
                )

            })}
        </div>
    )
}