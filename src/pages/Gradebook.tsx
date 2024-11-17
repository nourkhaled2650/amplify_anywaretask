import requireAuth from "../components/requireAuth";

const Gradebook = requireAuth(() => {
  return <div>Gradebook</div>;
});

export default Gradebook;
