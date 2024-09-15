export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#2029BA]">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            FlatChat
          </h1>
          <p className="text-2xl text-white">
            The SuperApp for Friends and Flatmates
          </p>
        </div>
        <footer className="absolute bottom-0 w-full py-4 text-white text-center">
          <div className="flex justify-center space-x-4">
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/delete-account" className="hover:underline">
              Delete Account
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
