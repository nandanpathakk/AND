import Header from "../components/Header"
import Card from "../components/Card"
import { useState, useEffect } from "react";
import axios from 'axios'
import AddData from "../components/AddData";

export default function Clean() {

    const [issue, setIssue] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/cleanissue")
            .then(function (response) {
                setIssue(response.data.data);
                console.log(response.data.data)
            });
    }, []);
    return <div>
         <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#ffffff,transparent)]">
            </div></div>
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
        <AddData postapi={"http://localhost:3000/cleanissuecreate"} />

    </div>
}