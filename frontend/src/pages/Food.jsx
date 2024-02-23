import Header from "../components/Header"
import Card from "../components/Card"
import { useState, useEffect} from "react";
import axios from 'axios'
export default function Food() {


    const [issue, setIssue] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/fssaiissue")
            .then(function(response) {
                setIssue(response.data?.data);
                console.log(response.data.data)
        });
    }, []);
    return <div>
        <Header />
        {
            issue.map((data)=>{

               return <Card issue={data.issue} issueDesc={data.issueDesc}/>
            })
        }
    </div>
}