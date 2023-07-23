import { useRouteError, Link } from "react-router-dom"

const CareerErrorDetails = () => {
    const error = useRouteError(); 
  return (
    <div>
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link to='/'>Back to home page</Link>
    </div>
  )
}

export default CareerErrorDetails