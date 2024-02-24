import Header from "../components/Header"
import { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from 'axios'
import AddData from "../components/AddData";


export default function Food() {

    const [issue, setIssue] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3000/roadissue")
            .then(function (response) {
                setIssue(response.data?.data);
                console.log(response.data.data)
            });
    }, []);

    return <div>

            <Header />
            <div className="m-10 grid grid-cols-2 gap-5">
            {
                issue.map((data) => {

                    return <div>
                        <Card issue={data.issue} issueDesc={data.issueDesc} />
                    </div>
                })
            }
            </div>
            
        <AddData postapi={"http://localhost:3000/roadissuecreate"} />

    </div>
}