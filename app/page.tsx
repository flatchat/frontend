export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#2029BA]">
        <header className="text-center">
          <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">FlatChat</h1>
          <p className="text-2xl text-white mt-4">
            The SuperApp for Friends and Flatmates
          </p>
        </header>
        <button className="mt-8 px-6 py-3 bg-white text-[#2029BA] text-lg font-semibold rounded-lg shadow-md hover:bg-[#939394] hover:text-white transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </>
  );
}
