import {describe, it, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

describe("EditableToDo", function () {
    const testTodo =
        { id:4, title: "celebrate bday", description: "for dinner", priority:1 }

  it("renders without crashing", function () {
    // const mockRemove = vi.spyOn(update)
    // const mockUpdate = vi.spyOn(update)
    render(<EditableTodo todo={testTodo}  />);
  });

//   it("matches snapshot", function () {
//     const { container } = render(<TopTodo todos={testTodos} />)
//     expect(container).toMatchSnapshot();
//   });

//   it ("rendered contains expected", function () {
//     const { container } = render(<TopTodo todos={testTodos} />)
//     const topTodo = container.querySelector(".Todo")
//     expect(topTodo).toContainHTML("celebrate");
//   });

//   it ("did not render if not topTodo", function () {
//     const { container } = render(<TopTodo todos={testTodos} />)
//     const topTodo = container.querySelector(".Todo")
//     expect(topTodo).not.toContainHTML("buca di peppo");
//   });
});

