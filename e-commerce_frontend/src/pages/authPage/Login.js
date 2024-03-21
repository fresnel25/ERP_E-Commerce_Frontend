import { Button, Form, Input, Row, Col, Card } from "antd";
import { Link} from "react-router-dom";
import './Login.css';
import React from "react";

const Login = () => {

  return (
    <div>
      <Row justify="center">
        <Col span={10}>
          <Card 
            bordered={true}
            style={{ boxShadow: "0 1px 4px rgba(0, 0, 0, 15)", marginTop: 100,backgroundColor:"aliceblue" }}
          >
            <div className="Span">
            <span>SE CONNECTER</span>
            </div>
            <div>
            <Form autoComplete="off">
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
                <Input
                  //   value={email}
                  //   onChange={(e) => setEmail(e.target.value)}
                  placeholder="Saisir votre Email"
                ></Input>
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
                <Input.Password
                  //   value={password}
                  //   onChange={(e) => setPassword(e.target.value)}
                  placeholder="Saisir votre mot de passe"
                ></Input.Password>
              </Form.Item>

              <Form.Item>
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  //   loading={loader}
                  //   onClick={() => setLoader(true)}
                >
                  Se Connecter
                </Button>
              </Form.Item>
              <Link to={"/register"}>je n'ai pas de compte</Link>
            </Form>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
