import { Button, Form, Input, Row, Col, Card } from "antd";
import './Login.css'
import Header from "../Home/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {

  //permet de faire une navigation de la page login vers la page register
  const navigate = useNavigate();
  const[error, setError] = useState(false)
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")

  const [loader, setLoader] = useState(false);

  const onFinish = async () => {
    await axios
      .post(`${process.env.REACT_APP_API}Login`,{
        email,password
      })
      .then((res) => {
        console.log(res.data)
        if(res.data.status !== 200){
          setError(true)
        }
        if(res.data.status === 200){
          localStorage.setItem('user_token',res.data.token)
          window.location.href = "/dashboard"
        }
        }
      )
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <Row justify="center">
        <Col span={10}>
          <Card
            bordered={true}
            style={{ boxShadow: "0 1px 4px rgba(0, 0, 0, 15)", marginTop: 150 }}
          >
            <Form onFinish={onFinish} autoComplete="off">

            {error?"donnees fausses":null}

              <Form.Item
                name="email"
                label="Votre Email"
                rules={[
                  {
                    required: true,
                    message: "saisissez votre email",
                  },
                  {
                    type: "email",
                    message: "cela ne respecte pas le format du email ",
                  },
                ]}
                hasFeedback
              >
                <Input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Saisir votre Email"></Input>
              </Form.Item>

              <Form.Item
                name="password"
                label="Votre mot de passe"
                rules={[
                  {
                    required: true,
                    message: "saisissez votre mot de passe",
                  },
                ]}
                hasFeedback
              >
                <Input.Password value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Saisir votre mot de passe"></Input.Password>
              </Form.Item>

              <Form.Item>
                <Button 
                block type="primary" 
                htmlType="submit"   
                loading={loader}
                onClick={() => setLoader(true)}>
                  Se Connecter
                </Button>
              </Form.Item>
              <span className="cursor" onClick={()=>navigate("/register")}> je n'ai pas de compte </span>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
