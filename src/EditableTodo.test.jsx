import {describe, it, expect } from "vitest";

import React from "react";
import { fireEvent, render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

describe("EditableToDo", function () {
    const testTodo =
        { id:4, title: "celebrate bday", description: "for dinner", priority:1 }

  it("renders without crashing", function () {
    // const mockRemove = vi.spyOn(update)
    // const mockUpdate = vi.spyOn(update)
    render(<EditableTodo todo={testTodo}  />);
  });

  it("matches snapshot", function () {
    const { container } = render(<EditableTodo todo={testTodo} />)
    expect(container).toMatchSnapshot();
  });

  it ("rendered contains expected", function () {
    const { container } = render(<EditableTodo todo={testTodo} />)
    const topTodo = container.querySelector(".Todo")
    expect(topTodo).toContainHTML("celebrate");
  });

  it ("renders correct info and edit/delete button", function () {
    const { container } = render(<EditableTodo todo={testTodo} />)
    const topTodo = container.querySelector(".Todo")
    expect(topTodo).toContainHTML("celebrate bday");
    expect(container).toContainHTML("EditableTodo-delBtn");
    expect(container).toContainHTML("EditableTodo-toggle");

  });
  it ("renders correct info when isEditing is true", function () {
    const { container } = render(<EditableTodo todo={testTodo} />)
    const editBtn = container.querySelector(".EditableTodo-toggle");
    fireEvent.click(editBtn)
    expect(container).toContainHTML("NewTodoForm");
    expect(container).not.toContainHTML("EditableTodo-toggle");
    expect(container).not.toContainHTML("EditableTodo-delBt");

  });
});

