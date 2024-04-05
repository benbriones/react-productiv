import {describe, it, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";

describe("TopTodo", function () {
    const testTodos = [
        { id:4, title: "celebrate bday", description: "for dinner", priority:1 },
        { id:3, title: "eat carbonara", description:"buca di peppo", priority:2 },
        { id:2, title: "mow the lawn", description:"garden things", priority:3 }
    ]

  it("renders without crashing", function () {
    render(<TopTodo todos={testTodos} />);
  });

  it("matches snapshot", function () {
    const { container } = render(<TopTodo todos={testTodos} />)
    expect(container).toMatchSnapshot();
  });

  it ("rendered contains expected", function () {
    const { container } = render(<TopTodo todos={testTodos} />)
    const topTodo = container.querySelector(".Todo")
    expect(topTodo).toContainHTML("celebrate");
  });

  it ("did not render if not topTodo", function () {
    const { container } = render(<TopTodo todos={testTodos} />)
    const topTodo = container.querySelector(".Todo")
    expect(topTodo).not.toContainHTML("buca di peppo");
  });
});

