import { describe, it, expect } from "vitest";

import React from "react";
import { fireEvent, queryByText, render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";


describe("EditableToDoList", function () {
    const testTodos =
        [{ id: 4, title: "celebrate bday", description: "for dinner", priority: 1 },
        { id: 5, title: "eat pocky", description: "mens pocky only", priority: 2 },
        { id: 6, title: "get dessert", description: "afters only", priority: 3 }];

    it("renders without crashing", function () {

        render(<EditableTodoList todos={testTodos} />);

    });

    it("matches snapshot", function () {

        const { container } = render(<EditableTodoList todos={testTodos} />);
        expect(container).toMatchSnapshot();

    });



    it ("contains all editable todos", function () {
        // const { container } = render(<EditableTodoList todos={testTodos} />)
        const rendered = render(<EditableTodoList todos={testTodos} />)

        expect(rendered.queryByText("celebrate bday")).toBeInTheDocument
        expect(rendered.queryByText("eat pocky")).toBeInTheDocument
        expect(rendered.queryByText("get dessert")).toBeInTheDocument


        const editBtns = rendered.queryAllByText('Edit')
        expect(editBtns.length).toEqual(3)
        // expect()


      });





});