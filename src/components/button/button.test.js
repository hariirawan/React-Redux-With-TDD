import React from "react";
import { shallow } from "enzyme";
import ButtonShared from "./button";
import { checkType, findByTestAttr } from "../../../utils";

describe("Button Components", () => {
  describe("Cek tipe tombol", () => {
    it("Seharusnya tidak ada peringatan", () => {
      const schema = {
        text: "button1",
        emitEvent: () => {}
      };

      const propsError = checkType(ButtonShared, schema);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        text: "button1",
        emitEvent: () => {}
      };

      wrapper = shallow(<ButtonShared {...props} />);
    });

    it("Render sebuah tombol", () => {
      const button = findByTestAttr(wrapper, "button-shared");
      expect(button.length).toBe(1);
    });
  });
});
