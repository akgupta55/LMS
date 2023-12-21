import React from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/user_action";
import { useDispatch, useSelector } from "react-redux";
//import {userProfile} from "../actions/user_action"

const Sidebar = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.userLoginReducer);
  return (
    <div style={{ marginTop: "10%" }}>
      <ul>
        <li className="list_item">
          {" "}
          <i className="fas fa-home text-white"></i>{" "}
          <Link
            to="/dashboard/"
            style={{
              textDecoration: "none",
              color: "#f1f1f1",
              fontSize: "20px",
              marginLeft: "5px",
              fontFamily: "Oswald",
              cursor: "pointer",
            }}
          >
            {" "}
            Home{" "}
          </Link>{" "}
        </li>
        <hr style={{ color: "white" }} />

        <li>
          {" "}
          <i className="fas fa-address-book text-white"></i>
          <Link
            to="/dashboard/allBook"
            style={{
              textDecoration: "none",
              color: "#f1f1f1",
              fontSize: "20px",
              marginLeft: "5px",
              fontFamily: "Oswald",
              cursor: "pointer",
            }}
          >
            {" "}
            All Books{" "}
          </Link>{" "}
        </li>
        <hr style={{ color: "white" }} />

        {currentUser.user.isAdmin ? (
          <>
            <li>
              {" "}
              <i className="fas fa-book text-white"></i>
              <Link
                to="/dashboard/addBook"
                style={{
                  textDecoration: "none",
                  color: "#f1f1f1",
                  fontSize: "20px",
                  marginLeft: "5px",
                  fontFamily: "Oswald",
                  cursor: "pointer",
                }}
              >
                {" "}
                Add Book{" "}
              </Link>{" "}
            </li>
            <hr style={{ color: "white" }} />
            <li>
              {" "}
              <i className="fas fa-users text-white"></i>
              <Link
                to="/dashboard/manageStudent"
                style={{
                  textDecoration: "none",
                  color: "#f1f1f1",
                  fontSize: "20px",
                  marginLeft: "5px",
                  fontFamily: "Oswald",
                  cursor: "pointer",
                }}
              >
                {" "}
                Manage Students{" "}
              </Link>{" "}
            </li>
            <hr style={{ color: "white" }} />
            <li>
              {" "}
              <i className="fas fa-registered text-white"></i>
              <Link
                to="/dashboard/stuReqIssue"
                style={{
                  textDecoration: "none",
                  color: "#f1f1f1",
                  fontSize: "20px",
                  marginLeft: "5px",
                  fontFamily: "Oswald",
                  cursor: "pointer",
                }}
              >
                {" "}
                Issue Request{" "}
              </Link>{" "}
            </li>
            <hr style={{ color: "white" }} />
            <li>
              {" "}
              <i className="fas fa-book text-white"></i>{" "}
              <Link
                to="/dashboard/Recommandation"
                style={{
                  textDecoration: "none",
                  color: "#f1f1f1",
                  fontSize: "20px",
                  marginLeft: "5px",
                  fontFamily: "Oswald",
                  cursor: "pointer",
                }}
              >
                {" "}
                Book Recommandation{" "}
              </Link>{" "}
            </li>
            <hr style={{ color: "white" }} />
            <li>
              {" "}
              <i className="fas fa-book text-white"></i>{" "}
              <Link
                to="/dashboard/allissuedBook"
                style={{
                  textDecoration: "none",
                  color: "#f1f1f1",
                  fontSize: "20px",
                  marginLeft: "5px",
                  fontFamily: "Oswald",
                  cursor: "pointer",
                }}
              >
                {" "}
                All Issued Book{" "}
              </Link>{" "}
            </li>
            <hr style={{ color: "white" }} />
            <li>
              {" "}
              <i className="fas fa-book text-white"></i>{" "}
              <Link
                to="/dashboard/issue_return"
                style={{
                  textDecoration: "none",
                  color: "#f1f1f1",
                  fontSize: "20px",
                  marginLeft: "5px",
                  fontFamily: "Oswald",
                  cursor: "pointer",
                }}
              >
                {" "}
                Today Issue Book{" "}
              </Link>{" "}
            </li>
            <hr style={{ color: "white" }} />
            <li>
              {" "}
              <i className="fas fa-book text-white"></i>{" "}
              <Link
                to="/dashboard/returnBook"
                style={{
                  textDecoration: "none",
                  color: "#f1f1f1",
                  fontSize: "20px",
                  marginLeft: "5px",
                  fontFamily: "Oswald",
                  cursor: "pointer",
                }}
              >
                {" "}
                Today Return Book{" "}
              </Link>{" "}
            </li>
            <hr style={{ color: "white" }} />
            <li>
              {" "}
              <i className="fas fa-users text-white"></i>{" "}
              <Link
                to="/dashboard/addEmployee"
                style={{
                  textDecoration: "none",
                  color: "#f1f1f1",
                  fontSize: "20px",
                  marginLeft: "5px",
                  fontFamily: "Oswald",
                  cursor: "pointer",
                }}
              >
                {" "}
                Add Employee{" "}
              </Link>{" "}
            </li>
            <hr style={{ color: "white" }} />
          </>
        ) : (
          <>
            {/* <li> <i className="fas fa-users"></i> 
                    <Link  to="/dashboard/manageStudent"   style={{textDecoration:"none",color:"#f1f1f1",fontSize:"20px",marginLeft:"5px"}}> Borrowed Book</Link>  </li> */}
            {/* <hr style={{color:"white"}} /> */}
            <li>
              {" "}
              <i className="fas fa-registered text-white"></i>
              <Link
                to="/dashboard/RecomBook"
                style={{
                  textDecoration: "none",
                  color: "#f1f1f1",
                  fontSize: "20px",
                  marginLeft: "5px",
                  fontFamily: "Oswald",
                  cursor: "pointer",
                }}
              >
                {" "}
                Recommended Book{" "}
              </Link>{" "}
            </li>
            <hr style={{ color: "white" }} />
            <li>
              {" "}
              <i className="fas fa-book text-white"></i>{" "}
              <Link
                to="/dashboard/issuedBook"
                style={{
                  textDecoration: "none",
                  color: "#f1f1f1",
                  fontSize: "20px",
                  marginLeft: "5px",
                  fontFamily: "Oswald",
                  cursor: "pointer",
                }}
              >
                {" "}
                Curently issued Book
              </Link>{" "}
            </li>
            <hr style={{ color: "white" }} />
          </>
        )}

        <li onClick={() => dispatch(logoutUser())}>
          {" "}
          <i className="fas fa-power-off text-white"></i>
          <span
            style={{
              fontSize: "20px",
              color: "#fff",
              marginLeft: "2px",
              fontFamily: "Oswald",
              cursor: "pointer",
            }}
          >
            {" "}
            Logout{" "}
          </span>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
