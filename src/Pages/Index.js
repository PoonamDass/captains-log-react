import Logs from "../Components/Logs"

const Index = ({logs}) =>{
    return(
        <div>
          <h2>Captain's Log Index</h2>
          <Logs logs={logs} />
        </div>
    )
}

export default Index