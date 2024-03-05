import { Button, Form, Input, Row, Col, Card, Select, DatePicker } from "antd";
import moment from "moment";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

  let navigate = useNavigate();

  const [loader, setLoader] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_Password] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");

  //cette fonction permet de recuperer les donnees entrees dans le formulaire et les envoyer a l'api pour creer un nouvel utilisateur
  //une fois le nouvel utilisateur sera enregistre, la page de login lui sera retournee
  const onFinish = async () => {
    await axios
      .post(`${process.env.REACT_APP_API}Register`,{
        name,email,password,confirm_password,gender,birthday,phone
      })
      .then((res) => navigate('/login'))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Row justify="center">
        <Col span={10}>
          <Card
            bordered={true}
            style={{ boxShadow: "0 1px 4px rgba(0, 0, 0, 15)", marginTop: 20 }}
          >
            <span>S'INSCRIRE</span>

            <Form onFinish={onFinish} autoComplete="off">
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
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Saisir votre Nom"
                ></Input>
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
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Saisir votre mot de passe"
                ></Input.Password>
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
                <Input.Password
                  value={confirm_password}
                  onChange={(e) => setConfirm_Password(e.target.value)}
                  placeholder="saisissez a nouveau votre mot de passe"
                ></Input.Password>
              </Form.Item>

              <Form.Item
                name="gender"
                label="Votre genre"
                rules={[
                  {
                    required: true,
                    message: "Sélectionnez votre genre",
                  },
                ]}
                hasFeedback
              >
                <Select value={gender} onChange={(value) => setGender(value)}>
                  <Select.Option value="male">Homme</Select.Option>
                  <Select.Option value="female">Femme</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item name="birthday" label="Votre Naissance">
                <DatePicker
                  value={moment(birthday)}
                  onChange={(date) => setBirthday(date.format("YYYY-MM-DD"))}
                  placeholder="Saisir votre Naissance"
                  picker="date"
                />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Votre Numero de telephone"
                rules={[
                  {
                    required: true,
                    message: "saisissez votre Numero de telephone",
                  },
                ]}
                hasFeedback
              >
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Saisir votre Numero de telephone"
                ></Input>
              </Form.Item>

              <Form.Item>
                <Button 
                block type="primary" 
                htmlType="submit"
                loading={loader}
                onClick={() => setLoader(true)}>
                  S'INSCRIRE
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
