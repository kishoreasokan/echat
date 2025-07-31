import { BaseTable } from "@/components/base-table";
import { FastForwardIcon } from "lucide-react";
import {useState} from "react";

export const employees = [
    { id: 1, name: "Alice Johnson", role: "Admin", department: "HR" },
    { id: 2, name: "Bob Smith", role: "Custodian", department: "Maintenance" },
    { id: 3, name: "Charlie Brown", role: "Stamp", department: "Legal" },
    { id: 4, name: "David Miller", role: "Admin", department: "Finance" },
    { id: 5, name: "Eva Green", role: "Custodian", department: "IT" },
    { id: 6, name: "Frank Castle", role: "Stamp", department: "Legal" },
    { id: 7, name: "Grace Lee", role: "Admin", department: "HR" },
    { id: 8, name: "Henry Ford", role: "Custodian", department: "Logistics" },
    { id: 9, name: "Isla Fisher", role: "Stamp", department: "Finance" },
    { id: 10, name: "Jack Black", role: "Admin", department: "Marketing" },
    { id: 1, name: "Alice Johnson", role: "Admin", department: "HR" },
    { id: 2, name: "Bob Smith", role: "Custodian", department: "Maintenance" },
    { id: 3, name: "Charlie Brown", role: "Stamp", department: "Legal" },
    { id: 4, name: "David Miller", role: "Admin", department: "Finance" },
    { id: 5, name: "Eva Green", role: "Custodian", department: "IT" },
    { id: 6, name: "Frank Castle", role: "Stamp", department: "Legal" },
    { id: 7, name: "Grace Lee", role: "Admin", department: "HR" },
    { id: 8, name: "Henry Ford", role: "Custodian", department: "Logistics" },
    { id: 9, name: "Isla Fisher", role: "Stamp", department: "Finance" },
    { id: 10, name: "Jack Black", role: "Admin", department: "Marketing" },
    { id: 1, name: "Alice Johnson", role: "Admin", department: "HR" },
    { id: 2, name: "Bob Smith", role: "Custodian", department: "Maintenance" },
    { id: 3, name: "Charlie Brown", role: "Stamp", department: "Legal" },
    { id: 4, name: "David Miller", role: "Admin", department: "Finance" },
    { id: 5, name: "Eva Green", role: "Custodian", department: "IT" },
    { id: 6, name: "Frank Castle", role: "Stamp", department: "Legal" },
    { id: 7, name: "Grace Lee", role: "Admin", department: "HR" },
    { id: 8, name: "Henry Ford", role: "Custodian", department: "Logistics" },
    { id: 9, name: "Isla Fisher", role: "Stamp", department: "Finance" },
    { id: 10, name: "Jack Black", role: "Admin", department: "Marketing" },
    { id: 1, name: "Alice Johnson", role: "Admin", department: "HR" },
    { id: 2, name: "Bob Smith", role: "Custodian", department: "Maintenance" },
    { id: 3, name: "Charlie Brown", role: "Stamp", department: "Legal" },
    { id: 4, name: "David Miller", role: "Admin", department: "Finance" },
    { id: 5, name: "Eva Green", role: "Custodian", department: "IT" },
    { id: 6, name: "Frank Castle", role: "Stamp", department: "Legal" },
    { id: 7, name: "Grace Lee", role: "Admin", department: "HR" },
    { id: 8, name: "Henry Ford", role: "Custodian", department: "Logistics" },
    { id: 9, name: "Isla Fisher", role: "Stamp", department: "Finance" },
    { id: 10, name: "Jack Black", role: "Admin", department: "Marketing" },
    { id: 1, name: "Alice Johnson", role: "Admin", department: "HR" },
    { id: 2, name: "Bob Smith", role: "Custodian", department: "Maintenance" },
    { id: 3, name: "Charlie Brown", role: "Stamp", department: "Legal" },
    { id: 4, name: "David Miller", role: "Admin", department: "Finance" },
    { id: 5, name: "Eva Green", role: "Custodian", department: "IT" },
    { id: 6, name: "Frank Castle", role: "Stamp", department: "Legal" },
    { id: 7, name: "Grace Lee", role: "Admin", department: "HR" },
    { id: 8, name: "Henry Ford", role: "Custodian", department: "Logistics" },
    { id: 9, name: "Isla Fisher", role: "Stamp", department: "Finance" },
    { id: 10, name: "Jack Black", role: "Admin", department: "Marketing" },
    { id: 1, name: "Alice Johnson", role: "Admin", department: "HR" },
    { id: 2, name: "Bob Smith", role: "Custodian", department: "Maintenance" },
    { id: 3, name: "Charlie Brown", role: "Stamp", department: "Legal" },
    { id: 4, name: "David Miller", role: "Admin", department: "Finance" },
    { id: 5, name: "Eva Green", role: "Custodian", department: "IT" },
    { id: 6, name: "Frank Castle", role: "Stamp", department: "Legal" },
    { id: 7, name: "Grace Lee", role: "Admin", department: "HR" },
    { id: 8, name: "Henry Ford", role: "Custodian", department: "Logistics" },
    { id: 9, name: "Isla Fisher", role: "Stamp", department: "Finance" },
    { id: 10, name: "Jack Black", role: "Admin", department: "Marketing" },
    { id: 1, name: "Alice Johnson", role: "Admin", department: "HR" },
    { id: 2, name: "Bob Smith", role: "Custodian", department: "Maintenance" },
    { id: 3, name: "Charlie Brown", role: "Stamp", department: "Legal" },
    { id: 4, name: "David Miller", role: "Admin", department: "Finance" },
    { id: 5, name: "Eva Green", role: "Custodian", department: "IT" },
    { id: 6, name: "Frank Castle", role: "Stamp", department: "Legal" },
    { id: 7, name: "Grace Lee", role: "Admin", department: "HR" },
    { id: 8, name: "Henry Ford", role: "Custodian", department: "Logistics" },
    { id: 9, name: "Isla Fisher", role: "Stamp", department: "Finance" },
    { id: 10, name: "Jack Black", role: "Admin", department: "Marketing" },
    { id: 1, name: "Alice Johnson", role: "Admin", department: "HR" },
    { id: 2, name: "Bob Smith", role: "Custodian", department: "Maintenance" },
    { id: 3, name: "Charlie Brown", role: "Stamp", department: "Legal" },
    { id: 4, name: "David Miller", role: "Admin", department: "Finance" },
    { id: 5, name: "Eva Green", role: "Custodian", department: "IT" },
    { id: 6, name: "Frank Castle", role: "Stamp", department: "Legal" },
    { id: 7, name: "Grace Lee", role: "Admin", department: "HR" },
    { id: 8, name: "Henry Ford", role: "Custodian", department: "Logistics" },
    { id: 9, name: "Isla Fisher", role: "Stamp", department: "Finance" },
    { id: 10, name: "Jack Black", role: "Admin", department: "Marketing" },
  ];
  type ColumnType = "text" | "dropdown" | "checkbox" | undefined;

  interface ColumnDefinition {
    key: string;
    label: string;
    type?: ColumnType;
    options?: string[];
  }
  
  export const columnDefinitions: ColumnDefinition[] = [
    { key: "id", label: "ID", type: "text" },
    { key: "name", label: "Name", type: "text" },
    { key: "role", label: "Role", type: "text" },
    {
      key: "department",
      label: "Department",
      type: "dropdown",
      options: ["Maintenance", "HR", "IT", "Admin", "Finance", "Legal", "Logistics", "Marketing"],
    },
  ];
  

export default function Employee() {
  const [page, setPage] = useState(1);

  return (
    <div className="p-6">
      <BaseTable
        data={employees}
        pageSize={10}
        currentPage={page}
        onPageChange={setPage}
        showCheckbox={true}
        //columnDefinitions={columnDefinitions}
      />
    </div>
  );
}
