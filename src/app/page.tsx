import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <span className="font-bold mb-5">
          Do you like to see my fancy todolist?
        </span>
        <Link className="rounded-lg bg-red-200 py-2 px-4" href="/todoList">
          Let's Go
        </Link>
      </div>
    </div>
  );
}
