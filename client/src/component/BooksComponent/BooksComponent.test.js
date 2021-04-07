import React from "react";
import { shallow } from "enzyme";
import BooksComponent from "./BooksComponent";

describe("BooksComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<BooksComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
