import React from "react";
import "./App.css";
import { Row, Col, Form, Input, Button } from "antd";

function App() {
  const layout = {
    labelCol: {
      xs: 6,
      sm: 8,
      md: 10,
    },
    wrapperCol: {
      xs: 18,
      sm: 16,
      md: 14,
    },
  };

  let onFinish = (value) => {
    console.log(value)
  };
  return (
    <div className="App">
      <Row justify="center">
        <Col xs={24} sm={22} md={20} lg={16} xl={14} xxl={12}>
          {/* onFinish จะส่งค่า value ของแต่ละ input ไปให้ฟังก์ชั่นเลย */}
          <Form {...layout} onFinish={onFinish}>
            <Form.Item 
            label="Name" 
            name="name" 
            rules={[{required:true,message:"คุณต้องกรอกช่องนี้นะ"},{max:6,min:3,message: "ชื่อต้องมีความยาวอยู่ระหว่า 3 - 6 ตัวอักษร"}]}>
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item 
            label="Phone Numbers" 
            name="phonenumbers"
            rules={[
              {len:10, message:"เบอร์โทรศัพท์ของคุณไม่ถูกต้อง"}
            ]}
            >
              <Input placeholder="Phone Numbers" />
            </Form.Item>
            <Form.Item 
            label="Email" 
            name="email"
            rules={[
              {type: 'email',message:"รูปแบบอีเมล์ของคุณไม่ถูกต้อง"},
              {required:true,message:"คุณต้องกรอกช่องนี้"}
            ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item 
            label="Passwords" 
            name="passwords"
            rules={[
              {required:true,message:"คุณต้องใส่รหัสผ่านด้วย"},
              {min: 12,max: 24,message: "รหัสผ่านของคุณต้องมีความยาวระหว่าง 12 -24 ตัว"}
            ]}
            >
              <Input type="password" placeholder="Passwords" />
            </Form.Item>
            <Button htmlType="submit">Register</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default App;
