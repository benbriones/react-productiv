import { describe, it, expect } from "vitest";

import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";


describe("TodoForm", function () {

    it("renders without crashing", function () {
        render(<TodoForm />);
    });

    it("matches snapshot", function () {

        const { container } = render(<TodoForm />);
        expect(container).toMatchSnapshot();

    });


    it("contains correct form input fields", function() {
        const { container } = render(<TodoForm />);

        const title =  container.querySelector("#newTodo-title")
        const description =  container.querySelector("#newTodo-description")
        const priority =  container.querySelector("#newTodo-priority")
        const addBtn =  container.querySelector(".NewTodoForm-addBtn")

        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(priority).toBeInTheDocument();
        expect(addBtn).toBeInTheDocument();

    })

    it("form handles changes", function() {
        const {getByLabelText, queryByText, container} = render(<TodoForm />);
        // get by label is aria text? mocking handlesave?
        const titleInput =  getByLabelText("Title")
        const descriptionInput =  getByLabelText("Description")
        const priorityInput =  getByLabelText("Priority:")

        fireEvent.change(titleInput, {target: { value: "Get Afters"}})
        fireEvent.change(descriptionInput, {target: { value: "BOGO!!!"}})
        fireEvent.change(priorityInput, {target: { value: 1}})

        console.log(titleInput.value)

        expect(titleInput.value).toBe("Get Afters")
        expect(descriptionInput.value).toBe("BOGO!!!")
        expect(priorityInput.value).toBe("1")

    })


});