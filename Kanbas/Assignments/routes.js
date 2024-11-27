import * as dao from "./dao.js"
export default function AssignmentsRoutes(app) {
    app.delete("/api/assignments/:assignmentID", async (req, res) => {
        const { assignmentID } = req.params;
        const status = await dao.deleteAssignment(assignmentID);
        res.send(status);
    });
    app.put("/api/assignments/:assignmentID", async (req, res) => {
        const { assignmentID } = req.params;
        const assignmentUpdates = req.body;
        const status = await dao.updateAssignment(assignmentID, assignmentUpdates);
        res.send(status);
    });
    app.get("/api/assignments"), async (req, res) => {
        const{courseID} = req.params;
        const status = await dao.findAssignmentsForCourse(courseID);
        res.send(status);
    }
}