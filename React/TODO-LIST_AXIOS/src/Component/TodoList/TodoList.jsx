import React, { useState, useEffect } from "react";
import { Button, Input, List, Row, Col, Divider, Typography } from "antd";
const { Text } = Typography;
import _ from "lodash";
import axios from "../../config/axios";
import Todo from "./Todo";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [inputField, setInputField] = useState("");

  const fetchTodoList = async () => {
    const httpResponnse = await axios.get('/todo-list')
    setTodoList(httpResponnse.data)
  };

  useEffect(()=>{
    fetchTodoList();
  },[])

  // const addTodoItem = () => {
  //   const task = inputField;
  //   const newTodoList = [...todoList];
  //   newTodoList.push({
  //     id: _.uniqueId(),
  //     task: inputField,
  //   });
  //   setTodoList(newTodoList);
  //   setInputField("");
  // };

  const addTodoItem = async () => {
    await axios.post('/todo-list', {task: inputField})
    fetchTodoList();
    setInputField("");
  };

  // const deleteTodoList = (id) => {
  //     const newTodoList = todoList.filter(todo => todo.id !== id)
  //     setTodoList(newTodoList);
  //     console.log(id)
  //   // const newTodoList = [...todoList];
  //   // const targetIndex = newTodoList.findIndex(todo => todo.id === id);
  //   // newTodoList.splice(targetIndex,1);
  //   // setTodoList(newTodoList);
  // }

  const deleteTodoItem = async (id) => {
      await axios.delete(`/todo-list/${id}`);
      fetchTodoList();
  }

  return (
    <Row justify="center">
      <Col>
        <Row justify="center">
          <Text type="warning">กรุณาใส่ To Do เพิ่ม</Text>
        </Row>
        <Row justify="center">
          <Col span={20}>
            <Input
              value={inputField}
              onChange={(e) => setInputField(e.target.value)}
            />
          </Col>
          <Col span={4}>
            <Button style={{ width: "100%" }} onClick={addTodoItem}>
              Add
            </Button>
          </Col>
        </Row>
        <Divider />
        <Row>
          <List
            style={{ width: "450px" }}
            header={<div>TodoList Page</div>}
            bordered
            dataSource={todoList}
            renderItem={(todo) => (
              <List.Item>
                <Todo 
                delete = {deleteTodoItem}
                todo = {todo}
                fetchData = {fetchTodoList}
                />
              </List.Item>
            )}
          />
        </Row>
      </Col>
    </Row>
  );
}

export default TodoList;
