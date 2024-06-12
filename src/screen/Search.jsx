import {useEffect, useRef, useState} from "react";
import Pill from "../components/Pill";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUserSet, setSelectedUserSet] = useState(new Set());
  const [activeSuggestion, setActiveSuggestion] = useState(0);

  const inputRef = useRef(null);

  // https://dummyjson.com/users/search?q=Jo

  useEffect(() => {
    const fetchUsers = () => {
      setActiveSuggestion(0);
      if (searchTerm.trim() === "") {
        setSuggestions([]);
        return;
      }

      fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => setSuggestions(data))
        .catch((err) => {
          console.error(err);
        });
    };

    fetchUsers();
  }, [searchTerm]);

  const handleSelectUser = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setSelectedUserSet(new Set([...selectedUserSet, user.email]));
    setSearchTerm("");
    setSuggestions([]);
    inputRef.current.focus();
  };

  const handleRemoveUser = (user) => {
    const updatedUsers = selectedUsers.filter(
      (selectedUser) => selectedUser.id !== user.id
    );
    setSelectedUsers(updatedUsers);

    const updatedEmails = new Set(selectedUserSet);
    updatedEmails.delete(user.email);
    setSelectedUserSet(updatedEmails);
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" &&
      e.target.value === "" &&
      selectedUsers.length > 0
    ) {
      const lastUser = selectedUsers[selectedUsers.length - 1];
      handleRemoveUser(lastUser);
      setSuggestions([]);
    } else if (e.key === "ArrowDown" && suggestions?.users?.length > 0) {
      e.preventDefault();
      setActiveSuggestion((prevIndex) =>
        prevIndex < suggestions.users.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp" && suggestions?.users?.length > 0) {
      e.preventDefault();
      setActiveSuggestion((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else if (
      e.key === "Enter" &&
      activeSuggestion >= 0 &&
      activeSuggestion < suggestions.users.length
    ) {
      handleSelectUser(suggestions.users[activeSuggestion]);
    }
  };

  return (
    <div className="flex relative">
    <div className="flex items-center flex-wrap gap-2.5 p-1.5 border border-gray-300 rounded-full w-full">
      {/* Pills */}
      {selectedUsers.map((user) => {
        return (
          <Pill
            key={user.email}
            image={user.image}
            text={`${user.firstName} ${user.lastName}`}
            onClick={() => handleRemoveUser(user)}
          />
        );
      })}
      {/* input feild with search suggestions */}
      <div>
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search For a User..."
          onKeyDown={handleKeyDown}
          className="border-none h-5 p-1.5 focus:outline-none"
        />
        {/* Search Suggestions */}
        <ul className="max-h-75 overflow-y-scroll list-none p-0 m-0 absolute bg-white border border-gray-300">
          {suggestions?.users?.map((user, index) => {
            return !selectedUserSet.has(user.email) ? (
              <li
                className={`flex items-center gap-2.5 p-2.5 cursor-pointer ${
                  index === activeSuggestion ? "bg-gray-300" : ""
                } border-b border-gray-300 last:border-b-0`}
                key={user.email}
                onClick={() => handleSelectUser(user)}
              >
                <img
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="h-5"
                />
                <span>
                  {user.firstName} {user.lastName}
                </span>
              </li>
            ) : (
              <></>
            );
          })}
        </ul>
      </div>
    </div>
  </div>
  );
}

export default Search;