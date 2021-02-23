import { Container } from '../components/Container'
import { useSelector } from 'react-redux';
//import { loggedActionType } from './../actions/actions_index';
import { loggedReducerType } from './../reducers/logged';
import {  useGetUsersQuery } from '../generated/graphql-frontend';


const Index = () => {const logState= useSelector((state:loggedReducerType)=>state.logState)
  
  const {loading,error,data} = useGetUsersQuery();
  
  if (loading) {
    return 'Loading...'
  }

  if (error) {
    return `Error! ${error.message}`
  }

return (
  <Container height="100vh">
    {logState} {JSON.stringify(data)}
  </Container>
)
}
export default Index
