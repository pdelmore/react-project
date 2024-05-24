import React, { useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import { Task } from "./types";
import useLocalStorage from "./hooks/useLocalStorage";
import Settings from "./ClearLocalStorage";
import { ErrorOutline } from "@mui/icons-material";

export default function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", [] as Task[]);
  const [alertBool, setAlertBool] = useState(false);
  const [alertText, setAlertText] = useState("");

  const handleAddTask = (newTaskText: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      text: newTaskText,
      completed: false,
    };

    if (newTask.text === "") {
      setAlertBool(true);
      setAlertText("Please enter a task before adding it to the list.");
      return;
    }

    setAlertBool(false);
    setAlertText("");

    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const completedTasksCount = tasks.filter((task) => task.completed).length;

  const handleDeleteCompletedTasks = () => {
    const incompleteTasks = tasks.filter((task) => !task.completed);
    setTasks(incompleteTasks);
  };

  return (
    <>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
        padding={10}
      >
        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <Card
            variant="outlined"
            sx={{ boxShadow: 20, borderRadius: 10, backgroundColor: "#F5EFE6" }}
          >
            <CardContent>
              <Container maxWidth="sm">
                <Typography
                  variant="h3"
                  style={{ textAlign: "center", margin: "10px 0" }}
                >
                  Daily To-Do List
                </Typography>
                <br />
                <Typography style={{ marginBottom: "30px" }}>
                  Welcome to your daily to-do list! Add tasks to the list below
                  and check them off as you complete them. Your tasks will be
                  saved in your browser's local storage so you can come back and
                  finish them later.
                </Typography>
                <AddTaskForm handleAddTask={handleAddTask} />

                {alertBool && (
                  <Alert
                    icon={<ErrorOutline />}
                    severity="error"
                    variant="outlined"
                    onClose={() => {setAlertBool(false); setAlertText("")}}
                  >
                    {alertText}
                  </Alert>
                )}
                <TaskList tasks={tasks} handleToggleTask={handleToggleTask} />
              </Container>

              <Grid item paddingBottom={4}>
                <Container
                  sx={{ borderTop: 1, borderColor: "#CCCCCC", padding: 2 }}
                >
                  <Typography>
                    Completed tasks: {completedTasksCount} / {tasks.length}
                  </Typography>

                  <Button
                    variant="outlined"
                    color="success"
                    onClick={handleDeleteCompletedTasks}
                    disabled={completedTasksCount === 0}
                  >
                    Clear Completed Tasks
                  </Button>
                </Container>
              </Grid>

              <Grid item>
                <Settings />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
