import requireAuth from "../components/requireAuth";

const Performance = requireAuth(() => {
  return <div>Performance</div>;
});

export default Performance;
