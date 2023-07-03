import React from "react";
import { Tab } from "../tab";

import { render, screen, waitFor } from "@testing-library/react";




describe('tab-component', ()=>{
    it("checks if tab component renders properly", ()=>{

        render(<Tab/>);
        const tabElement = screen.getByTestId('tab-component')
        expect(tabElement).toBeInTheDocument()

    })
    it("checks if table renders properly",  ()=>{

        render(<Tab/>);
        const trElement = screen.getAllByRole(`row`)
        expect(trElement.length).toBe(9)

    })
})