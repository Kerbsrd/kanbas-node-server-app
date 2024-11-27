import * as enrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {
 app.delete("/api/enrollments/:enrollmentsID", async (req, res) => {
   const { enrollmentsID } = req.params;
   const status = await enrollmentsDao.deleteEnrollment(enrollmentsID);
   res.send(status);
 });

 app.post("/api/enrollments", async (req, res) => {
  const { user, course } = req.body;
  const newEnrollment = await enrollmentsDao.enrollUserInCourse(user, course);
  res.send(newEnrollment);
});

app.get("/api/enrollments/:userId", async (req, res) => {
  const { userId } = req.params;
  const enrollments = await enrollmentsDao.fetchAllEnrollmentsForUser(userId);
  res.send(enrollments);
});
}