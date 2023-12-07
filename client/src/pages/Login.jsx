import React from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../styles/RegisterStyles.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinishHandler = async (values) => {
    // console.log(values)

    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/login",
        values
      );
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("login successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };

  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="card register-form"
        >
          <h1 className="text-center">Login Form</h1>
          {/* <Form.Item label="Name" name="name">
                        <Input type='text' required />
                    </Form.Item> */}
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/register" className="m-2">
            Not a user Register here
          </Link>
          <button className="btn btn-primary">Login</button>
        </Form>
      </div>
    </>
  );
};

export default Login;
