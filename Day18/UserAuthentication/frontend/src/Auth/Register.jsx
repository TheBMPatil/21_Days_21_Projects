import React from 'react'
import { Alert, Card, Flex, Typography, Form, Button, Spin } from 'antd'
import Input from 'antd/es/input/Input';
import { Link } from 'react-router-dom';
import registerImage from '../assets/register.png'
import useSignUp from '../hooks/useSignUp';
const Register = () => {

  const { loading, error, registerUser } = useSignUp();
  const handleRegister = (values) => {
    // console.log(values);
    registerUser(values)

  }


  return (

    <Card className='form-container'>
      <Flex gap="large" align='center'>
        {/* Formm */}
        <Flex vertical flex={1}>
          <Typography.Title levell={3} strong className='title'>
            Create an account
          </Typography.Title>
          <Typography.Text type='secondary' strong className='slogan'>
            Join for exclusivve accesss...!
          </Typography.Text>

          <Form layout='vertical' onFinish={handleRegister} autoComplete='off'>
            <Form.Item label="Full Name" name="name" rules={[{
              required: true,
              message: "Please Enter your full name..!"
            }]}>
              <Input size='large' placeholder='Enter full name' />
            </Form.Item>
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

            <Form.Item label="Password" name="passwordConfirm" rules={[{
              required: true,
              message: "Please Confirm your Password..!"
            }

            ]}>
              <Input.Password size='large' placeholder='Re-enter your Password  ' />
            </Form.Item>

            {
              error && <Alert description={error} type='error' showIcon closable className='alert' />
            }
            <Form.Item>

              <Button
                type={`${loading? '' : 'primary'}`}
                // type='primary'
                htmlType='submit'
                size='large'
                className='btn'
              >
                {loading ?<Spin/>:'Create Account'}
          
              </Button>

            </Form.Item>
            <Form.Item>
              <Link to={"./login"}>
                <Button
                  size='large'
                  className='btn'>
                  Sign In
                </Button>
              </Link>

            </Form.Item>

          </Form>




        </Flex>



        {/* Image */}
        <Flex flex={1}>

          <img src={registerImage} className='auth-immage'>
          </img>

        </Flex>
      </Flex>



    </Card>
  )
}

export default Register