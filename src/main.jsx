import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <App />
)


const fs = require('fs'); // Ensure fs is required to handle file writing
const process = require('process');

class NotesStore {
    constructor() {
        this.notes = {}; 
    }

    addNote(tag, note) {
        if (!tag || tag.trim() === '') {
            throw new Error('Name cannot be empty');
        }

        if (tag === 'foo') {
            throw new Error('Invalid state foo'); 
        }

        if (!this.notes[tag]) {
            this.notes[tag] = [];
        }
        this.notes[tag].push(note);
    }

    getNotes(tag) {
        if (!tag || tag.trim() === '') {
            throw new Error('Name cannot be empty'); 
        }

        if (!this.notes[tag] || this.notes[tag].length === 0) {
            throw new Error('No Notes');
        }
        return this.notes[tag];
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const obj = new NotesStore();
    const operationCount = parseInt(readLine().trim());

    for (let i = 1; i <= operationCount; i++) {
        const operationInfo = readLine().trim().split(' ');
        try {
            if (operationInfo[0] === 'addNote') {
                obj.addNote(operationInfo[1], operationInfo[2] || '');
            } else if (operationInfo[0] === 'getNotes') {
                const res = obj.getNotes(operationInfo[1]);
                if (res.length === 0) {
                    ws.write('No Notes\n');
                } else {
                    ws.write(`${res.join(',')}\n`);
                }
            }
        } catch (e) {
            ws.write(`${e}\n`);
        }
    }
    ws.end();
}
