import requireAuth from "../components/requireAuth";

const Courses = requireAuth(() => {
  return <div>Courses</div>;
});

export default Courses;
