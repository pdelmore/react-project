import React from 'react';
import { ListItem, ListItemText, Checkbox } from '@mui/material';
import { Task } from './types';
import { CheckCircleOutline, FavoriteBorder, TaskAlt } from '@mui/icons-material';

interface TaskItemProps {
    task: Task;
    handleToggleTask: (id: number) => void;
}

export default function TaskItem({ task, handleToggleTask }: TaskItemProps) {
    return (
        <ListItem style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <Checkbox
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
                color="success"
                size='large'
                icon={<CheckCircleOutline />}
                checkedIcon={<TaskAlt />}
            />
            <ListItemText primary={task.text} />
        </ListItem>
    );
}
