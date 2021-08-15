import React, { Component } from "react";
import Input from "../Input/Input";

class RegisterForm extends Component {
  state = {
    FormData: {
      name: {
        value: "",
        validator: {
          minLength: 3,
          maxLength: 6,
          required: true,
        },
        error: { status: true, message: "", isTouch: false },
      },
      phoneNumber: {
        value: "",
        validator: {
          minLength: 10,
          maxLength: 10,
        },
        error: { status: true, message: "", isTouch: false  },
      },
      email: {
        value: "",
        validator: {
          required: true,
        },
        error: { status: true, message: "", isTouch: false  },
      },
      password: {
        value: "",
        validator: {
          minLength: 6,
          maxLength: 24,
          required: true,
        },
        error: { status: true, message: "", isTouch: false  },
      },
    },
    isFormValid: false,
  };

  checkValue = (value, rules) => {
    let isValid = true;
    let message = "";
    let trimmedValue = value.trim();

    if (rules.maxLength && trimmedValue.length > rules.maxLength) {
      isValid = false;
      message = `ช่องนี้ความยาวต้องไม่เกิน ${rules.maxLength}`;
    }

    if (rules.minLength && trimmedValue.length < rules.minLength) {
      isValid = false;
      message = `ช่องนี้ความยาวอย่างน้อย ${rules.minLength}`;
    }

    if (trimmedValue.length === 0 && rules.required) {
      isValid = false;
      message = "คุณต้องกรอกช่องนี้";
    }

    return { isValid, message };
  };

  onChangeInput = (e) => {
    const fieldName = e.target.name;
    const fieldvalue = e.target.value;
    const updateForm = { ...this.state.FormData }; //ถ้าไม่ Clone จะเป็นการ Copy by ref. ทำให้เมื่อแก้ไขอันใหม่อันเก่าจะกระทบด้วยแล้วทำให้งง
    updateForm[fieldName]["value"] = fieldvalue;

    let { isValid, message } = this.checkValue(
      e.target.value,
      updateForm[fieldName].validator
    );

    updateForm[fieldName].error.status = !isValid;
    updateForm[fieldName].error.message = message;
    updateForm[fieldName].error.isTouch = true;

    let newIsFormValid = true;
    for (let fn in updateForm) {
      if (updateForm[fn].validator.required === true) {
        newIsFormValid = !updateForm[fn].error.status && newIsFormValid;
      }
    }

    this.setState({
      FormData: updateForm,
      isFormValid: newIsFormValid,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, phoneNumber, email, password } = this.state.FormData;
    return (
      <div className="RegisterForm" onSubmit={this.onSubmitForm}>
        <form>
            {/* //attribute ที่อยู่ใน <Input /> จะถูกส่งข้อมูลเป็น Object ผ่าน props ไปให้อีกไฟล์นึงที่เป็นต้นทางของ Input */}
          <Input
            onChangeInput={this.onChangeInput}
            value={name.value}
            placeholder="Name"
            name="name"
            error={name.error}
          />
          <Input
            onChangeInput={this.onChangeInput}
            value={phoneNumber.value}
            className="Input InputElement"
            name="phoneNumber"
            placeholder="Phone Number"
            error={phoneNumber.error}
          />
          <Input
            onChangeInput={this.onChangeInput}
            value={email.value}
            className="Input InputElement"
            name="email"
            placeholder="Email"
            error={email.error}
          />
          <Input
            onChangeInput={this.onChangeInput}
            value={password.value}
            type="password"
            className="Input InputElement"
            name="password"
            placeholder="Password"
            error={password.error}
          />
          <button
            disabled={!this.state.isFormValid}
            htmlFor="submit"
            className="Button"
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
