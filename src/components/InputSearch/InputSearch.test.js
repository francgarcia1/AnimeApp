import InputSearch from "./index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { storeTest } from "../../Mocks/mockStore";

const mockstore = configureMockStore([thunk]);
describe("Testing props", () => {
  it("Test Card component tittle", () => {
    const store = mockstore(storeTest);
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <InputSearch />
        </Router>
      </Provider>
    );
    expect(wrapper.find(".form-classname").at(0).props().placeholder).toEqual(
      "Search Animes"
    );
  });
});
