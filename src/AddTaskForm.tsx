import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface AddTaskFormProps {
    handleAddTask: (taskText: string) => void;
}

export default function AddTaskForm({ handleAddTask }: AddTaskFormProps) {
    const [input, setInput] = useState('');

    const submitTask = () => {
        handleAddTask(input);
        setInput('');
    };

    return (
        <div style={{ display: 'flex', marginBottom: 20 }}>
            <TextField
                fullWidth
                label="Add new list item"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                variant="outlined"
                color='success'
                focused
            />
            <Button variant="contained" color="success" onClick={submitTask} style={{ marginLeft: 10 }} size='large'>
                Add
            </Button>
        </div>
    );
}
