"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${query}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-sm items-center space-x-2"
    >
      <Input
        type="text"
        placeholder="The Godfather II"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-black tabs sm:h-[70%] h-[50%]"
      />
      <Button type="submit" size="icon" className="h-8">
        <MagnifyingGlassIcon></MagnifyingGlassIcon>
      </Button>
    </form>
  );
};

export default SearchInput;
