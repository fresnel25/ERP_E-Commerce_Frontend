import { Button, Form, Input, Row, Col, Card, Radio, Checkbox, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Row justify="center">
        <Col span={10}>
          <Card bordered={true} style={{boxShadow:'0 1px 4px rgba(0, 0, 0, 15)',marginTop:80}}>
            <Form autoComplete="off">
              <Form.Item
                name="name"
                label="Votre Nom"
                rules={[
                  {
                    required: true,
                    message: "saisissez votre nom",
                  },
                ]}
                hasFeedback
              >
                <Input placeholder="Saisir votre Nom"></Input>
              </Form.Item>

              <Form.Item
                name="email"
                label="Votre Email"
                rules={[
                  {
                    required: true,
                    message: "saisissez votre email",
                  },
                  {
                    type : "email",
                    message : "cela ne respecte pas le format du email "
                  },
                ]}
                hasFeedback
              >
                <Input placeholder="Saisir votre Email"></Input>
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
                <Input.Password placeholder="Saisir votre mot de passe"></Input.Password>
              </Form.Item>

              <Form.Item
                name="confirm_password"
                label="Confirmer votre mot de passe"
                rules={[
                  {
                    required: true,
                    message: "saisissez a nouveau votre mot de passe",
                  },
                ]}
                hasFeedback
              >
                <Input.Password placeholder="saisissez a nouveau votre mot de passe"></Input.Password>
              </Form.Item>

              <Form.Item
                name="gender"
                label="Votre genre"
                rules={[
                  {
                    required: true,
                    message: "selectionner votre genre",
                  },
                ]}
                hasFeedback
              >
                <Select>
                    <Select.Option value="male">Homme</Select.Option>
                    <Select.Option value="female">Femme</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item name="agreement">
                <Checkbox>
                  Tu es d'accord des
                  <a href="#"> termes et conditions</a>
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Button block type="primary" htmlType="submit">
                  Enregistrer
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
