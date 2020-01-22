import moxios from "moxios";
import { testStore } from "../../../utils";
import { fetch_posts } from "./index";

describe("Fetch Posts", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is update correctly", () => {
    const expectedRes = [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
          "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
          "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      }
    ];

    const store = testStore();
    moxios.wait(() => {
      const axiosReq = moxios.requests.mostRecent();
      axiosReq.respondWith({
        code: 200,
        response: expectedRes
      });
    });

    return store.dispatch(fetch_posts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedRes);
    });
  });
});
