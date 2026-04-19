"use client";

import { useParams } from "next/navigation";

export default function NoteDetails() {
  const { id } = useParams();

  return (
    <main>
      <h1>Note {id}</h1>
    </main>
  );
}
