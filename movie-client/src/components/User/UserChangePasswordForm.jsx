import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";
import { Form } from "react-bootstrap";

const PasswordSchema = yup.object().shape({
  oldPassword: yup.string().required("Yêu cầu nhập mật khẩu cũ!"),
  newPassword: yup
    .string()
    .required("Yêu cầu nhập mật khẩu mới!")
    .min(6, "Tối thiểu 6 ký tự!")
    .matches(
      /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
      "Mật khẩu phải chứa số và chữ"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Không khớp với mật khẩu mới!"),
});

const UserChangePasswordForm = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(PasswordSchema),
  });

  return (
    <Form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-12">
          <h4 className="profile__title">Đổi mật khẩu</h4>
        </div>

        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
          <Form.Group bsPrefix="profile__group" controlId="oldPassword">
            <Form.Label bsPrefix="profile__label">Old Password</Form.Label>
            <Form.Control
              type="password"
              name="oldPassword"
              bsPrefix="profile__input"
              placeholder="Nhập mật khẩu cũ"
              ref={register}
            />
            {errors.oldPassword && (
              <p style={{ color: "red" }}>{errors.oldPassword.message}</p>
            )}
          </Form.Group>
        </div>

        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
          <Form.Group bsPrefix="profile__group" controlId="newPassword">
            <Form.Label bsPrefix="profile__label">New Password</Form.Label>
            <Form.Control
              type="password"
              name="newPassword"
              bsPrefix="profile__input"
              placeholder="Nhập mật khẩu mới"
              ref={register}
            />
            {errors.newPassword && (
              <p style={{ color: "red" }}>{errors.newPassword.message}</p>
            )}
          </Form.Group>
        </div>

        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
          <Form.Group bsPrefix="profile__group" controlId="confirmPassword">
            <Form.Label bsPrefix="profile__label">
              Confirm New Password
            </Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Xác thực mật khẩu"
              bsPrefix="profile__input"
              ref={register}
            />
            {errors.confirmPassword && (
              <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
            )}
          </Form.Group>
        </div>

        <div className="col-12">
          <button className="profile__btn" type="submit">
            Thay đỏi
          </button>
        </div>
      </div>
    </Form>
  );
};

export default UserChangePasswordForm;
