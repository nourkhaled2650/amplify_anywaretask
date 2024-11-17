import requireAuth from "../components/requireAuth";

const Schedule = requireAuth(() => {
  return <div>Schedule</div>;
});

export default Schedule;
