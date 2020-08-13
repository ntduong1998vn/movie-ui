import React from "react";
import PageTitle from "../components/PageTitle";
import PriceCard from "../components/PriceCard";
import Features from "../components/Features/Features";

import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

function PaidPage(props) {
  const priceCards = [
    {
      id: 1,
      title: "Cơ Bản",
      price: "Miễn Phí",
      expired: "7 ngày",
      resolution: "720p",
      Feature: "Giới hạn dịch vụ",
      support: false,
    },
    {
      id: 2,
      title: "Thông Thường",
      price: "100.000đ",
      expired: "1 tháng",
      resolution: "1080p",
      Feature: "Không giới hạn",
      support: true,
    },
    {
      id: 3,
      title: "Cao Cấp",
      price: "500.000đ",
      expired: "3 tháng",
      resolution: "4K",
      Feature: "Không giới hạn",
      support: true,
    },
  ];

  return (
    <React.Fragment>
      <PageTitle title="Nâng cấp tài khoản" location="Nâng cấp tài khoản" />

      <div className="section">
        <div className="container">
          <div className="row">
            {/* <!-- plan features --> */}
            <div className="col-12">
              <ul className="row plan-features">
                <li className="col-12 col-md-6 col-lg-4">
                  Truy cập không giới hạn 1 tháng!
                </li>
                <li className="col-12 col-md-6 col-lg-4">
                  Truyền phát trên điện thoại, máy tính xách tay, máy tính bảng hoặc TV.
                </li>
                <li className="col-12 col-md-6 col-lg-4">
                  Xem phim có độ phân giải lên đến 4K!
                </li>
                <li className="col-12 col-md-6 col-lg-4">
                  Hàng ngàn chương trình truyền hình, phim ảnh và nhiều hơn nữa.
                </li>
                <li className="col-12 col-md-6 col-lg-4">
                  Bạn thậm chí có thể Tải xuống và xem ngoại tuyến.
                </li>
                <li className="col-12 col-md-6 col-lg-4">
                  Hỗ trợ 24/7
                </li>
              </ul>
            </div>
            {/* <!-- end plan features --> */}

            {/* <!-- price --> */}
            {priceCards.map((card) => {
              return <PriceCard {...card} key={card.id} user={props.user} />;
            })}

            {/* <!-- end price --> */}
          </div>
        </div>
      </div>

      <Features />
    </React.Fragment>
  );
}

const mapStateToProps = ({ authUser }) => {
  const { user, loading, error } = authUser;
  return { user, loading, error };
};
const ShowTheLocationWithRouter = withRouter(PaidPage);
export default connect(
  mapStateToProps,
  { }
)(ShowTheLocationWithRouter);