import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React from 'react'
import { useAddUsersMutation } from '../generated/graphql-frontend';
import {useRouter} from 'next/router'
interface registerProps {

}

 const Register: React.FC<registerProps> = ({}) => {
    const [addUsersMutation, ] = useAddUsersMutation();
    const router = useRouter();
    return (
        <Box mt={5}
        mx="auto"
        maxW="400px"
        w="100%">
    <Formik 
        initialValues={{username:'', password:''}}
        onSubmit={async (values,{setErrors}) => {
            const  response =  await addUsersMutation({
                   variables: {
                      registerUsername: values.username,
                      registerPassword: values.password
                   },
                 });
                 
                
                  if (response.errors) {
                    setErrors ({username: "username error"})
                  }
                  if (response.data?.register) {
                      router.push("/");
                  }
            }}
        >
            {(props) =>(
                <Form onSubmit={props.handleSubmit}>
                    <FormControl>
                        <FormLabel htmlFor="username">Username</FormLabel>
                    <Input
                    id= "inp1"
                    type="text"
                    onChange={props.handleChange}
                    value={props.values.username}
                    name="username"
                    />
                    {/* {props.errors.username && <div id="feedback"> {props.values.username} </div>} */}

                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="password">Password</FormLabel>
                    <Input
                    id="inp2"
                    type="password"
                    onChange={props.handleChange}
                    value={props.values.password}
                    name="password"
                    />
                    {/* {props.errors.username && <div id="feedback"> {props.values.username} </div>} */}
                    <Button type="submit" isLoading={props.isSubmitting}  >submit</Button>
                    </FormControl>
                </Form>
            )}
        </Formik>
        </Box>
        );
    
}

export default Register;