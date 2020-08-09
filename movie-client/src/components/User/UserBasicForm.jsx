import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";
import _ from "lodash";
import { Form } from "react-bootstrap";

const BasicInfoSchema = yup.object().shape({
  email: yup.string().email().required("Chưa nhập email!"),
  name: yup.string().max(40, "Tối đa 40 ký tự!").required("Chưa nhập họ tên!"),
});

const UserBasicForm = ({ user, onSubmit }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(BasicInfoSchema),
  });

  const convertRolesToString = (roleArray) => {
    let result = "USER_NORMAL";
    if (roleArray !== null && roleArray.length > 0) {
      result = _.join(_.map(roleArray, "name"), " / ");
    }
    return result;
  };

  return (
    <Form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-12">
          <h4 className="profile__title">Thông tin chi tiết</h4>
        </div>

        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
          <Form.Group bsPrefix="profile__group" controlId="formUsername">
            <Form.Label bsPrefix="profile__label">Tên tài khoản</Form.Label>
            <Form.Control
              className="profile__input"
              plaintext
              readOnly
              defaultValue={user.username}
            />
          </Form.Group>
        </div>

        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
          <Form.Group bsPrefix="profile__group" controld="formEmail">
            <Form.Label bsPrefix="profile__label">Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              bsPrefix="profile__input"
              placeholder="Email"
              defaultValue={user.email}
              ref={register}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </Form.Group>
        </div>

        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
          <Form.Group bsPrefix="profile__group" controlId="formName">
            <Form.Label bsPrefix="profile__label">Họ Tên</Form.Label>
            <Form.Control
              type="text"
              name="name"
              maxLength="40"
              bsPrefix="profile__input"
              placeholder="Họ tên"
              defaultValue={user.name}
              ref={register}
            />
            {errors.name && (
              <p style={{ color: "red" }}>{errors.name.message}</p>
            )}
          </Form.Group>
        </div>

        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
          <Form.Group bsPrefix="profile__group" controlId="formRole">
            <Form.Label bsPrefix="profile__label">Loại tài khoản</Form.Label>
            <Form.Control
              plaintext
              readOnly
              className="profile__input"
              defaultValue={convertRolesToString(user.roles)}
            />
          </Form.Group>
        </div>

        <div className="col-12">
          <button className="profile__btn" type="submit">
            Lưu
          </button>
        </div>
      </div>
    </Form>
  );
};

export default UserBasicForm;
