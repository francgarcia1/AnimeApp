import Card from "./index";
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
          <Card />
        </Router>
      </Provider>
    );
    expect(wrapper.props().includedProp).toEqual(storeTest.anime.top.title);
  });

  it("Test Card component img", () => {
    const store = mockstore(storeTest);
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Card />
        </Router>
      </Provider>
    );
    expect(wrapper.props().includedProp).toEqual(storeTest.anime.top.image_url);
  });
});
