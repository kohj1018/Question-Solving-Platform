import HomePage from "./pages/HomePage/HomePage";
import QuestionsPage from "./pages/QuestionsPage/QuestionsPage";

export default [
  {
    path: "/",
    component: HomePage,
    private: false
  },
  {
    path: "/questions",
    component: QuestionsPage,
    private: false
  },
  {
    path: "/study-group",
    component: HomePage,
    private: false
  },
  {
    path: "/project-team",
    component: HomePage,
    private: false
  },
  {
    path: "/survey",
    component: HomePage,
    private: false
  },
  {
    path: "/sign-in",
    component: HomePage,
    private: true
  },
]