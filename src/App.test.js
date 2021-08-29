import React from "react";
import { shallow } from "enzyme";
import Footer from "./components/Footer";
import Ticket from "./components/Ticket";
import App from "./components/App/App";

it("should render Ticket and Footer", () => {
  const wrapper = shallow(<App />);
  const footer = wrapper.find(Footer);
  const ticket = wrapper.find(Ticket);

  expect(footer.exists()).toBe(true);
  expect(ticket.exists()).toBe(true);
});
