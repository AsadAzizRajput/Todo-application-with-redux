import React from 'react';
import {
    Form, Icon, Input, Button, Checkbox,Layout
  } from 'antd';
import './LoginScreen.css'
import axios from 'axios'
import {store} from '../../redux/store';
const { Header} = Layout;
const FormItem = Form.Item;
  
  class NormalLoginForm extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        counterval:store.getState()
      }
    }
    counter=()=>{
        // console.log(store.getState())
        store.dispatch(
          {
            type:'INCREMENT'
          }
        )
        this.setState.counterval =store.getState();
        this.setState({
          counterval:store.getState()
        })
        
        console.log('store.getState()')
        console.log(store.getState())
        // console.log('this.state.counterval');
        // console.log(this.state.counterval);
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          //https://reqres.in/api/users
          axios.get('https://reqres.in/api/login',{
            "email": "peter@klaven",
            "password": "cityslicka"
        })
          .then(response => console.log(response))
          console.log('Received values of form: ', values);
        }
      });
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <React.Fragment>
        <Header>{store.getState()}</Header>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="#">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="#">register now!</a>
          </FormItem>
        </Form>
        <Button onClick={this.counter} type="primary" className="login-form-button">
             Testing
            </Button>
        </React.Fragment>
      );
    }
  
  }
  
 
  const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

  export default WrappedNormalLoginForm;
  
  // ReactDOM.render(<WrappedNormalLoginForm />, mountNode);