import { css } from "@emotion/react";

export const Outer = css`
  margin: auto;
  border-radius: 16px;
  overflow: hidden;
  width: 765px;
  height: fit-content;
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const GreetContainerDivs = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  place-items: center;
  height: 525px;
  margin: 0;
  padding: 0;
  width: 50%;
  transition: all 0.5s ease-in;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const HeadingGreetText = css`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 12px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const SubGreetHeadings = css`
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const ToggleBtns = css`
  border-width: 1px;
  border-style: double;
  width: 130px;
  height: 35px;
  place-items: center;
  border-radius: 50px;
  font-size: 16px;
  margin-top: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const FormsDiv = css`
  width: 50%;
  text-align: center;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const TopFormHeading = css`
  font-size: 42px;
  font-weight: 600;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const IconsContDiv = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 160px;
  margin: 15px auto;

  div {
    cursor: pointer;
    border-radius: 50%;
    font-size: 18px;
    border-width: 1px;
    border-style: solid;
    padding: 8px;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const OrText = css`
  font-size: 16px;
  font-weight: 500;
  margin: 18px 0px 8px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const InpContainerDiv = css`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  p {
    font-size: 16px;
    margin-top: -10px;
  }

  input {
    background-color: #f1f1f1;
    border-radius: 3px;
    padding: 8px 15px;
    font-size: 16px;
    width: 80%;
  }
  input:focus {
    border: none;
    outline: none;
  }

  button {
    border-width: 1px;
    border-style: solid;
    width: 130px;
    height: 35px;
    place-items: center;
    border-radius: 50px;
    font-size: 16px;
    margin-top: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

/* 

export const Temp = css`
  
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

*/
