import React from "react";
import Headline from "./headline";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../utils";
import { checkPropTypes } from "prop-types";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Component Headline", () => {
  describe("Check type props", () => {
    const modelProps = {
      title: "Header",
      desc: "Descripsi",
      people: [
        {
          name: "Hari Irawan",
          address: "Jerua",
          email: "hari@gmail.com",
          onlineStatus: true
        }
      ]
    };

    const propsError = checkPropTypes(
      Headline.propTypes,
      modelProps,
      "props",
      Headline.name
    );
    expect(propsError).toBeUndefined();
  });

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
