// AI-Assisted
import React from 'react';
import { Button } from '@mui/material';
import useLocalStorage from './hooks/useLocalStorage';

const Settings = () => {
    const [todos, setTodos] = useLocalStorage('todos', []);

    const handleClearStorage = () => {
        // Clear local storage
        localStorage.clear();

        // Optionally reset state if needed
        setTodos([]);
    };

    return (
        <div>
            <Button variant="contained" color="success" onClick={handleClearStorage} size='large'>
                Clear Local Storage
            </Button>
        </div>
    );
};

export default Settings;
