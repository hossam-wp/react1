import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom'

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.h1`
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: black;
  ${mobile({ fontSize: "24px" })}
`;


const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Navbar = () => {
  return (
    <div className="container">
    <Container>
      <Wrapper>
        <Left>
        <Link className="navbar-brand " to="home"><h1>LAMA</h1></Link>
        </Left>
        
        <Right>
        <Link className="nav-link fnav" to="home">Home</Link>
        <Link className="nav-link fnav" to="product">Product</Link>
        <Link className="nav-link fnav" to="list">ProductList</Link>
        <Link className="nav-link fnav" to="rgis">Register</Link>
        <Link className="nav-link fnav" to="logn">Login</Link>
          <Link to="crt">
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </Link>
        </Right>
      </Wrapper>
    </Container>
    </div>
    
  );
};

export default Navbar;
