import { Button, Form, Input, Row, Col, Card, Checkbox } from "antd";
function Login() {
  return (
    <div>
      <Row justify="center">
        <Col span={10}>
          <Card
            bordered={true}
            style={{ boxShadow: "0 1px 4px rgba(0, 0, 0, 15)", marginTop: 80 }}
          >
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
                    type: "email",
                    message: "cela ne respecte pas le format du email ",
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

              <Form.Item>
                <Button block type="primary" htmlType="submit">
                  Se Connecter
                </Button>
              </Form.Item>
              <span> je n'ai pas de compte </span>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
