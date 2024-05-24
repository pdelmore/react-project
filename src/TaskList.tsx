import React from 'react';
import { List } from '@mui/material';
import TaskItem from './TaskItem';
import { Task } from './types';

interface TaskListProps {
    tasks: Task[];
    handleToggleTask: (id: number) => void;
}

export default function TaskList({ tasks, handleToggleTask }: TaskListProps) {
    return (
        <List >
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} handleToggleTask={handleToggleTask} />
            ))}
        </List>
    );
}
