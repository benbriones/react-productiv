import { describe, it, expect } from "vitest";

import { render, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";


describe("TodoApp", function () {

    const testTodos =
        [{ id: 4, title: "celebrate bday", description: "for dinner", priority: 1 },
        { id: 5, title: "eat pocky", description: "mens pocky only", priority: 2 },
        { id: 6, title: "get dessert", description: "afters only", priority: 3 }];


    it("renders without crashing", function () {
        render(<TodoApp initialTodos={testTodos} />);
    });

    it("matches snapshot", function () {
        const { container } = render(<TodoApp initialTodos={testTodos} />);
        expect(container).toMatchSnapshot();
    });

    it("successfully submits a new todo", function () {
        const { getByLabelText, queryByText, container } = render(<TodoApp initialTodos={testTodos} />);

        const titleInput = getByLabelText("Title");
        const descriptionInput = getByLabelText("Description");
        const priorityInput = getByLabelText("Priority:");
        const addBtn = queryByText("Gø!");


        fireEvent.change(titleInput, { target: { value: "Get Afters" } });
        fireEvent.change(descriptionInput, { target: { value: "BOGO!!!" } });
        fireEvent.change(priorityInput, { target: { value: 1 } });
        fireEvent.click(addBtn);

        const editableTodoListArea = container.querySelector(".EditableTodoList");

        expect(editableTodoListArea).toContainHTML("Get Afters");
        expect(editableTodoListArea).toContainHTML("BOGO!!!");
        expect(editableTodoListArea).toContainHTML("1");
    });

    it("successfully deletes a todo", function () {
        const deleteTodo = [{ id: 4, title: "celebrate bday", description: "for dinner", priority: 1 }]
        const { queryByText, container } = render(<TodoApp initialTodos={deleteTodo} />);

        const deleteBtn = queryByText("Del");
        fireEvent.click(deleteBtn);

        expect(container).toContainHTML("You have no todos.")
        expect(container).not.toContainHTML("for dinner")
        expect(deleteBtn).not.toBeInTheDocument();
    });

    it("renders blank form after submit", function () {
        const { getByLabelText, queryByText, container } = render(<TodoApp initialTodos={testTodos} />);

        const titleInput = getByLabelText("Title");
        const descriptionInput = getByLabelText("Description");
        const priorityInput = getByLabelText("Priority:");
        const addBtn = queryByText("Gø!");


        fireEvent.change(titleInput, { target: { value: "Get Afters" } });
        fireEvent.change(descriptionInput, { target: { value: "BOGO!!!" } });
        fireEvent.change(priorityInput, { target: { value: 1 } });
        fireEvent.click(addBtn);

        expect(titleInput.value).toBe("");
        expect(descriptionInput.value).toBe("");
        expect(priorityInput.value).toBe("1")
    });

    it("shows 'You have no todos' if no todos", function () {
        const { container } = render(<TodoApp initialTodos={[]} />);

        expect(container).toContainHTML("You have no todos.")
    });

    it("renders top todo correctly", function () {
        const { container } = render(<TodoApp initialTodos={testTodos} />);

        const topTodosArea = container.querySelector(".TodoApp-TopTodo");
        expect(topTodosArea).toContainHTML("celebrate bday");
        expect(topTodosArea).not.toContainHTML("You have no todos.")
    });

    it("edits a todo", function () {
        const editTodo = [{ id: 4, title: "celebrate bday", description: "for dinner", priority: 1 }]
        const { container } = render(<TodoApp initialTodos={editTodo} />);

        const editableTodoListArea = container.querySelector(".EditableTodoList");
        const editButton = container.querySelectorAll(".EditableTodo-toggle")[0]

        fireEvent.click(editButton);

        const titleInput = container.querySelectorAll("#newTodo-title")[0]
        const descriptionInput = container.querySelectorAll("#newTodo-description")[0]
        const submitButton = container.querySelectorAll(".NewTodoForm-addBtn")[0]

        fireEvent.change(titleInput, { target: { value: "eat ice cream" } });
        fireEvent.change(descriptionInput, { target: { value: "BOGO!!!" } });
        fireEvent.click(submitButton)

        expect(editableTodoListArea).toContainHTML("eat ice cream");
        expect(editableTodoListArea).toContainHTML("BOGO!!!");
        expect(editableTodoListArea).not.toContainHTML("for dinner");
        expect(editableTodoListArea).not.toContainHTML("celebrate bday");
    });


});