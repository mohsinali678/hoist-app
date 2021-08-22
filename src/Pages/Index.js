import HealthDetails from "../components/HealthDetails.js"

function Index({healthDetails}) {

    return (
        <div className="Index">
            <h2>My Play List</h2>
            <HealthDetails healthDetails={healthDetails}/>
        </div>
    )
}

export default Index