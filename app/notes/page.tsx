"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";

import NoteList from "@/components/NoteList/NoteList";
import SearchBox from "@/components/SearchBox/SearchBox";
import Pagination from "@/components/Pagination/Pagination";

export default function NotesPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["notes", page, search],
    queryFn: () => fetchNotes({ page, perPage: 12, search }),
    placeholderData: (prev) => prev,
  });

  const notes = data?.notes || [];

  return (
    <div>
      <SearchBox onSearch={setSearch} />

      {data?.totalPages > 1 && (
        <Pagination
          totalPages={data.totalPages}
          page={page}
          onChange={setPage}
        />
      )}

      {isLoading && <p>Loading...</p>}

      {notes.length > 0 && <NoteList notes={notes} />}
    </div>
  );
}
