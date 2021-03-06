import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { Form, Formik, FormikErrors } from 'formik';
import React from 'react'
import {  useLoginMutation } from '../generated/graphql-frontend';
import {useRouter} from 'next/router'
interface FormValues {
    username: string;
    password: string;
  }
interface registerProps {

}

 const Register: React.FC<registerProps> = ({}) => {
    const [LoginMutation, ] = useLoginMutation();
    const router = useRouter();
    return (
        <Box mt={5}
        mx="auto"
        maxW="400px"
        w="100%">
    <Formik 
        initialValues={{username:'', password:''}}
        validate = {(values:FormValues) => {
            const errors: FormikErrors<FormValues> = {};
            if (values.username.length <= 2) {
                errors.username = "length must be more than 2 characters"
            }
            if (values.password.length <= 2) {
                errors.password = "length must be more than 2 characters"
            }
            return errors;
        }}
        onSubmit={async (values,{setStatus}) => {
            const  response =  await LoginMutation({
                   variables: {
                      loginUsername: values.username,
                      loginPassword: values.password
                   },
                 });
                 
                
                  if (response.data?.login?.field === "username") {
                    setStatus ({username:response.data?.login?.message })
                    
                  }
                  if (response.data?.login?.field === "password") {
                    setStatus ({password:response.data?.login?.message! })
                    
                  }
                  if (response.data?.login == null) {
                      router.push("/");
                  }
            }}
        >
            {(props) =>(
                <Form onSubmit={props.handleSubmit}>
                    <FormControl isInvalid={(!!props.errors.username || props.status?.username) && props.touched.username  }>
                        <FormLabel htmlFor="username">Username</FormLabel>
                    <Input
                    id= "inp1"
                    type="text"
                    onChange={props.handleChange}
                    value={props.values.username}
                    name="username"
                    />
                    <FormErrorMessage>{ props.status?.username || props.errors.username}</FormErrorMessage>
                    

                    </FormControl>
                    <FormControl isInvalid={(!!props.errors.password || props.status?.password) && props.touched.password }>
                        <FormLabel htmlFor="password">Password</FormLabel>
                    <Input
                    id="inp2"
                    type="password"
                    onChange={props.handleChange}
                    value={props.values.password}
                    name="password"
                    />
                    <FormErrorMessage>{props.status?.password || props.errors.password}</FormErrorMessage>
                    <Button type="submit" isLoading={props.isSubmitting}  >submit</Button>
                    </FormControl>
                </Form>
            )}
        </Formik>
        </Box>
        );
    
}

export default Register;