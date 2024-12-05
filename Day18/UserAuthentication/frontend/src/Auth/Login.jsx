import React from 'react'
import { Alert, Card, Flex, Typography, Form, Button, Spin } from 'antd'
import Input from 'antd/es/input/Input';
import { Link } from 'react-router-dom';
import registerImage from '../assets/signin.png'
import useLogin from '../hooks/useLogin';
const Login = () => {

    const { error, loading, loginUser } = useLogin()

    const handleLogin = async (values) => {
        // console.log(values);

        await loginUser(values)
    }

    return (
        <Card className='form-container'>
            <Flex gap="large" align='center'>
                {/* Image */}
                <Flex flex={1}>

                    <img src={registerImage} className='auth-immage'>
                    </img>

                </Flex>
                {/* Formm */}
                <Flex vertical flex={1}>
                    <Typography.Title levell={3} strong className='title'>
                        Sign In
                    </Typography.Title>
                    <Typography.Text type='secondary' strong className='slogan'>
                        Unlock your world...!
                    </Typography.Text>

                    <Form layout='vertical' onFinish={handleLogin} autoComplete='off'>

                        <Form.Item label="Email" name="email" rules={[{
                            required: true,
                            message: "Please Enter your email..!"
                        }
                            ,
                        {
                            type: 'email',
                            message: 'The input is not vaaliid Email..!'
                        }]}>
                            <Input size='large' placeholder='Enter your email  ' />
                        </Form.Item>


                        <Form.Item label="Password" name="password" rules={[{
                            required: true,
                            message: "Please Enter your Password..!"
                        }

                        ]}>
                            <Input.Password size='large' placeholder='Enter your Password  ' />
                        </Form.Item>



                        {
                            error && <Alert description={error} type='error' showIcon closable className='alert' />
                        }
                        <Form.Item>

                            <Button
                                type={`${loading ? '' : 'primary'}`}
                                // type='primary'
                                htmlType='submit'
                                size='large'
                                className='btn'
                            >
                                {loading ? <Spin /> : 'Sign In'}


                            </Button>

                        </Form.Item>
                        <Form.Item>
                            <Link to={"/"}>
                                <Button
                                    size='large'
                                    className='btn'>
                                    Create an account
                                </Button>
                            </Link>

                        </Form.Item>

                    </Form>




                </Flex>




            </Flex>



        </Card>

    )
}

export default Login