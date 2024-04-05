import {describe, it, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

describe("todo", function () {
  it("renders without crashing", function () {
    render(<Todo id={1} title="cook" description="dinner" priority={1}/>);
  });

  it("matches snapshot", function () {
    const { container } = render(<Todo id={1} title="cook" description="dinner" priority={1}/>)
    expect(container).toMatchSnapshot();
  });

  it ("rendered contains expected", function () {
    const { container } = render(<Todo id={1} title="cook" description="dinner" priority={1}/>)
    const toDo = container.querySelector(".Todo")
    expect(toDo).toContainHTML("cook");
  });
});

