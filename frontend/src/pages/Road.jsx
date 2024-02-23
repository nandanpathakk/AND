import Header from "../components/Header"
import { useState, useEffect} from "react";
import Card from "../components/Card";
import axios from 'axios'

export default function Food() {

    const [issue, setIssue] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3000/roadissue")
            .then(function(response) {
                setIssue(response.data?.data);
                console.log(response.data.data)
        });
    }, []);

    return <div>
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#ffffff,transparent)]">

        <Header />
        {
            issue.map((data)=>{

               return <Card issue={data.issue} issueDesc={data.issueDesc}/>
            })
        }
    </div>
    </div>
    </div>
}