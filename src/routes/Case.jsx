import { useParams } from "react-router-dom";

const Case = () => {

    const params = useParams();
    return (
        <h1>Case {params.caseNumber}</h1>
    )
}

export default Case;