const Search = () => {
  return (
    <div class="flex justify-around">
      <form>
        <div class="max-w-[1200px] w-[100%]">
          <div class="flex space-x-1 items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p class="text-white text-lg font-semibold">
              Please enter something
            </p>
          </div>
          <div class="flex space-x-4">
            <div class="flex rounded-md overflow-hidden min-w-[500px]">
              <input type="text" class="rounded-md rounded-r-none  w-[100%]" />
              <button class="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md">
                Go
              </button>
            </div>
            <button class="bg-white px-6 text-lg font-semibold py-4 rounded-md">
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
