import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 996;

  .nav-section,
  .user-section {
    display: flex;
  }

  .nav-toggle {
    margin-right: 1rem;
  }

  .large-nav {
    display: none;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;

    :hover {
      outline: solid 2px ${({ theme }) => theme.colors.orange};
    }
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
    top: 5px;
    left: 12px;
    border-radius: 10px;
    font-size: 0.7rem;
    font-weight: 700;
    height: 1rem;
    padding: 0 0.5rem;
    background: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.media.minLarge}) {
    padding-bottom: 2.5rem;
    border-bottom: solid 1px ${({ theme }) => theme.colors.lightGrayBlue};
    position: static;

    .large-nav {
      display: block;
    }

    .nav-toggle {
      display: none;
    }

    .user-section {
      position: relative;
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
  z-index: 999;
  transform: ${({ isOpen }) => (isOpen ? 'translate(0)' : 'translate(-500px)')};
  transition: transform 200ms ease-in-out;

  .close-btn {
    margin-bottom: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.media.minLarge}) {
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

  @media (min-width: ${({ theme }) => theme.media.minLarge}) {
    width: 350px;
    left: initial;
    /* right: 2rem; */
  }
`;

export const StyledNav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  a {
    position: relative;
  }

  li {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.grayBlue};

    ::after {
      content: '';
      position: absolute;
      left: 0;
      height: 3px;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.orange};
      top: 68px;
      transform: scaleX(0);
      transition: transform 200ms ease-in-out;
    }

    :hover {
      color: ${({ theme }) => theme.colors.darkGrayBlue};
    }
  }

  @media (min-width: ${({ theme }) => theme.media.minLarge}) {
    ul {
      flex-direction: row;
      align-items: center;
      margin-left: 2rem;
    }

    li:hover::after {
      transform: scaleX(1);
    }
  }
`;
