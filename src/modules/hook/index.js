export default function UseHook({ children, hook, deps = [] }) {
  return children(hook(...deps));
}
