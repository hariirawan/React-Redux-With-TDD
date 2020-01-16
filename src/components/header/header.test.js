import React from "react";
import { shallow } from "enzyme";
import Header from "./header";
import { findByTestAttr } from "../../../utils";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Component Header", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  //harus dibuat tampa kesalahan
  it("Header it should render without errors", () => {
    const wrapper = findByTestAttr(component, "header");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    const logo = findByTestAttr(component, "logo");
    expect(logo.length).toBe(1);
  });
});
