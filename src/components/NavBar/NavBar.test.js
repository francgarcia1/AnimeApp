import NavBar from "./index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { storeTest } from "../../Mocks/mockStore";

const mockstore = configureMockStore([thunk]);
describe("links and redirects links working properly", () => {
  it("Renders NavBar component", () => {
    const store = mockstore(storeTest);
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>
    );
    expect(wrapper.find("Link").length).toEqual(3);
  });
});
