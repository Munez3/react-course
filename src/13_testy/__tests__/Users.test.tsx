import React from 'react';
import Users from "../Users";
import { render } from "@testing-library/react";
import * as UserContext from '../UserContext';

describe("UserList", () => {


    let utils;

    beforeEach(() => {
        utils = render(<Users />);
    })

    it("Renders component without users", () => {
        expect(utils.getByText('Brak wyników')).toBeDefined();
    });

    it("Renders list", () => {
        jest.spyOn(UserContext, 'useUserContext').mockImplementationOnce(() => {
            return {
                users: [{
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
                }],
                addUser: jest.fn(),
                removeUser: jest.fn(),
                getUser: jest.fn(),
                clearChoosenUser: jest.fn()
            }
        });
        const utils = render(<Users />);
        expect(utils.getAllByText('Usuń').length).toBe(2);
        expect(utils.getByTestId("user-1")).toBeDefined();
    })
})