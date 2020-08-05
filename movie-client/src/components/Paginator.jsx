import React from "react";
// import { Pagination } from "react-bootstrap";
import { Nav, NavItem, NavLink } from "reactstrap";
// function Paginator({ active, total, itemsToShow = 0 }) {
//   let items = [];
//   for (let i = 1; i <= total; i++) {
//     items.push(
//       <Pagination.Item bsPrefix="paginator__item" key={i} active={i === active}>
//         {i}
//       </Pagination.Item>
//     );
//   }

  return (
    <ul class="paginator paginator--list">
      <li class="paginator__item paginator__item--prev">
        <a href="#">
          <i class="icon ion-ios-arrow-back"></i>
        </a>
      </li>
      <li class="paginator__item">
        <a href="#">1</a>
      </li>
      <li class="paginator__item paginator__item--active">
        <a href="#">2</a>
      </li>
      <li class="paginator__item">
        <a href="#">3</a>
      </li>
      <li class="paginator__item">
        <a href="#">4</a>
      </li>
      <li class="paginator__item paginator__item--next">
        <a href="#">
          <i class="icon ion-ios-arrow-forward"></i>
        </a>
      </li>
    </ul>
  );
}
// class Paginator extends React.Component {
//   componentDidMount() { }
//   onChangePage(e) {
//     this.props.onChangePage(e);
//   }
//   render() {
//     const {
//       totalPage = 5,
//       currentPage = 1,
//       numberLimit = 5,
//     } = this.props;
//     let startPoint = 1;
//     let endPoint = numberLimit;

//     if (numberLimit > totalPage) {
//       startPoint = 1;
//       endPoint = totalPage;
//     } else if (currentPage <= parseInt(numberLimit / 2, 10)) {
//       startPoint = 1;
//       endPoint = numberLimit;
//     } else if (currentPage + parseInt(numberLimit / 2, 10) <= totalPage) {
//       startPoint = currentPage - parseInt(numberLimit / 2, 10);
//       endPoint = currentPage + parseInt(numberLimit / 2, 10);
//     } else {
//       startPoint = totalPage - (numberLimit - 1);
//       endPoint = totalPage;
//     }
//     startPoint = startPoint === 0 ? 1 : startPoint;
//     const points = [];
//     for (var i = startPoint; i <= endPoint; i++) {
//       points.push(i);
//     }
//     console.log(points);
//     return (
//       <Nav className="paginator paginator--list">
//         <NavItem className="paginator__item paginator__item--prev">
//           <NavLink
//             onClick={() => this.onChangePage(currentPage - 1)}
//           >
//             <i className="icon ion-ios-arrow-back" />
//           </NavLink>
//         </NavItem>
//         {/* <NavItem className="paginator__item paginator__item--active">
//           <a href="#">1</a>
//         </NavItem>

//         <NavItem className="paginator__item">
//           <a href="#">3</a>
//         </NavItem>
//         <NavItem className="paginator__item">
//           <a href="#">4</a>
//         </NavItem> */}
//         {points.map(i => {
//             return (
//               <NavItem
//                 key={i}
//                 className="paginator__item">
//                 <NavLink
//                   className="page-link"
//                   onClick={() => this.onChangePage(i)}
//                 >
//                   {i}
//                 </NavLink>
//               </NavItem>
//             );
//           })}
//         <NavItem className="paginator__item paginator__item--next">
//           <NavLink
//             onClick={() => this.onChangePage(currentPage + 1)}>
//             <i className="icon ion-ios-arrow-forward" />
//           </NavLink>
//         </NavItem>
//       </Nav>
//     );
//   }
// }

export default Paginator;
