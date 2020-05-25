import React from 'react';
import Users from "../Users";
import { render, fireEvent, act, waitForDomChange } from "@testing-library/react";
import * as UserContext from '../UserContext';
import * as UserService from '../UserService';

describe("UserList", () => {
    beforeEach(() => {
        jest.spyOn(UserService, 'deleteUser').mockImplementationOnce(() => {
            return Promise.resolve();
        })

        jest.spyOn(UserService, 'fetchUsers').mockImplementationOnce(() => {
            return Promise.resolve([{
                "id": 1,
                "firstName": "Haily",
                "lastName": "Cana",
                "email": "hcana0@ehow.com",
                "gender": "Female",
                "age": 18
              },
              {
                "id": 2,
                "firstName": "Dorella",
                "lastName": "Coucha",
                "email": "dcoucha1@salon.com",
                "gender": "Female",
                "age": 83
            }])
        })
    })

    it("Rerender after remove user", async () => {
        const utils = render(<UserContext.UserProvider><Users /></UserContext.UserProvider>);
        await waitForDomChange();
        
        expect(utils.getAllByText('Usuń').length).toBe(2); 
        expect(utils.getByTestId('user-1')).toBeDefined();
        fireEvent.click(utils.getAllByText('Usuń')[0]);
        await waitForDomChange();

        expect(utils.queryAllByTestId('user-1')[0]).not.toBeDefined();
    })
})