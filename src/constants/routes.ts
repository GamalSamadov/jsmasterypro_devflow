const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  SIGN_IN_WITH_OAUTH: `signin-with-oauth`,
  ASK_QUESTION: "/ask-question",
  QUESTION: (id: string) => `/questions/${id}`,
  COLLECTION: "/collection",
  COMMUNITY: "/community",
  TAG: (id: string) => `/tags/${id}`,
  JOBS: "/jobs",
  PROFILE: (id: string) => `/profile/${id}`,
};

export default ROUTES;
