  import React, { useState } from "react";
  import "./Header.css";
  import { logo } from "../../styles/index";
  import SearchIcon from "@material-ui/icons/Search";
  import { Link } from "react-router-dom";
  import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
  import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
  import { useNavigate } from "react-router-dom";
  import { auth } from "../firebase";
  import { onAuthStateChanged, signOut } from "firebase/auth";

  const Header = ({ data, selectedItems }) => {
    console.log(data, "header");

    const navigate = useNavigate();

    const resetSearch = () => {
      setSearch("");
    };

    const [showModal, setShowModal] = useState(false); 
    const [search, setSearch] = useState();
    const [showAll, setShowAll] = useState(false);
    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const handleAuthentication = async () => {
      if (user) {
        auth.signOut();
      }
    };

    // const onClick = (itemId) => {
    //   const filteredItems = data.filter((item) => item.id === itemId);
    //   console.log(filteredItems);
    //   navigate(`/Filter/${itemId}`);
    // };

    return (
      <div className="header">
        <Link to="/">
          <img className="header__logo" src={logo} />
        </Link>

        <div className="header__search">
          <span  className="arrow">
            All<span></span>
            <ArrowDropDownIcon />
          </span>
          {/* {showAll && (
            <div>
              <ul className="list">
                {data.map((item) => {
                  console.log(item);
                  return (
                    <div onClick={() => onClick(item.category)}>
                      {" "}
                      <li className="it" key={item.id}>
                        {item.category}{" "}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          )} */}

          <input
            className="header__searchInput"
            type="text"
            value={search}
            onChange={(e) => {setSearch(e.target.value)
            // setShowModal(true)
              setShowModal(e.target.value);
            
              }}
              
          />
          <SearchIcon className="header__searchIcon" />
        {showModal && (
          <div>
            <ul className="list">
              {data.map((item) => {
                console.log(item);
                

                return (
                  <div >
                    {" "}
                    <li className="it" key={item.id}  onClick={() => {
                          navigate(`/product-details/${item.id}`);
                          resetSearch();
                          setShowModal(false);
                        }}>
                      {item.title}{" "}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        )}

        </div>

        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header_option">
              <span className="header_optionLineOne">
                Hello {!user ? "Guest" : user?.email?.includes('@') ? user.email.split('@')[0] : user.email}
              </span>
              <div className="header_optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </div>
            </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>

          <Link to="/cart">
            <div className="basket">
              <ShoppingCartIcon style={{ marginTop: "-5px" }} />

              <div className="count">{selectedItems.length}</div>
            </div>
          </Link>
        </div>
      </div>
    );
  };

  export default Header;
