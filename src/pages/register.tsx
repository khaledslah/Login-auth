import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React from 'react'

interface registerProps {

}

 const Register: React.FC<registerProps> = ({}) => {
    return (
        <Box mt={5}
        mx="auto"
        maxW="400px"
        w="100%">
    <Formik 
        initialValues={{username:'', password:''}}
        onSubmit={(values) => {
            console.log(values);
            }}
        >
            {(props) =>(
                <Form onSubmit={props.handleSubmit}>
                    <FormControl>
                        <FormLabel htmlFor="username">Username</FormLabel>
                    <Input
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
                    type="password"
                    onChange={props.handleChange}
                    value={props.values.password}
                    name="password"
                    />
                    {/* {props.errors.username && <div id="feedback"> {props.values.username} </div>} */}
                    <Button type="submit" isLoading={props.isSubmitting} >submit</Button>
                    </FormControl>
                </Form>
            )}
        </Formik>
        </Box>
        );
    
}

export default Register;