import HomePage from "./pages/HomePage/HomePage";
import QuestionsPage from "./pages/QuestionsPage/QuestionsPage";
import QuestionDetailPage from "./pages/QuestionDetailPage/QuestionDetailPage";

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
    path: "/questions/:id",
    component: QuestionDetailPage,
    private: true
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