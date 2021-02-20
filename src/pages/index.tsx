import { Container } from '../components/Container'
import { useSelector } from 'react-redux';
//import { loggedActionType } from './../actions/actions_index';
import { loggedReducerType } from './../reducers/logged';


const Index = () => {const logState= useSelector((state:loggedReducerType)=>state.logState)
  
    console.log(logState)
  
return (
  <Container height="100vh">
    {logState}
  </Container>
)
}
export default Index
