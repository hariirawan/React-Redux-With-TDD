import React from "react";
import Headline from "./headline";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Component Headline", () => {
  describe("Ketika ada props", () => {
    let wrapper;
    beforeEach(() => {
      let props = {
        title: "Header",
        desc: "Ini adalah desc"
      };
      wrapper = setUp(props);
    });

    it("Headline tidak boleh salah", () => {
      const component = findByTestAttr(wrapper, "headline");
      expect(component.length).toBe(1);
    });

    it("ketika ada props Title tidak boleh salah", () => {
      const title = findByTestAttr(wrapper, "title");
      expect(title.length).toBe(1);
    });

    it("ketika ada props Desc tidak boleh salah", () => {
      const desc = findByTestAttr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Ketika tidak ada props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("Headline ketika tidak ada props tidak boleh errors", () => {
      const title = findByTestAttr(wrapper, "title");
      expect(title.length).toBe(0);
    });
  });
});
