import { Button, Col, Input, Row } from "antd";
import React, { useState } from "react";
import axios from "../../config/axios";

function Todo(props) {
  const [changeInput, setChangeInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const updateTodoItem = async (id) => {
    await axios.put(`/todo-list/${id}`, {
      task: changeInput,
    });
    props.fetchData();
    setChangeInput("");
    setIsEdit(false);
  };

  const toggleEdit = () => {
    setIsEdit(true);
    setChangeInput(props.todo.task);
  };

  let content = (
    <Row style={{ width: "100%" }}>
      <Col span={20}>
        <Input
          value={changeInput}
          onChange={(e) => setChangeInput(e.target.value)}
        />
      </Col>
      <Col span={4}>
        <Button type="primary" onClick={() => updateTodoItem(props.todo.id)}>
          Done
        </Button>
      </Col>
    </Row>
  );

  if (!isEdit) {
    content = (
      <Row style={{ width: "100%" }}>
        <Col span={16}>
          <Row justify="start">{props.todo.task}</Row>
        </Col>
        <Col span={4}>
          <Button
            type="danger"
            onClick={() => toggleEdit()}
            style={{ backgroundColor: "orange", borderColor:'orange' }}
          >
            Edit
          </Button>
        </Col>
        <Col span={4}>
          <Button type="danger" onClick={() => props.delete(props.todo.id)}>
            Del
          </Button>
        </Col>
      </Row>
    );
  }

  return <div style={{ width: "100%" }}>{content}</div>;
}

export default Todo;
