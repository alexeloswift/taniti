import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("stay", "routes/stay.tsx"),
  route("taniti", "routes/taniti.tsx"),
  route("contact", "routes/contact.tsx"),
  route("faqs", "routes/faqs.tsx"),
  route("underConstruction", "routes/underConstruction.tsx"),

] satisfies RouteConfig;
