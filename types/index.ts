export type ID = string;

interface Column{
    id: ID;
    title: string;
    task: Task[];
    
}

interface Task{
    id: ID;
    title: string;
    createAt: Date;
    
}