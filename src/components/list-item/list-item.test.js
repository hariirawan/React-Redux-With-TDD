import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkType } from "../../../utils";
import ListItem from "./list-item";

describe("ListItem Components", () => {
  describe("Cek tipe list-item", () => {
    it("Seharusnya tidak ada warning", () => {
      const schema = {
        title: "Hallow",
        desc: "Hallow gua desc"
      };

      const propsError = checkType(ListItem, schema);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Hallow",
        desc: "Hallow gua desc"
      };

      wrapper = shallow(<ListItem {...props} />);
    });

    it("Render tanpa error", () => {
      const CompListItem = findByTestAttr(wrapper, "list-item");
      expect(CompListItem.length).toBe(1);
    });

    it("Render title", () => {
      const title = findByTestAttr(wrapper, "list-item-title");
      expect(title.length).toBe(1);
    });

    it("Render desc", () => {
      const desc = findByTestAttr(wrapper, "list-item-desc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Component tidak akan dirender", () => {
    let wrapper;
    beforeEach(() => {
      const schema = {
        desc: "Testing deskripsi"
      };
      wrapper = shallow(<ListItem {...schema} />);
    });

    it("Component ini tidak akan ditampilkan jika tidak ada title", () => {
      let component = findByTestAttr(wrapper, "list-item");
      expect(component.length).toBe(0);
    });
  });
});
