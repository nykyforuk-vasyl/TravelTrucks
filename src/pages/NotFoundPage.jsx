import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main className="flex size-full h-screen flex-col items-center justify-center rounded-[60px] bg-lightGrey text-center">
      <h1 className="text-9xl font-extrabold text-black">404</h1>
      <p className="mt-4 text-2xl font-semibold text-darkGrey">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <p className="mt-2 text-darkGrey">
        You may have mistyped the address or the page may have moved.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="mt-6 inline-block rounded-full bg-red px-[48px] py-4 text-base text-white transition-colors hover:bg-darkRed active:bg-darkRed"
      >
        Go Back
      </button>
    </main>
  );
}
