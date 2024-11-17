import requireAuth from "../components/requireAuth";

const Announcement = requireAuth(() => {
  return <div>Announcement</div>;
});

export default Announcement;
