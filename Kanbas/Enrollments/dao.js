import Database from '../Database/index.js';

export function fetchAllEnrollments() {
  return Database.enrollments;
}

export function fetchAllEnrollmentsForUser(userId){
  const { enrollments } = Database;
  return enrollments.filter((enrollment) => enrollment.user === userId);
}

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  const newEnrollment = {
    _id: Date.now().toString(),
    user: userId,
    course: courseId,
  };
  enrollments.push(newEnrollment);
  return enrollments;

}

export function deleteEnrollment(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
  );
}
