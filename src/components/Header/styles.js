import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;

  .nav-section,
  .user-section {
    display: flex;
  }

  .nav-toggle {
    margin-right: 1rem;

    @media (min-width: 700px) {
      display: none;
    }
  }

  .large-nav {
    display: none;
  }

  .avatar {
    width: 30px;
    height: 30px;
  }

  .cart-button {
    position: relative;
    margin-right: 1rem;
  }

  .items-bubble {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -0.5rem;
    right: -0.2rem;
    border-radius: 50%;
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 1;
    width: 1rem;
    height: 1rem;
    background: black;
    color: white;
  }

  @media (min-width: 700px) {
    .large-nav {
      display: block;
    }
  }
`;

export const StyledMobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: white;
  padding: 1rem;
  width: 250px;
  z-index: 3;
  transform: ${({ isOpen }) => (isOpen ? 'translate(0)' : 'translate(-500px)')};
  transition: transform 200ms ease-in-out;

  .close-btn {
    margin-bottom: 2rem;
  }

  @media (min-width: 700px) {
    nav {
      display: none;
    }
  }
`;

export const StyledCart = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  right: 0.5rem;
  transform: translateY(60px);

  border-radius: 10px;
  padding: 1rem 1rem 1.5rem 1rem;
  background: white;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.4);

  .cart-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5rem;

    ::before {
      content: '';
      position: absolute;
      left: 0;
      top: 3.5rem;
      height: 1px;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  .item {
    display: flex;
    justify-content: space-between;

    .item-main {
      display: flex;
      gap: 0.75rem;
      align-items: center;

      span {
        font-weight: 600;
      }
    }

    .thumbnail {
      width: 50px;
      height: 50px;
      border-radius: 5px;
    }
  }

  .total {
    margin: 1rem 0;
  }
`;

export const StyledNav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 700px) {
      flex-direction: row;
      align-items: center;
      margin-left: 2rem;
    }
  }
`;
