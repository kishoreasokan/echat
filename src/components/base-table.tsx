import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type ColumnDefinition = {
  key: string;
  label?: string;
  type?: "text" | "dropdown" | "checkbox";
  options?: string[]; // for dropdown
};

type BaseTableProps<T> = {
  data: T[];
  pageSize?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  height?: string;
  loadMoreThreshold?: number;
  columnDefinitions?: ColumnDefinition[];
  showCheckbox?: boolean;
};

export function BaseTable<T extends Record<string, any>>({
  data,
  pageSize,
  currentPage,
  onPageChange,
  height = "500px",
  loadMoreThreshold = 100,
  columnDefinitions = [],
  showCheckbox = true,
}: BaseTableProps<T>) {
  const isControlled =
    typeof currentPage === "number" && typeof onPageChange === "function";
  const [internalPage, setInternalPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  }>({
    key: "",
    direction: "asc",
  });

  const page = isControlled ? currentPage! : internalPage;

  const paginatedData = useMemo(() => {
    let sortedData = [...data];

    if (sortConfig.key) {
      sortedData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    if (pageSize) {
      const start = (page - 1) * pageSize;
      sortedData = sortedData.slice(start, start + pageSize);
    }

    return sortedData;
  }, [data, page, pageSize, sortConfig]);

  const totalPages = pageSize ? Math.ceil(data.length / pageSize) : 1;

  const tableContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!tableContainerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = tableContainerRef.current;

    if (scrollHeight - scrollTop <= clientHeight + loadMoreThreshold) {
      if (!isControlled) {
        setInternalPage((prev) => Math.min(prev + 1, totalPages));
      } else {
        onPageChange!(page + 1);
      }
    }
  };

  const headers = Object.keys(data[0] || {});

  const handlePageChange = (newPage: number) => {
    if (!isControlled) {
      setInternalPage(newPage);
    } else {
      onPageChange!(newPage);
    }
  };

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const toggleRowSelection = (id: number) => {
    setSelectedRows((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };

  const toggleSelectAll = () => {
    const currentIds = paginatedData.map((_, idx) =>
      pageSize ? (page - 1) * pageSize + idx : idx
    );
    const allSelected = currentIds.every((id) => selectedRows.has(id));

    setSelectedRows((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (allSelected) {
        currentIds.forEach((id) => newSelected.delete(id));
      } else {
        currentIds.forEach((id) => newSelected.add(id));
      }
      return newSelected;
    });
  };

  const isAllSelected =
    paginatedData.length > 0 &&
    paginatedData.every((_, idx) =>
      selectedRows.has(pageSize ? (page - 1) * pageSize + idx : idx)
    );

  const renderPageLinks = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={page === i}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      const startPage = Math.max(1, page - 1);
      const endPage = Math.min(totalPages, startPage + 2);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={page === i}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (endPage < totalPages) {
        pages.push(
          <PaginationItem key="ellipsis">
            <PaginationLink
              href="#"
              onClick={() => handlePageChange(endPage + 1)}
            >
              ...
            </PaginationLink>
          </PaginationItem>
        );
      }
    }

    return pages;
  };

  return (
    <div className="w-full rounded-md border border-gray-300 overflow-hidden">
      <div
        ref={tableContainerRef}
        className="overflow-auto grid w-full [&>div]:min-h-[300px] [&>div]:border [&>div]:rounded"
        style={{ height }}
        onScroll={handleScroll}
      >
        <Table>
          <TableHeader>
            <TableRow>
              {showCheckbox ? (
                <TableCell className="p-3">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    onChange={toggleSelectAll}
                  />
                </TableCell>
              ) : (
                <TableCell className="p-3"></TableCell> // Empty cell with p-3 when no checkbox
              )}
              {headers.map((key) => {
                const colDef = columnDefinitions.find((col) => col.key === key);
                return (
                  <TableCell
                    key={key}
                    className="[&>*]:whitespace-nowrap sticky top-0 bg-background after:content-[''] after:inset-x-0 after:h-px after:bg-border after:absolute after:bottom-0"
                  >
                    {colDef?.label || key}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedData.map((row, idx) => (
              <TableRow
                key={idx}
                className="odd:bg-muted/50 [&>*]:whitespace-nowrap"
              >
                {showCheckbox ? (
                  <TableCell className="p-3">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(
                        pageSize ? (page - 1) * pageSize + idx : idx
                      )}
                      onChange={() =>
                        toggleRowSelection(
                          pageSize ? (page - 1) * pageSize + idx : idx
                        )
                      }
                    />
                  </TableCell>
                ) : (
                  <TableCell className="p-3"></TableCell> // Empty cell with p-3 when no checkbox
                )}
                {headers.map((key) => {
                  const colDef = columnDefinitions.find(
                    (col) => col.key === key
                  );
                  const value = row[key];

                  if (colDef?.type === "checkbox") {
                    return (
                      <TableCell key={key} className="p-2">
                        <input type="checkbox" checked={!!value} readOnly />
                      </TableCell>
                    );
                  }

                  if (colDef?.type === "dropdown" && colDef.options) {
                    return (
                      <TableCell key={key} className="p-2">
                        <select defaultValue={value}>
                          {colDef.options.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </TableCell>
                    );
                  }

                  return (
                    <TableCell key={key} className="p-2">
                      {value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {pageSize && (
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationLink
                href="#"
                aria-label="Go to first page"
                size="icon"
                onClick={() => handlePageChange(1)}
              >
                <ChevronFirst className="h-4 w-4" />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                aria-label="Go to previous page"
                size="icon"
                onClick={() => handlePageChange(Math.max(1, page - 1))}
              >
                <ChevronLeft className="h-4 w-4" />
              </PaginationLink>
            </PaginationItem>

            {renderPageLinks()}

            <PaginationItem>
              <PaginationLink
                href="#"
                aria-label="Go to next page"
                size="icon"
                onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
              >
                <ChevronRight className="h-4 w-4" />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                aria-label="Go to last page"
                size="icon"
                onClick={() => handlePageChange(totalPages)}
              >
                <ChevronLast className="h-4 w-4" />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
