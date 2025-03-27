import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "pages/about.tsx"),
  route("contact", "pages/contact.tsx"),
  route("login", "pages/auth/login.tsx"),
  route("signup", "pages/auth/signup.tsx"),
  route("dashboard", "pages/dashboard/index.tsx"),
] satisfies RouteConfig;
