import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoList from "./TodoList";

Enzyme.configure({ adapter: new Adapter() });

describe("Todo", () => {
  const subject = mount(<TodoList />);
  it("Check header todolist", () => {
    expect(subject.find(".title").text()).toBe("Hari Irawan");
  });

  it("Check list", () => {
    expect(subject.find("li")).toHaveLength(3);
  });

  it("Check add new item", () => {
    subject.find("input").instance().value = "Hanafi";
    expect(subject.find("input").instance().value).toEqual("Hanafi");
    subject.find('[type="submit"]').simulate("click");
    expect(subject.find("li")).toHaveLength(4);
    expect(
      subject
        .find("li div span")
        .last()
        .text()
    ).toEqual("Hanafi");
  });
});
