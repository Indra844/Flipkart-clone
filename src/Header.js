import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { Input } from "@material-ui/core";
import { auth } from "./firebase";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 800,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    outline: 0,
  },
}));

function Header() {
  const history = useHistory();
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [{ basket, user }, dispatch] = useStateValue();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: userName,
        });
      })
      .catch((error) => alert(error.message));
    setPassword("");
    setEmail("");
    setUserName("");
    setSignUp(false);
  };
  const userLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    setEmail("");
    setPassword("");
    setOpen(false);
  };
  const signOut = () => {
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__left__icons" onClick={(e) => history.push("/")}>
          <img
            className="header__left__imageIcon"
            src="https://www.gizbot.com/img/2015/07/29-1438173720-23-1437653888-flipkart-krishnendu-chaudhury.jpg"
            alt=""
          />
          <h4>Flipkart</h4>
        </div>
      </div>
      <div className="header__center">
        <div className="header__left__search">
          <input
            className="header__left__input"
            type="text"
            placeholder="Search"
          />
          <SearchIcon className="search__icon" />
        </div>
      </div>
      <div className="header__right">
        {user === null ? (
          <div>
            <Button className="login__button" onClick={() => setOpen(true)}>
              Login
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
              <div style={modalStyle} className={classes.paper}>
                <div className="login__modal">
                  <div className="modal__left">
                    <div className="login__text">
                      <h1>LOGIN</h1>
                      <p>
                        Get access to your Orders, Wishlist and Recommendations
                      </p>
                    </div>
                    <img
                      className="modal__image"
                      src="https://themetrust.com/wp-content/uploads/2018/04/custom_login_cover.jpg"
                      alt=""
                    />
                  </div>
                  <form
                    className="modal__form"
                    onClick={(e) => e.preventDefault()}
                  >
                    <div className="avatar__container">
                      <Avatar
                        className="login__avatar"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgKI5AvNeOzxaidxKHqi_Er-SjmWFZfSySLA&usqp=CAU"
                      />
                    </div>
                    <Input
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                      type="submit"
                      className="login__btn"
                      onClick={userLogin}
                    >
                      LOGIN
                    </Button>
                    <Button
                      className="login__btn"
                      onClick={() => {
                        setSignUp(true);
                        setOpen(false);
                      }}
                    >
                      SignUp
                    </Button>
                  </form>
                </div>
              </div>
            </Modal>
            <Modal open={signUp} onClose={() => setSignUp(false)}>
              <div style={modalStyle} className={classes.paper}>
                <div className="login__modal">
                  <form className="modal__form">
                    <div className="avatar__container">
                      <Avatar
                        className="login__avatar"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgKI5AvNeOzxaidxKHqi_Er-SjmWFZfSySLA&usqp=CAU"
                      />
                    </div>
                    <Input
                      type="text"
                      placeholder="Username"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                    <Input
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                      type="submit"
                      className="login__btn"
                      onClick={userSignUp}
                    >
                      SignUp
                    </Button>
                  </form>
                </div>
              </div>
            </Modal>
          </div>
        ) : (
          <p>
            {user.displayName} <Button onClick={signOut}>SignOut</Button>
          </p>
        )}
        <div className="header__right__icons">
          <h4>More</h4>
          <ExpandMoreIcon fontSize="small" className="expand__more" />
        </div>
        <div
          className="header__right__icons"
          onClick={(e) => history.push("/checkout")}
        >
          <ShoppingCartIcon />
          <p>
            <span className="basket_count">{basket.length}</span>
          </p>
          <h4>Cart</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
